import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
  NotFoundException,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Authorization } from 'src/decorators/Authorization.decorator';
import { Role } from 'src/enums/role.enum';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('event')
@ApiTags('event')
@ApiBearerAuth()
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  @UseGuards(AuthGuard)
  @Authorization(Role.Host)
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Post('register-for-event')
  @UseGuards(AuthGuard)
  @Authorization(Role.Member, Role.Host, Role.Treasurer)
  async registerForEvent(
    @Req() request: any,
    @Query('eventId') eventId: string,
  ) {
    const remainingSlot = await this.eventService.countRemainingSlot(eventId);
    const hasRegistered = await this.eventService.hasRegistered(
      request?.user?.id,
      eventId,
    );
    if (remainingSlot <= 0) {
      throw new HttpException(
        'Event has been full slot',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (hasRegistered) {
      throw new HttpException(
        'You has been in the event already!',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.eventService.playerRegisterForEvent(eventId, request?.user?.id);
  }

  @Post('unregister-for-event')
  @UseGuards(AuthGuard)
  @Authorization(Role.Member, Role.Host, Role.Treasurer)
  unregisterForEvent(@Req() request: any, @Query('eventId') eventId: string) {
    return this.eventService.playerUnregisterForEvent(
      eventId,
      request?.user?.id,
    );
  }

  @Get()
  @UseGuards(AuthGuard)
  @Authorization(Role.Member, Role.Host, Role.Treasurer)
  findAllByClubId(@Query('clubId') clubId: string) {
    if (!clubId) return new NotFoundException();
    return this.eventService.findAllByClubId(clubId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
