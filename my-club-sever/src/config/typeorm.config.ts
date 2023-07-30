import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Club } from 'src/features/club/entities/club.entity';
import { FundHistory } from 'src/features/fund-history/entities/fund-history.entity';
import { Role } from 'src/features/role/entities/role.entity';
import { User } from 'src/features/user/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'myClub',
  //   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  entities: [FundHistory, Club, User, Role, Event],
  synchronize: true,
  autoLoadEntities: true,
};
