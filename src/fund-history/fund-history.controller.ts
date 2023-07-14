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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('fund-history')
@Controller('fund-history')
export class FundHistoryController {
  constructor(private readonly fundHistoryService: FundHistoryService) {}

  @Post()
  async create(@Body() createFundHistoryDto: CreateFundHistoryDto) {
    const res = await this.fundHistoryService.create(createFundHistoryDto);
    return res.generatedMaps[0];
  }

  @Get()
  findAll() {
    return this.fundHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fundHistoryService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFundHistoryDto: UpdateFundHistoryDto,
  ) {
    const res = await this.fundHistoryService.update(id, updateFundHistoryDto);
    return res.generatedMaps[0];
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fundHistoryService.remove(id);
  }
}
