import { ApiProperty } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ default: 'Đánh cố định T3' })
  name: string;

  @ApiProperty({ default: 'Mô tả' })
  description: string;

  @ApiProperty({ default: 12 })
  numOfSlot: number;

  @ApiProperty()
  effective_date: Date;

  @ApiProperty()
  startDate: Date;

  @ApiProperty()
  endDate: Date;

  @ApiProperty()
  createdBy: string;

  @ApiProperty()
  clubId: string;

  @ApiProperty({ default: 'Sân cầu hoa sen' })
  location: string;
}
