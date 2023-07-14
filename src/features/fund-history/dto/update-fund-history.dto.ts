import { PartialType } from '@nestjs/mapped-types';
import { CreateFundHistoryDto } from './create-fund-history.dto';

export class UpdateFundHistoryDto extends PartialType(CreateFundHistoryDto) {}
