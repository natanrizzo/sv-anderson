import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail, IsDateString, IsEnum } from 'class-validator';
import { EmployeeRole } from 'generated/prisma';


export class CreateEmployeeDto {
  @ApiProperty({
      description: 'The full name of the employee',
      example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @ApiProperty({
    description: 'Date of birth for the employee',
    example: '11/10/2002',
  })
  @IsDateString()
  @IsNotEmpty()
  dateOfBirth: string;

  @ApiProperty({
    description: 'The phone number for the employee',
    example: 'johndoe',
  })
  @IsString()
  @IsNotEmpty()
  mobilePhone: string;

  @ApiProperty({
    description: 'The username for the employee',
    example: 'johndoe@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @ApiProperty({
    description: 'The role of the employee',
    example: 'MANAGER',
  })
  @IsEnum(EmployeeRole)
  @IsNotEmpty()
  role: EmployeeRole;
}