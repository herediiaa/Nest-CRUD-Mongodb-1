import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('X') private userModel: Model<UserDocument>) {}
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
