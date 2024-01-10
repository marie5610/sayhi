import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Hi {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  description: string;
}
