import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public, ResponseMessage, User } from 'src/decorator/customize';
import { query } from 'express';
import { IUser } from './users.interface';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @ResponseMessage("Create user success")
  @Post()
  createUserController(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createNewService(createUserDto);
  }

  @Get()
  @ResponseMessage("Fetch list users success")
  findAllUserController(@Query("current") currentPage: string,@Query("pageSize") limit: string, @Query() qs: string) {
    return this.usersService.getAllUserService(+currentPage,+limit,qs);
  }

  @Get(':id')
  @ResponseMessage("Get user by id success")
  findOneUserController(@Param('id') id: string) {
    return this.usersService.findOneUserService(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ResponseMessage("Delete user by id success")
  removeByIdController(@Param('id') id: string, @User() user: IUser) {
    return this.usersService.removeByIdService(id,user);
  }
}
