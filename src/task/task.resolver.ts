import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Task } from './task.model';
import { TaskService } from './task.service';
import { UpdatePostInputType } from './dto/updateTask.dto';
import { User } from 'src/auth/user.model';
import { userLoader } from './loader/userLoader';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private taskService: TaskService) {}
  @Query(() => Task)
  async getTaskById(@Args('id', { type: () => String }) id: string) {
    return await this.taskService.getTaskById(id);
  }

  @Mutation(() => Task)
  async createPost(
    @Args('title', { type: () => String }) title: string,
    @Args('description', { type: () => String }) description: string,
  ) {
    return await this.taskService.createTask({ title, description });
  }

  @Mutation(() => Task)
  deletePostById(@Args('id', { type: () => String }) id: string) {
    return this.taskService.deletePostById(id);
  }

  @Mutation(() => Task)
  updateTaskById(
    @Args('id', { type: () => String }) id: string,
    @Args('updateTaskData') updateTaskData: UpdatePostInputType,
  ) {
    return this.taskService.updatePostById(id, updateTaskData);
  }
  @Query(() => [Task])
  async getTasks() {
    return await this.taskService.getTasks();
  }
  @ResolveField('author', () => User)
  async getAuthor(@Parent() parent: Task) {
    const { author } = parent;
    // return await this.taskService.getAuthor(`${author}`);
    return userLoader.load(`${author}`);
  }
}
