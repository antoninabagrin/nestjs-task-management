import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/task.entity';
import { TasksRepository } from 'src/tasks/tasks.repository';
import { CreateTaskMetadataDto } from './dto/create-task-metadata.dto';
import { GetTaskMetadataDto } from './dto/get-task-metadata.dto';
import { TaskMetadata } from './task-metadata.entity';
import { TasksMetadataRepository } from './tasks-metadata.repository';

@Injectable()
export class TasksMetadataService {
  constructor(
    @InjectRepository(TasksMetadataRepository)
    private tasksMetadataRepository: TasksMetadataRepository,
    @InjectRepository(TasksRepository)
    private taskRepository: TasksRepository,
  ) {}

  async getDetailsTaskById(
    id: string,
    task: Task,
    filterDto: GetTaskMetadataDto,
  ): Promise<TaskMetadata[]> {
    return this.tasksMetadataRepository.getDetailsTaskById(id, task, filterDto);
  }

  async getFilteredTasksWithDetails(
    filterDto: GetTaskMetadataDto,
    task: Task,
  ): Promise<TaskMetadata[]> {
    return await this.tasksMetadataRepository.getFilteredTasksWithDetails(
      filterDto,
      task,
    );
  }

  async createTaskMetadata(
    createTaskMetadataDto: CreateTaskMetadataDto,
  ): Promise<TaskMetadata> {
    const { taskId } = createTaskMetadataDto;
    const task = await this.taskRepository.getTaskById(taskId);
    return this.tasksMetadataRepository.createTaskMetadata(
      createTaskMetadataDto,
      task,
    );
  }
}
