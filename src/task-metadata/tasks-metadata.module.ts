import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { TasksRepository } from 'src/tasks/tasks.repository';
import { TasksMetadataController } from './tasks-metadata.controller';
import { TasksMetadataRepository } from './tasks-metadata.repository';
import { TasksMetadataService } from './tasks-metadata.service';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forFeature([TasksMetadataRepository, TasksRepository]),
  ],
  controllers: [TasksMetadataController],
  providers: [TasksMetadataService],
})
export class TasksMetadataModule {}
