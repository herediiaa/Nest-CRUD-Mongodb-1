import { Body, Controller, Param } from '@nestjs/common';
import { Get, Post, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getUsers() {
    return 'all users';
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    return `this is user ${id}`;
  }

  @Post()
  createUser(@Body() user) {
    const response = {
      code: 200,
      message: 'user created',
      data: user,
    };
    return response;
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return `user ${id} deleted`;
  }
}
