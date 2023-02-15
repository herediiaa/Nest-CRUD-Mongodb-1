import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Injectable()
export class UserService {
  getUsers() {
    return 'User beach';
  }
  getUser(id: string) {
    return `User ${id}`;
  }
  createUser(userInfo: CreateUserDto) {
    const response = {
      code: 200,
      message: 'user created',
      data: userInfo,
    };
    return response;
  }
  deleteUser(id: string) {
    return `user ${id} delete`;
  }
}
