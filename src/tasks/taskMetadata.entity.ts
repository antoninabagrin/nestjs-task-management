import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from './task.entity';

@Entity()
export class TaskMetadata {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  details: string;

  @Column({ default: true })
  isDeactivated: boolean;

  @OneToOne((type) => Task, (task) => task.id)
  @JoinColumn()
  task: Task;
}
