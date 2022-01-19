import { Body, Controller, Logger, Post } from '@nestjs/common';
import { CreateTaskMetadataDto } from './dto/create-task-metadata.dto';
import { TaskMetadata } from './task-metadata.entity';
import { TasksMetadataService } from './tasks-metadata.service';

@Controller('task-metadata')
export class TasksMetadataController {
  private logger = new Logger('TaskController');

  constructor(private tasksMetadataService: TasksMetadataService) {}

  @Post()
  createTaskMetadata(
    @Body() createTaskMetadataDto: CreateTaskMetadataDto,
  ): Promise<TaskMetadata> {
    return;
    // this.logger.verbose(`createTask`);
  }
}
