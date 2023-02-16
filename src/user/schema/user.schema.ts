import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
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

export const userSchema = SchemaFactory.createForClass(User);
