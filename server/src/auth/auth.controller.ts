import {Controller, Get, Request, UseGuards} from "@nestjs/common";
import {SpotifyAuthGuard} from "./spotify-auth-guard";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService){}

  @UseGuards(new SpotifyAuthGuard())
  @Get('login')
  async login(@Request() req) {}

  @UseGuards(new SpotifyAuthGuard())
  @Get('callback')
  async callback(@Request() req) : Promise<any> {
    return this.authService.getRefreshedAccessToken(req.user.refreshToken);
  }
}