import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

export class User {
  @Prop()
  name: string;
  @Prop()
  lastName: string;
  @Prop()
  age: number;
  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
