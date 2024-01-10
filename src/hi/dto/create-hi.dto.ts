import { IsString, IsNotEmpty } from 'class-validator';

export class CreateHiDto {
  @IsString()
  @IsNotEmpty()
  description: string;
}
