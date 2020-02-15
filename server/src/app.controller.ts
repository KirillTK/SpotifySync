import {Controller, Get, Query, Request, UseGuards} from '@nestjs/common';
import {AppService} from './app.service';
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "@nestjs/passport";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('spotify'))
  @Get('login')
  async login(@Request() req) {
  }

  @Get('callback')
  async callback(@Query() query) : Promise<any> {
    const { code } = query;

    return this.authService.requestAccessToken(code);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
