import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class FundHistory extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    default: 0,
  })
  amount: number;

  @Column()
  note: string;

  @Column({ name: 'created_date' })
  createdDate: Date;

  @Column({ name: 'created_by' })
  createdBy: string;

  @Column({ name: 'club_id' })
  clubId: string;
}
