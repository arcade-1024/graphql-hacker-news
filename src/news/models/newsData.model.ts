import { Field, ObjectType } from '@nestjs/graphql';
import { Author } from './author.model';

@ObjectType('News')
export class News {
  @Field({ nullable: true })
  created_at: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  url: string;

  @Field(() => Author, { nullable: true })
  author: Author;

  @Field({ nullable: true })
  points: number;

  @Field({ nullable: true })
  story_text: string;

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

  @Field({ nullable: true })
  created_at_i: string;

  @Field({ nullable: true })
  relevancy_score: string;
}
