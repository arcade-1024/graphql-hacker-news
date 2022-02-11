import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';

@Module({
  imports: [],
  providers: [AuthorService, AuthorResolver],
})
export class AuthorModule {}
