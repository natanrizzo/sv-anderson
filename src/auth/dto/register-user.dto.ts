import {
    IsString,
    IsNotEmpty,
    IsEmail,
    IsDateString,
    MinLength,
    IsOptional,
} from 'class-validator';
  
export class RegisterUserDto {
    @IsString()
    @IsNotEmpty()
    name: string;
  
    @IsString()
    @IsNotEmpty()
    fullAddress: string;
  
    @IsString()
    @IsNotEmpty()
    phoneNumbers: string;
  
    @IsEmail()
    @IsNotEmpty()
    email: string;
  
    @IsString()
    @IsOptional()
    workplace?: string;
  
    @IsString()
    @IsOptional()
    workAddress?: string;
  
    @IsDateString()
    @IsNotEmpty()
    dateOfBirth: string;
  
    @IsString()
    @IsNotEmpty()
    cpf: string;
  
    @IsString()
    @IsNotEmpty()
    rg: string;
  
    @IsDateString()
    @IsNotEmpty()
    rgIssuanceDate: string;
  
    @IsString()
    @IsNotEmpty()
    rgIssuingAgency: string;
  
    @IsString()
    @IsNotEmpty()
    username: string;
  
    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    password: string;
}