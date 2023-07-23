import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { encodeMD5 } from '../../utils/crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const encodedPass = encodeMD5(createUserDto.password);
    createUserDto.password = encodedPass;
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
        ARRAY_AGG(jsonb_build_object('name',  r.name, 'description', r.description)) as roles
      FROM
          my_user u
          LEFT JOIN user_role ur ON ur.user_id = u.id::TEXT
          LEFT JOIN role r ON ur.role_name = r.name::TEXT
      GROUP BY
          u.username;
      `,
    );
  }

  async findOne(id: string) {
    const result = await this.userRepository.query(
      `SELECT
        u.username,
        ARRAY_AGG(jsonb_build_object('name',  r.name, 'description', r.description)) as roles
      FROM
          my_user u
          LEFT JOIN user_role ur ON ur.user_id = u.id::TEXT
          LEFT JOIN role r ON ur.role_name = r.name::TEXT
      WHERE u.id::TEXT='${id}'
      GROUP BY 
        u.username, u.id;
      `,
    );
    return result.length ? result[0] : null;
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

  updatePassword(username: string, password: string) {
    const encodedPass = encodeMD5(password);
    return this.userRepository
      .createQueryBuilder()
      .update({ password: encodedPass })
      .where('username = :username', { username })
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

  async usernameExist(username: string) {
    const result = await this.userRepository.findOne({ where: { username } });
    return result != null;
  }
}
