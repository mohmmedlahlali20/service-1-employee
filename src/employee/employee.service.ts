import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import { Model } from 'mongoose';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private readonly employeeModel: Model<Employee>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const newEmployee = new this.employeeModel(createEmployeeDto);
    return await newEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find().exec();
  }

  async findOne(id: string): Promise<Employee> {
    return await this.employeeModel.findById(id).exec();
  }

  async update(id: string, updateData: Partial<Employee>): Promise<Employee> {
    return await this.employeeModel.findByIdAndUpdate(id, updateData, {
      new: true,
    }).exec();
  }

  
}
