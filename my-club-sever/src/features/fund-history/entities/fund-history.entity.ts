import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class FundHistory extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 0,
    default: 0,
  })
  amount: number;

  @Column()
  note: string;

  @CreateDateColumn({ name: 'created_date', type: 'timestamp' })
  createdDate: Date;

  @Column({ name: 'created_by' })
  createdBy: string;

  @Column({ name: 'club_id' })
  clubId: string;
}
