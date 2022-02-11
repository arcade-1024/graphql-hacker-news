import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTask } from './dto/createTask.dto';
import { TaskStatusEnum } from './task.model';
import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
import { UpdateTask } from './dto/updateTask.dto';
import { UserRepository } from '../auth/user.repository';
import * as DataLoader from 'dataloader';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with ${id} not found`);
    }
    return found;
  }
  async getTasks(): Promise<Task[]> {
    const found = await this.taskRepository.find();
    if (!found) {
      throw new NotFoundException(`Task not found`);
    }
    return found;
  }
  async createTask(createTaskDto: CreateTask) {
    const { description, title } = createTaskDto;
    const task = new Task();
    task.title = title;
    task.description = description;
    task.status = TaskStatusEnum.OPEN;
    task.author = '1';
    await task.save();
    return task;
  }
  async deletePostById(id: string): Promise<Task> {
    const found = await this.getTaskById(id);
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ${id} not found`);
    }
    return found;
  }
  async updatePostById(id: string, updateTaskData: UpdateTask): Promise<Task> {
    const found = await this.getTaskById(id);
    const updateTaskKeys = Object.keys(updateTaskData);
    // updateTaskKeys.forEach((key) => (found[key] = updateTaskKeys[key]));
    updateTaskKeys.forEach((key) => (found[`${key}`] = updateTaskData[key]));

    await found.save();
    return found;
  }

  async getAuthor(id: string) {
    return await this.userRepository.findOne(parseInt(id));
  }
}
