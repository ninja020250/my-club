import { Injectable } from '@nestjs/common';
import { CreateFundHistoryDto } from './dto/create-fund-history.dto';
import { UpdateFundHistoryDto } from './dto/update-fund-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FundHistory } from './entities/fund-history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FundHistoryService {
  constructor(
    @InjectRepository(FundHistory)
    private fundHistoryRepository: Repository<FundHistory>,
  ) {}

  create(createFundHistoryDto: CreateFundHistoryDto) {
    return this.fundHistoryRepository.insert(createFundHistoryDto);
  }

  findAll() {
    return `This action returns all fundHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fundHistory`;
  }

  update(id: number, updateFundHistoryDto: UpdateFundHistoryDto) {
    return `This action updates a #${id} fundHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} fundHistory`;
  }
}
