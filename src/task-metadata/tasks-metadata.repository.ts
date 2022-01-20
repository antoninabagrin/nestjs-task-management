import { Logger } from '@nestjs/common';
import { Task } from 'src/tasks/task.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskMetadataDto } from './dto/create-task-metadata.dto';
import { TaskMetadata } from './task-metadata.entity';
import { v4 as uuid } from 'uuid';
import { GetTaskMetadataDto } from './dto/get-task-metadata.dto';

@EntityRepository(TaskMetadata)
export class TasksMetadataRepository extends Repository<TaskMetadata> {
  private logger = new Logger('TaskMetadataRepository', { timestamp: true });

  async getDetailsTaskById(
    id: string,
    task: Task,
    filterDto: GetTaskMetadataDto,
  ): Promise<TaskMetadata[]> {
    const { details, isDeactivated } = filterDto;
    const query = this.createQueryBuilder('taskmetadata');
    query.where({ task: id });

    if (details) {
      query.andWhere('taskmetadata.details= :details', { details });
    }
    if (!isDeactivated) {
      query.andWhere('taskmetadata.isDeactivated= :isDeactivated', {
        isDeactivated,
      });
    }
    const detailsTask = await query
      .innerJoinAndSelect('taskmetadata', 'task')
      .getMany();
    return detailsTask;
  }

  async getFilteredTasksWithDetails(
    filterDto: GetTaskMetadataDto,
    task: Task,
  ): Promise<TaskMetadata[]> {
    const { details, isDeactivated } = filterDto;
    const query = this.createQueryBuilder('taskmetadata');
    query.where({ task });

    if (details) {
      query.andWhere('taskmetadata.details= :details', { details });
    }
    if (!isDeactivated) {
      query.andWhere('taskmetadata.isDeactivated= :isDeactivated', {
        isDeactivated,
      });
    }
    const detailsTask = await query
      .innerJoinAndSelect('taskmetadata.task', 'task')
      .getMany();
    return detailsTask;
  }

  async createTaskMetadata(
    createTaskMetadataDto: CreateTaskMetadataDto,
    task: Task,
  ): Promise<TaskMetadata> {
    const { details, isDeactivated } = createTaskMetadataDto;
    const taskMetadata = this.create({
      details,
      isDeactivated: Boolean(isDeactivated),
      id: uuid(),
      task,
    });
    await this.save(taskMetadata);
    return taskMetadata;
  }
}
