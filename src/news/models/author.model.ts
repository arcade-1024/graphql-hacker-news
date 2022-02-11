import { Field, ObjectType } from '@nestjs/graphql';
import { Comment } from './comment.model';

@ObjectType('Author')
export class Author {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  about: string;

  @Field({ nullable: true })
  karma: string;

  @Field(() => String)
  avg: string;

  @Field({ nullable: true })
  delay: string;

  @Field(() => String)
  created_at: string;

  @Field(() => String)
  submitted: string;

  @Field(() => String)
  updated_at: string;

  @Field(() => String)
  submission_count: string;

  @Field(() => String)
  comment_count: string;

  @Field(() => String)
  created_at_i: string;

  @Field(() => String)
  objectID: string;

  @Field(() => Comment, { nullable: true })
  comment: Comment;
}
