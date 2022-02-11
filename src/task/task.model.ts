import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/auth/user.model';

@ObjectType('Task')
export class Task {
  @Field((type) => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  status?: TaskStatusEnum;

  @Field(() => User)
  author: User;
}

export enum TaskStatusEnum {
  OPEN = 'open',
  DONE = 'done',
}
