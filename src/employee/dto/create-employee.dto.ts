import { IsString, IsNotEmpty, IsEmail, IsDateString, IsEnum } from 'class-validator';
import { EmployeeRole } from 'generated/prisma';


export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: string;

  @IsString()
  @IsNotEmpty()
  mobilePhone: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @IsEnum(EmployeeRole)
  @IsNotEmpty()
  role: EmployeeRole;
}