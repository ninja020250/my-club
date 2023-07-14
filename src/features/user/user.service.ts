import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    return this.userRepository
      .createQueryBuilder()
      .insert()
      .values(createUserDto)
      .returning('*')
      .execute();
  }

  findAll() {
    return this.userRepository.query(
      `SELECT
        u.username,
        ARRAY_AGG(jsonb_build_object('id', 'name', 'description', r.id, r.name, r.description)) as roles
      FROM
          my_user u
          LEFT JOIN user_role ur ON ur.user_id = u.id::TEXT
          LEFT JOIN role r ON ur.role_id = r.id::TEXT
      GROUP BY
          u.username;
      `,
    );
  }

  findOne(id: string) {
    return this.userRepository.findOne({ where: { id } });
  }

  findOneByUsername(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository
      .createQueryBuilder()
      .update(updateUserDto)
      .where('id = :id', { id })
      .returning('*')
      .execute();
  }

  remove(id: string) {
    return this.userRepository
      .createQueryBuilder()
      .delete()
      .where('id = :id', { id })
      .returning('*')
      .execute();
  }
}
