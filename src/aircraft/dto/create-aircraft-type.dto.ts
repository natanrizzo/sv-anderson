import {
    IsString,
    IsNotEmpty,
    IsInt,
    IsPositive,
    IsOptional,
    IsObject,
  } from 'class-validator';
  
export class CreateAircraftTypeDto {
    @IsString()
    @IsNotEmpty()
    model: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    seatCapacity: number;
  
    @IsObject()
    @IsNotEmpty()
    seatMap: object;
}