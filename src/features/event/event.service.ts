import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { Club } from '../club/entities/club.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Club)
    private clubRepository: Repository<Club>,
  ) {}

  create(createEventDto: CreateEventDto) {
    const userExist = this.userRepository.exist({
      where: { id: createEventDto.createdBy },
    });
    const clubExist = this.clubRepository.exist({
      where: { id: createEventDto.clubId },
    });
    if (!userExist || !clubExist) throw new NotFoundException();
    return this.eventRepository
      .createQueryBuilder()
      .insert()
      .values(createEventDto)
      .returning('*')
      .execute();
  }

  countRemainingSlot(eventId: string) {
    return this.eventRepository.query(
      `
    SELECT 
    COUNT(u.id) as registedQuantity, (e.num_of_slot  - COUNT(u.id)) as "remainingSlot"
    FROM event e
    LEFT JOIN club c on c.id::TEXT = e.club_id::TEXT
    LEFT JOIN event_user eu on eu.event_id::TEXT = e.id::TEXT
    LEFT JOIN my_user u on eu.user_id::TEXT = u.id::TEXT
    WHERE e.id = '${eventId}'
    GROUP BY u.id, e.num_of_slot;
    `,
    );
  }

  findAllByClubId(clubId: string) {
    return this.eventRepository.query(
      `
      SELECT 
        e.id, 
        e.name,
        e.description,
        e.num_of_slot AS "numOfSlot",
        e.effective_date as "effectiveDate",
        e.created_by as "createdBy",
        e.created_date as "createdDate",
        e.start_date as "startDate",
        e.end_date as "endDate",
        e.club_id as "clubId",
        e.location,
        ARRAY_AGG(jsonb_build_object('id', u.id, 'name', u.name, 'avatar', u.avatar)) as participants
      FROM event e
      LEFT JOIN club c on c.id::TEXT = e.club_id::TEXT
      LEFT JOIN event_user eu on eu.event_id::TEXT = e.id::TEXT
      LEFT JOIN my_user u on eu.user_id::TEXT = u.id::TEXT
      WHERE c.id = '${clubId}'
      GROUP BY e.id, e.name, e.description,e.num_of_slot, e.effective_date, e.created_by, e.created_date, e.club_id, e.location;
      `,
    );
  }

  playerRegisterForEvent(eventId: string, playerId: string) {
    const eventExist = this.eventRepository.exist({ where: { id: eventId } });
    const userExist = this.userRepository.exist({ where: { id: playerId } });
    if (!eventExist || !userExist) throw new NotFoundException();
    return this.eventRepository.query(
      `
      INSERT INTO event_user(event_id, user_id)
      VALUES ('${eventId}', '${playerId}')
      `,
    );
  }

  playerUnregisterForEvent(eventId: string, playerId: string) {
    const eventExist = this.eventRepository.exist({ where: { id: eventId } });
    const userExist = this.userRepository.exist({ where: { id: playerId } });
    if (!eventExist || !userExist) throw new NotFoundException();
    return this.eventRepository.query(
      `
      DELETE FROM
        event_user eu
      WHERE eu.user_id = '${playerId}' AND eu.event_id = '${eventId}'
      RETURNING *;
      `,
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} event`;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
