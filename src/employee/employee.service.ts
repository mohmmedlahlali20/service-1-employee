import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './schema/employe.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private readonly employeModel: Model<Employee>,
  ) {}
  
  importEmployees(path: any) {
    throw new Error('Method not implemented.');
  }


  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const newEmployee = new this.employeModel(createEmployeeDto);
    return await newEmployee.save();
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeModel.find().exec();
  }

  async findOne(id: string): Promise<Employee> {
    return await this.employeModel.findById(id).exec();
  }

  async update(id: string, updateData: Partial<Employee>): Promise<Employee> {
    return await this.employeModel.findByIdAndUpdate(id, updateData, {
      new: true,
    }).exec();
  }

  
}
