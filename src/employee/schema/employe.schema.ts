import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true }) 
export class Employee extends Document {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ required: true })
    position: string;

    @Prop({ default: new Date() })
    hireDate: Date;

    @Prop()
    phone: string;

    @Prop({ type: [String], default: [] })
    skills: string[];

    @Prop({ type: Boolean, default: true })
    isActive: boolean;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
