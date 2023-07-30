import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FundHistoryModule } from './features/fund-history/fund-history.module';
import { ClubModule } from './features/club/club.module';
import { typeOrmConfig } from './config/typeorm.config';
import { UserModule } from './features/user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RoleModule } from './features/role/role.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { AuthorizationGuard } from './authorization/authorization.guard';
import { EventModule } from './features/event/event.module';

@Module({
  imports: [
    FundHistoryModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    ClubModule,
    UserModule,
    AuthModule,
    RoleModule,
    AuthorizationModule,
    EventModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthorizationGuard,
    },
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
