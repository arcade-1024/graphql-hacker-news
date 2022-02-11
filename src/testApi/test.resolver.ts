import { Query, Resolver } from '@nestjs/graphql';
import { Test } from './model/test.model';
import { TestService } from './test.service';

@Resolver('test')
export class TestResolver {
  constructor(private testService: TestService) {}
  @Query(() => Test)
  async getApiTest() {
    return await this.testService.getApiTest();
  }
}
