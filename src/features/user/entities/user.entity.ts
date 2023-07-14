import { Role } from 'src/enums/role.enum';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'my_user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar' })
  username: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'text' })
  avatar: string;

  @Column({ type: 'int' })
  age: number;

  roles: Role[];
}
