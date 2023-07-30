import { Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Club } from './entities/club.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClubService {
  constructor(
    @InjectRepository(Club) private clubRepository: Repository<Club>,
  ) {}

  create(createClubDto: CreateClubDto) {
    return this.clubRepository
      .createQueryBuilder()
      .insert()
      .values(createClubDto)
      .returning('*')
      .execute();
  }

  findAll() {
    return this.clubRepository.find();
  }

  findAllPlayerByClubId(clubId: string) {
    return this.clubRepository.query(
      `
      SELECT
        u.id,
        u.name,
        u.username,
        u.email,
        u.status,
        u.avatar,
        u.age
      FROM
        club c
        INNER JOIN club_user cu ON cu.club_id = c.id::TEXT
        INNER JOIN my_user u ON cu.user_id = u.id::TEXT 
      WHERE c.id::TEXT = '${clubId}';
      `,
    );
  }

  findOne(id: string) {
    return this.clubRepository.findOne({ where: { id } });
  }

  findAllByUserId(userId: string) {
    return this.clubRepository.query(`
    SELECT c.id, c.name, c.description, c.logo, c.banner, c.location
    FROM club c
    LEFT JOIN club_user cu on cu.club_id::TEXT = c.id::TEXT
    LEFT JOIN my_user mu on cu.user_id::TEXT = mu.id::TEXT
    WHERE mu.id::TEXT = '${userId}';
    `);
  }

  update(id: string, updateClubDto: UpdateClubDto) {
    return this.clubRepository
      .createQueryBuilder()
      .update(updateClubDto)
      .where('id = :id', { id })
      .returning('*')
      .execute();
  }

  remove(id: string) {
    return this.clubRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .returning('*')
      .execute();
  }
}
