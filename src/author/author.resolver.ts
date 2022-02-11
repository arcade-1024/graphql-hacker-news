import { Resolver, Parent, ResolveField, Args } from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { Author } from '../news/models/author.model';
import { News } from '../news/models/newsData.model';
import { Comment } from '../news/models/comment.model';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private authorService: AuthorService) {}

  @ResolveField('comment', () => [Comment])
  async getAuthorComments(
    @Parent() parent: Author,
    @Args('pageNumber', { type: () => String, nullable: true })
    pageNumber: string,
    @Args('hitsPerPage', { type: () => String, nullable: true })
    hitsPerPage: string,
  ) {
    const { username } = parent;
    return this.authorService.getAuthorComments({
      author: `${username}`,
      hitsPerPage,
      pageNumber,
    });
  }
}
