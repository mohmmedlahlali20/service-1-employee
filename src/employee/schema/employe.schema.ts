import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop({ required: true })
  first_name: string;

  @Prop({ required: true })
  last_name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phone_number: string;

  @Prop({ required: true })
  position: string;

  @Prop({ required: true })
  date_of_joining: Date;

  @Prop({ required: true })
  salary: number;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
