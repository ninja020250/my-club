import { ApiProperty } from '@nestjs/swagger';

export class FindAllFundHistoryDto {
  @ApiProperty({ default: '' })
  fromDate: string;

  @ApiProperty({ default: '' })
  toDate: string;
}
