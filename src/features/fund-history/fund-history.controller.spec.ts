import { Test, TestingModule } from '@nestjs/testing';
import { FundHistoryController } from './fund-history.controller';
import { FundHistoryService } from './fund-history.service';

describe('FundHistoryController', () => {
  let controller: FundHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FundHistoryController],
      providers: [FundHistoryService],
    }).compile();

    controller = module.get<FundHistoryController>(FundHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
