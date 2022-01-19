import { Controller, Logger, Post } from '@nestjs/common';
import { TasksMetadataService } from './tasks-metadata.service';

@Controller('task-metadata')
export class TasksMetadataController {
  private logger = new Logger('TaskController');

  constructor(private tasksMetadataService: TasksMetadataService) {}

 
}
