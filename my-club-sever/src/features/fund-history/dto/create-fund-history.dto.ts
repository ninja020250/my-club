import { ApiProperty } from '@nestjs/swagger';

export class CreateFundHistoryDto {
  @ApiProperty({ default: 'demo_fund_history_name' })
  name: string;

  @ApiProperty({ default: 100000 })
  amount: number;

  @ApiProperty({ default: 100000 })
  note: string;

  @ApiProperty({ default: 100000 })
  createdBy: string;

  @ApiProperty({ default: 100000 })
  clubId: string;
}
