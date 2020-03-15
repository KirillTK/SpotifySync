import {Controller, Get, Request, UseGuards} from "@nestjs/common";
import {UsersService} from 'users/users.service';
import {AuthGuard} from 'auth/AuthGuard';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService){}

  @UseGuards(AuthGuard)
  @Get('profile')
  async profile(@Request() req) : Promise<any> {
    const { accessToken } = req.user;
    return this.usersService.getUserProfile(accessToken);
  }
}