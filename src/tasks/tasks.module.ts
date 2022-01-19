import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { AuthModule } from 'src/auth/auth.module';
import { TasksMetadataRepository } from 'src/task-metadata/tasks-metadata.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([TasksRepository, TasksMetadataRepository]),
    AuthModule,
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
