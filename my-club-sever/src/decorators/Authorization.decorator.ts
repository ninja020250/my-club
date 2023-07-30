import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/role.enum';

export const AUTHORIZATION_KEY = 'authorization';
export const Authorization = (...roles: Role[]) =>
  SetMetadata(AUTHORIZATION_KEY, roles);
