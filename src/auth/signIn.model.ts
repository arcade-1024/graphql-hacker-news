import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('SignIn')
export class SignIn {
  @Field(() => String)
  accessToken: string;
}
