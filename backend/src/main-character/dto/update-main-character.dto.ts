import { PartialType } from '@nestjs/mapped-types';
import { CreateMainCharacterDto } from './create-main-character.dto';

export class UpdateMainCharacterDto extends PartialType(CreateMainCharacterDto) {}
