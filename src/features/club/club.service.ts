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

  findOne(id: string) {
    return this.clubRepository.findOne({ where: { id } });
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
