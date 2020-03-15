import {HttpModule, Module} from '@nestjs/common';
import { UsersService } from './users.service';
import {UserController} from 'users/user.controller';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
