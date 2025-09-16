import { PartialType } from '@nestjs/mapped-types';
import { CreateFlightTypeDto } from './create-flight-type.dto';

export class UpdateFlightTypeDto extends PartialType(CreateFlightTypeDto) {}