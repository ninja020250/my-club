import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Club } from 'src/club/entities/club.entity';
import { FundHistory } from 'src/fund-history/entities/fund-history.entity';
import { User } from 'src/user/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'myClub',
  //   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  entities: [FundHistory, Club, User],
  synchronize: true,
  autoLoadEntities: true,
};
