import { PartialType } from '@nestjs/mapped-types';
import { CreateAircraftTypeDto } from './create-aircraft-type.dto';


export class UpdateAircraftTypeDto extends PartialType(CreateAircraftTypeDto) {}