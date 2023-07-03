import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { FundHistory } from '../entity/fund-history.entity';
export const typeOrmConfig: TypeOrmModuleOptions = {
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
};
