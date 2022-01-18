// import { EntityRepository, Repository } from 'typeorm';
// // import { CreateTaskMetadataDto } from './dto/create-taskMetadata.dto';
// import { TaskMetadata } from './taskmetadata.entity';

// @EntityRepository(TaskMetadata)
// export class TaskMetadatasRepository extends Repository<TaskMetadata> {
//   async createTaskMetadata(
//     // createTaskMetadataDto: CreateTaskMetadataDto,
//   ): Promise<TaskMetadata> {
//     const { details, isDeactivated } = createTaskMetadataDto;

//     const taskMetadata = this.create({
//       details,
//       isDeactivated,
//     });

//     await this.save(taskMetadata);
//     return taskMetadata;
//   }
// }
