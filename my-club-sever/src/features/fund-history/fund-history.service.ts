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

  findAll({
    fromDate,
    toDate,
    page = 1,
    perPage = 10,
  }: {
    fromDate: string;
    toDate: string;
    page?: number;
    perPage?: number;
  }) {
    const offset = (page - 1) * perPage;
    return this.fundHistoryRepository.query(
      `
      WITH paginated_transactions AS ( SELECT SUM(amount) OVER () AS total, 
          id,
          name,
          amount,
          note,
          created_date as "createdDate",
          created_by as "createdBy",
          club_id as "clubId"
        FROM fund_history
        ORDER BY created_date DESC
        FETCH FIRST $1 ROWS ONLY
        OFFSET $2
    )
    
      SELECT
      pt.*,
      (SELECT SUM(amount) FROM fund_history WHERE created_date BETWEEN $3 AND $4) AS balance
      FROM paginated_transactions pt;
    `,
      [perPage, offset, fromDate, toDate],
    );
    // return this.fundHistoryRepository
    //   .createQueryBuilder('fund_history')
    //   .orderBy('fund_history.created_date', 'ASC')
    //   .select([
    //     'fund_history.id',
    //     'fund_history.name',
    //     'fund_history.amount',
    //     'fund_history.note',
    //     'fund_history.created_date AS "createdDate"',
    //     'fund_history.created_by',
    //     'fund_history.club_id',
    //   ])
    //   .where('fund_history.created_date BETWEEN :fromDate AND :toDate', {
    //     fromDate,
    //     toDate,
    //   })
    //   .skip(offset)
    //   .take(perPage)
    //   .getManyAndCount();
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
