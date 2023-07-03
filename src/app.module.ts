import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FundHistoryModule } from './fund-history/fund-history.module';

import { FundHistory } from './entity/fund-history.entity';

@Module({
  imports: [
    FundHistoryModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'myClub',
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      entities: [FundHistory],
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
