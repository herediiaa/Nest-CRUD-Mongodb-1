import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUsers() {
    return 'User beach';
  }
  getUser(id: string) {
    return `User ${id}`;
  }
  createUser(userDto) {
    const response = {
      code: 200,
      message: 'user created',
      data: userDto,
    };
    return response;
  }
  deleteUser(id: string) {
    return `user ${id} delete`;
  }
}
