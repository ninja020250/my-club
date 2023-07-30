import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { User } from '../user/entities/user.entity';
import { Club } from '../club/entities/club.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, User, Club])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
