import { InternalServerErrorException, Logger } from '@nestjs/common';
import { User } from 'src/auth/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { GetTaskMetadataDto } from 'src/task-metadata/dto/get-task-metadata.dto';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
  private logger = new Logger('TaskRepository', { timestamp: true });

  async getTaskById(id: string): Promise<Task> {
    return this.findOne(id);
  }

  async getDetailsTaskById(
    id: string,
    task: Task,
    filterDto: GetTaskMetadataDto,
  ): Promise<Task> {
    const { details, isDeactivated } = filterDto;
    const query = this.createQueryBuilder('task');
    query.where({ task: id, limit: 1 });

    if (details) {
      query.andWhere('taskmetadata.details= :details', { details: details });
    }
    if (!isDeactivated) {
      query.andWhere('taskmetadata.isDeactivated= :isDeactivated', {
        isDeactivated: isDeactivated,
      });
    }
    const detailsTask = await query
      .innerJoinAndSelect('task.taskMetadata', 'taskMetadata')
      .getOne();
    return detailsTask;
  }

  async getTasks(filterDto: GetTasksFilterDto, user: User): Promise<Task[]> {
    const { status, search } = filterDto;
    const query = this.createQueryBuilder('task');

    query.where({ user });

    if (status) {
      query.andWhere('task.status = :status', { status });
    }

    if (search) {
      query.andWhere(
        '(LOWER(task.title) LIKE( :search) OR LOWER(task.description) LIKE (:search))',
        { search: `%${search}%` },
      );
    }
    try {
      const tasks = await query
        .innerJoinAndSelect('task.user', 'user')
        .getMany();
      return tasks;
    } catch (error) {
      this.logger.error(
        `Failed to get tasks for user "${user.username}". Filters: $JSON.stringify(filterDto)`,
        error.stack,
      );
      throw new InternalServerErrorException();
    }
  }

  async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const { title, description } = createTaskDto;

    const task = this.create({
      title,
      description,
      status: TaskStatus.OPEN,
      user,
    });

    await this.save(task);
    return task;
  }
}
