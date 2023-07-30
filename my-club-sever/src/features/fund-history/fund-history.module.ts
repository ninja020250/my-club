import { Module } from '@nestjs/common';
import { FundHistoryService } from './fund-history.service';
import { FundHistoryController } from './fund-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FundHistory } from './entities/fund-history.entity';
import { Club } from 'src/features/club/entities/club.entity';
import { User } from 'src/features/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FundHistory, Club, User])],
  controllers: [FundHistoryController],
  providers: [FundHistoryService],
})
export class FundHistoryModule {}
