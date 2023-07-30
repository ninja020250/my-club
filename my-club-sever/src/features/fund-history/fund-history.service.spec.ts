import { Test, TestingModule } from '@nestjs/testing';
import { FundHistoryService } from './fund-history.service';

describe('FundHistoryService', () => {
  let service: FundHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FundHistoryService],
    }).compile();

    service = module.get<FundHistoryService>(FundHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
