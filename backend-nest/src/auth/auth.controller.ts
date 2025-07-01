import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Public, ResponseMessage } from 'src/decorator/customize';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';


@Controller("auth")
export class AuthController {
  constructor(
    private authService: AuthService,
  ) { }

  @Public()
  @UseGuards(LocalAuthGuard)
  @ResponseMessage("Login success")
  @Post('/login')
  handleLogin(@Req() req,@Res({ passthrough: true }) response: Response) {
    return this.authService.loginData(req.user,response);
  }

  @Public()
//   @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }

}
