import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FundHistoryModule } from './features/fund-history/fund-history.module';
import { ClubModule } from './features/club/club.module';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { UserModule } from './features/user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RoleModule } from './features/role/role.module';
import { AuthorizationModule } from './authorization/authorization.module';
import { AuthorizationGuard } from './authorization/authorization.guard';
import { EventModule } from './features/event/event.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync(typeOrmConfigAsync),
    FundHistoryModule,
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
