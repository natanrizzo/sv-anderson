import { IsInt, IsPositive, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateStopoverDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  airportId: number;

  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  order: number;
  
  @IsDateString()
  @IsNotEmpty()
  arrivalDateTime: string;

  @IsDateString()
  @IsNotEmpty()
  departureDateTime: string;
}