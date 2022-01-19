import { Task } from 'src/tasks/task.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskMetadataDto } from './dto/create-task-metadata.dto';
import { TaskMetadata } from './task-metadata.entity';

@EntityRepository(TaskMetadata)
export class TasksMetadataRepository extends Repository<TaskMetadata> {
  async createTaskMetadata(
    createTaskMetadataDto: CreateTaskMetadataDto,
    task: Task,
  ): Promise<TaskMetadata> {
    const { details, isDeactivated } = createTaskMetadataDto;

    const taskMetadata = this.create({
      details,
      isDeactivated,
      task,
    });

    await this.save(taskMetadata);
    return taskMetadata;
  }
}
