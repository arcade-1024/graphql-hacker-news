import { Field, ObjectType } from '@nestjs/graphql';
import { TestApiQuery } from '../types/types';

@ObjectType('Test')
export class Test {
  @Field(() => String)
  index: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  url: string;
}
