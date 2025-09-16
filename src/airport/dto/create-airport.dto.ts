import { IsString, IsNotEmpty, Length } from 'class-validator';

export class CreateAirportDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 3, { message: 'Airport code must be exactly 3 characters' })
  code: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  country: string;
}