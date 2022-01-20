import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Task } from 'src/tasks/task.entity';
import { CreateTaskMetadataDto } from './dto/create-task-metadata.dto';
import { GetTaskMetadataDto } from './dto/get-task-metadata.dto';
import { TaskMetadata } from './task-metadata.entity';
import { TasksMetadataService } from './tasks-metadata.service';

@Controller('task-metadata')
@UseGuards(AuthGuard())
export class TasksMetadataController {
  private logger = new Logger('TaskController');
  constructor(private tasksMetadataService: TasksMetadataService) {}

  @Get('/:id/details')
  getDetailsTaskById(
    @Param('id') id: string,
    @Query() task: Task,
    @Query() filterDto: GetTaskMetadataDto,
  ): Promise<TaskMetadata[]> {
    return this.tasksMetadataService.getDetailsTaskById(id, task, filterDto);
  }

  @Get()
  getFilteredTaskWithDetails(
    @Query() filtertDto: GetTaskMetadataDto,
    @Query() task: Task,
  ): Promise<TaskMetadata[]> {
    return this.tasksMetadataService.getFilteredTasksWithDetails(
      filtertDto,
      task,
    );
  }

  @Post()
  createTaskMetadata(
    @Body() createTaskMetadataDto: CreateTaskMetadataDto,
  ): Promise<TaskMetadata> {
    return this.tasksMetadataService.createTaskMetadata(createTaskMetadataDto);
  }
}
