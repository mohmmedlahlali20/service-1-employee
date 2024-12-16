export class CreateEmployeeDto {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly position: string;
    readonly hireDate?: Date;
    readonly phone?: string;
    readonly skills?: string[];
    readonly isActive?: boolean;
  }
  