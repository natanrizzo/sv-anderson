import {
    IsInt,
    IsPositive,
    IsNotEmpty,
    IsArray,
    ValidateNested,
    ArrayMinSize,
  } from 'class-validator';
  import { Type } from 'class-transformer';
  import { CreateTicketDto } from './create-ticket.dto';
  
  export class CreateReservationDto {
    @IsInt()
    @IsPositive()
    @IsNotEmpty()
    flightId: number;
  
    @IsArray()
    @ValidateNested({ each: true })
    @ArrayMinSize(1)
    @Type(() => CreateTicketDto)
    tickets: CreateTicketDto[];
  }