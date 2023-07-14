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
import { ClubService } from './club.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/enums/role.enum';

@ApiTags('club')
@ApiBearerAuth()
@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Roles(Role.host)
  create(@Body() createClubDto: CreateClubDto) {
    return this.clubService.create(createClubDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @Roles(Role.host)
  findAll() {
    return this.clubService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    return this.clubService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateClubDto: UpdateClubDto) {
    return this.clubService.update(id, updateClubDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.clubService.remove(id);
  }
}
