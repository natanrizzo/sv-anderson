import {
    IsString,
    IsNotEmpty,
    IsDateString,
    IsInt,
    IsPositive,
    IsArray,
    ValidateNested,
    IsOptional,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  import { CreateStopoverDto } from './create-stopover.dto';
  
  export class CreateFlightDto {
    @IsString()
    @IsNotEmpty()
    flightNumber: string;
  
    @IsDateString()
    @IsNotEmpty()
    departureDateTime: string;
  
    @IsDateString()
    @IsNotEmpty()
    arrivalDateTime: string;
  
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    estimatedDurationMinutes: number;
  
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    flightTypeId: number;
  
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    aircraftId: number;
  
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    originAirportId: number;
    
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    destinationAirportId: number;
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateStopoverDto)
    @IsOptional()
    stopovers?: CreateStopoverDto[];
    
    @IsArray()
    @IsInt({ each: true })
    @IsPositive({ each: true })
    @IsNotEmpty()
    crewMemberIds: number[];
  }