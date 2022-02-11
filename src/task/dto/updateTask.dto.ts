import { Field, InputType } from '@nestjs/graphql';
import { TaskStatusEnum } from '../task.model';

export class UpdateTask {
  title: string;
  description: string;
  status: TaskStatusEnum;
}

@InputType()
export class UpdatePostInputType {
  @Field({ nullable: true })
  title: string;
  @Field({ nullable: true })
  description: string;
  @Field({ nullable: true })
  status: TaskStatusEnum;
}
