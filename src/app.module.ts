import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AuthorModule } from './author/author.module';
import { typeOrmConfig } from './config/typeorm.config';
import { NewsModule } from './news/news.module';
import { userLoader } from './task/loader/userLoader';
import { TaskModule } from './task/task.module';
import { TestModule } from './testApi/test.module';
@Module({
  imports: [
    TaskModule,
    AuthModule,
    TestModule,
    NewsModule,
    AuthorModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ request }) => ({
        req: request,
      }),
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
