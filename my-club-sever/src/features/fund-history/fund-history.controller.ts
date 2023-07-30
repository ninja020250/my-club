import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FundHistoryService } from './fund-history.service';
import { CreateFundHistoryDto } from './dto/create-fund-history.dto';
import { UpdateFundHistoryDto } from './dto/update-fund-history.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('fund-history')
@ApiBearerAuth()
@Controller('fund-history')
export class FundHistoryController {
  constructor(private readonly fundHistoryService: FundHistoryService) {}

  @Post()
  @UseGuards(AuthGuard)
  async create(@Body() createFundHistoryDto: CreateFundHistoryDto) {
    const res = await this.fundHistoryService.create(createFundHistoryDto);
    return res.generatedMaps[0];
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.fundHistoryService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.fundHistoryService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateFundHistoryDto: UpdateFundHistoryDto,
  ) {
    const res = await this.fundHistoryService.update(id, updateFundHistoryDto);
    return res.generatedMaps[0];
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.fundHistoryService.remove(id);
  }
}
