import { Module } from '@nestjs/common';
import { FundHistoryService } from './fund-history.service';
import { FundHistoryController } from './fund-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FundHistory } from './entities/fund-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FundHistory])],
  controllers: [FundHistoryController],
  providers: [FundHistoryService],
})
export class FundHistoryModule {}
