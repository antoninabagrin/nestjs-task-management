import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/task.entity';
import { CreateTaskMetadataDto } from './dto/create-task-metadata.dto';
import { TaskMetadata } from './task-metadata.entity';
import { TasksMetadataRepository } from './tasks-metadata.repository';

@Injectable()
export class TasksMetadataService {
  constructor(
    @InjectRepository(TasksMetadataRepository)
    private tasksMetadataRepository: TasksMetadataRepository,
  ) {}


  async createTaskMetadata(
    createTaskMetadataDto: CreateTaskMetadataDto,
    task: Task,
  ): Promise<TaskMetadata> {
    const taskMetadata = await this.tasksMetadataRepository.createTaskMetadata(
      createTaskMetadataDto,
      task,
    );

    return taskMetadata;
  }
 
}
