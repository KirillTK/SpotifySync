import {Controller, Get, Request, UseGuards} from "@nestjs/common";
import {SpotifyAuthGuard} from './spotify-auth-guard';
import {UsersService} from 'users/users.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly usersService: UsersService){}

  @UseGuards(new SpotifyAuthGuard())
  @Get('login')
  async login(@Request() req) {}

  @UseGuards(new SpotifyAuthGuard())
  @Get('callback')
  async callback(@Request() req) : Promise<any> {
    return 'Saved!';
  }
}