import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateFlightTypeDto {
  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsOptional()
  description?: string;
}