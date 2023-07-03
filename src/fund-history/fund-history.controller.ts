import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FundHistoryService } from './fund-history.service';
import { CreateFundHistoryDto } from './dto/create-fund-history.dto';
import { UpdateFundHistoryDto } from './dto/update-fund-history.dto';

@Controller('fund-history')
export class FundHistoryController {
  constructor(private readonly fundHistoryService: FundHistoryService) {}

  @Post()
  create(@Body() createFundHistoryDto: CreateFundHistoryDto) {
    return this.fundHistoryService.create(createFundHistoryDto);
  }

  @Get()
  findAll() {
    return this.fundHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFundHistoryDto: UpdateFundHistoryDto,
  ) {
    return this.fundHistoryService.update(+id, updateFundHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundHistoryService.remove(+id);
  }
}
