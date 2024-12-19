import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';

@Controller()
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @MessagePattern('create_employee')
  async createEmployee(data: CreateEmployeeDto) {
    return this.employeeService.create(data);
  }

  @MessagePattern('find_all_employees')
  async findAllEmployees() {
    return this.employeeService.findAll();
  }

  @MessagePattern('find_employee_by_id')
  async findEmployeeById(id: string) {
    return this.employeeService.findOne(id);
  }

  @MessagePattern('update_employee')
  async updateEmployee({ id, updateData }: { id: string; updateData: any }) {
    return this.employeeService.update(id, updateData);
  }
}
