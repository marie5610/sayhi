import { PartialType } from '@nestjs/mapped-types';
import { CreateHiDto } from './create-hi.dto';

export class UpdateHiDto extends PartialType(CreateHiDto) {}
