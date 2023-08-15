import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { Club } from 'src/features/club/entities/club.entity';
import { FundHistory } from 'src/features/fund-history/entities/fund-history.entity';
import { Role } from 'src/features/role/entities/role.entity';
import { User } from 'src/features/user/entities/user.entity';

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const databaseConfig = configService.get('database');
    console.log('Start Connect database ~ databaseConfig:', databaseConfig);
    return {
      type: 'postgres',
      host: databaseConfig.host,
      port: parseInt(databaseConfig.port) || 55000,
      username: databaseConfig.username,
      password: databaseConfig.password,
      database: databaseConfig.name,
      //   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      entities: [FundHistory, Club, User, Role, Event],
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    };
  },
  inject: [ConfigService],
};
