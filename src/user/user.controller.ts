import { Body, Controller, Param } from '@nestjs/common';
import { Get, Post, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserDocument } from './schema/user.schema';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUser(id);
  }
  @Post()
  createUser(@Body() userInfo: CreateUserDto): Promise<UserDocument> {
    return this.userService.create(userInfo);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
  @Delete()
  deleteUsers() {
    return this.userService.deleteUsers();
  }
}
