import { Injectable } from '@nestjs/common';
import { CreateFundHistoryDto } from './dto/create-fund-history.dto';
import { UpdateFundHistoryDto } from './dto/update-fund-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FundHistory } from './entities/fund-history.entity';
import { Between, Repository } from 'typeorm';
import { Club } from 'src/features/club/entities/club.entity';
import { User } from 'src/features/user/entities/user.entity';

@Injectable()
export class FundHistoryService {
  constructor(
    @InjectRepository(FundHistory)
    private fundHistoryRepository: Repository<FundHistory>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Club)
    private clubRepository: Repository<Club>,
  ) {}

  async create(createFundHistoryDto: CreateFundHistoryDto) {
    try {
      console.log('start create: fund-history');
      const clubExist = await this.clubRepository.exist({
        where: { id: createFundHistoryDto.clubId },
      });
      const userExist = await this.userRepository.exist({
        where: { id: createFundHistoryDto.createdBy },
      });
      if (!clubExist || !userExist) {
        throw new Error('club or user not found');
      }
      return this.fundHistoryRepository
        .createQueryBuilder()
        .insert()
        .values(createFundHistoryDto)
        .returning('*')
        .execute();
    } finally {
      console.log('end create: fund-history');
    }
  }

  findAll({ fromDate, toDate }: { fromDate: string; toDate: string }) {
    return this.fundHistoryRepository.find({
      where: {
        createdDate: Between(new Date(fromDate), new Date(toDate)),
      },
    });
  }

  findOne(id: string) {
    return this.fundHistoryRepository.findOne({ where: { id } });
  }

  update(id: string, updateFundHistoryDto: UpdateFundHistoryDto) {
    return this.fundHistoryRepository
      .createQueryBuilder()
      .update(updateFundHistoryDto)
      .where('id = :id', { id })
      .returning('*')
      .execute();
  }

  remove(id: string) {
    return this.fundHistoryRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .returning('*')
      .execute();
  }
}
