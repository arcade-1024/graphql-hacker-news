import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignIn } from './signIn.model';
import { User } from './user.model';

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}
  @Mutation(() => User)
  async signup(
    @Args('username', { type: () => String }) username: string,
    @Args('password', { type: () => String }) password: string,
  ) {
    return await this.authService.signUp({ username, password });
  }
  @Mutation(() => SignIn)
  async signIn(
    @Args('username', { type: () => String }) username: string,
    @Args('password', { type: () => String }) password: string,
  ) {
    return await this.authService.signIn({ username, password });
  }

  @Query(() => [User])
  async getAllUser() {
    return await this.authService.getAllUsers();
  }
}
