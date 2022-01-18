import { User } from 'src/auth/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { TaskMetadata } from './taskmetadata.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @OneToOne((type) => TaskMetadata, (taskMetadata) => taskMetadata.task)
  metadata: TaskMetadata;

  @ManyToOne((type) => User, (user) => user.tasks, { eager: false })
  user: User;
}
