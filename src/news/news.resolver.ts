import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { authorLoader } from './loader/author.loader';
import { Author } from './models/author.model';
import { News } from './models/newsData.model';
import { NewsService } from './news.service';

@Resolver(() => News)
export class NewsResolver {
  constructor(private newsService: NewsService) {}
  @Query(() => [News])
  async getPosts(
    @Args('pageNumber', { type: () => String, nullable: true })
    pageNumber: string,
    @Args('hitsPerPage', { type: () => String, nullable: true })
    hitsPerPage: string,
    @Args('query', { type: () => String, nullable: true })
    query: string,
  ) {
    return await this.newsService.getAllPost({
      pageNumber,
      hitsPerPage,
      query,
    });
  }

  @Query(() => [News])
  async getAllPostsByUser(
    @Args('pageNumber', { type: () => String, nullable: true })
    pageNumber: string,
    @Args('hitsPerPage', { type: () => String, nullable: true })
    hitsPerPage: string,
    @Args('author', { type: () => String })
    author: string,
  ) {
    return this.newsService.getAllPostsByUser({
      pageNumber,
      hitsPerPage,
      author,
    });
  }

  @ResolveField('author', () => Author)
  async getAuthor(@Parent() parent: News) {
    const { author } = parent;
    // return this.newsService.getAuthor({ author: `${author}` });
    return authorLoader.load(`${author}`);
  }
}
