import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Club extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  name: string;

  description: string;

  logo: string;

  banner: string;

  location: string;
}
