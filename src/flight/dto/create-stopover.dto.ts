import { IsInt, IsPositive, IsNotEmpty, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStopoverDto {
  @ApiProperty({
    description: "The ID of the airport for the stopover",
    example: 1,
  })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  airportId: number;

  @ApiProperty({
    description: "The order of the stopover in the flight sequence",
    example: 2,
  })
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  order: number;
  
  @ApiProperty({
    description: "The arrival date and time at the stopover",
    example: "2025-12-25T10:00:00Z",
  })
  @IsDateString()
  @IsNotEmpty()
  arrivalDateTime: string;

  @ApiProperty({
    description: "The departure date and time from the stopover",
    example: "2025-12-25T12:00:00Z",
  })
  @IsDateString()
  @IsNotEmpty()
  departureDateTime: string;
}