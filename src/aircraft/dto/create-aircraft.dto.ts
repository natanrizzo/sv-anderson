import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateAircraftDto {
  @IsString()
  @IsNotEmpty()
  registrationNumber: string;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  aircraftTypeId: number;
}