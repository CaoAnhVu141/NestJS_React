import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from 'src/app.service';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';


@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
  ) { }

  @Public()
  @UseGuards(LocalAuthGuard)
  @ResponseMessage("Login success")
  @Post('/login')
  handleLogin(@Request() req) {
    return this.authService.loginData(req.user);
  }

  @Public()
//   @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

}
