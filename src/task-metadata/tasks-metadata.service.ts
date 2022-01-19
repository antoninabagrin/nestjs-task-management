import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksMetadataRepository } from './tasks-metadata.repository';

@Injectable()
export class TasksMetadataService {
  constructor(
    @InjectRepository(TasksMetadataRepository)
    private tasksMetadataRepository: TasksMetadataRepository,
  ) {}

  // async createTaskMetadata(): Promise<void> {}
}
