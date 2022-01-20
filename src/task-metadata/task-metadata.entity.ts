import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from '../tasks/task.entity';

@Entity()
export class TaskMetadata {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  details: string;

  @Column({ default: true })
  isDeactivated: boolean;

  @OneToOne(() => Task, (task) => task.taskMetadata)
  @JoinColumn()
  task: Task;
}
