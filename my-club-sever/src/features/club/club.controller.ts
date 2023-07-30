import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { ClubService } from './club.service';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';

@ApiTags('club')
@ApiBearerAuth()
@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createClubDto: CreateClubDto) {
    return this.clubService.create(createClubDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.clubService.findAll();
  }

  @Get('my-club-members')
  @ApiQuery({
    name: 'clubId',
    required: true,
    schema: { oneOf: [{ type: 'string' }] },
  })
  @UseGuards(AuthGuard)
  findAllMemberInClub(@Query('clubId') clubId: string) {
    return this.clubService.findAllPlayerByClubId(clubId);
  }

  @Get('my-club')
  @UseGuards(AuthGuard)
  finMyClub(@Req() request: any) {
    return this.clubService.findAllByUserId(request.user.id);
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
