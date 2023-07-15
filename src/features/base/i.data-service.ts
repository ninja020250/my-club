import { User } from '../user/entities/user.entity';
import { IGenericRepository } from './i.generic.repository';

export abstract class IDataService {
  abstract userRepository: IGenericRepository<User>;
}
