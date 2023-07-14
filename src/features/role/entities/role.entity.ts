import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'role' })
export class Role {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
