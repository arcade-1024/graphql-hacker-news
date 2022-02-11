import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from 'src/auth/user.repository';
import { TaskRepository } from './task.repository';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([TaskRepository]),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  providers: [TaskResolver, TaskService],
})
export class TaskModule {}
