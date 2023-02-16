import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel('X') private userModel: Model<UserDocument>) {}
  async getUsers() {
    const users = await this.userModel.find();
    let response;
    if (users.length >= 1) {
      response = {
        code: 200,
        message: `hay ${users.length} usuarios`,
        users: users,
      };
    } else {
      response = {
        code: 404,
        message: `hay ${users.length} usuarios`,
        users: users,
      };
    }
    return response;
  }
  async getUser(id: string) {
    return this.userModel.findById(id);
  }
  async create(userInfo: CreateUserDto) {
    const newTask = new this.userModel(userInfo);
    return await newTask.save();
  }
  deleteUser(id: string) {
    return this.userModel.findById(id).deleteOne();
  }
  deleteUsers() {
    return this.userModel.find().deleteMany();
  }
}
