import { Field, ObjectType } from '@nestjs/graphql';
import { Author } from './author.model';

@ObjectType('Comment')
export class Comment {
  @Field({ nullable: true })
  created_at: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  url: string;

  @Field({ nullable: true })
  comment_text: string;

  @Field({ nullable: true })
  num_comments: string;

  @Field({ nullable: true })
  story_id: string;

  @Field({ nullable: true })
  story_title: string;

  @Field({ nullable: true })
  story_url: string;

  @Field({ nullable: true })
  parent_id: string;
}
