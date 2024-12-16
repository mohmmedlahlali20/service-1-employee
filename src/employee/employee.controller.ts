import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('employeeID') employeeID: string) {
    return this.employeeService.findOne(employeeID);
  }

  @Patch(':id')
  update(@Param('employeeID') employeeID: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(employeeID, updateEmployeeDto);
  }

 
}
