import { Injectable } from '@nestjs/common';
import { CreateMainCharacterDto } from './dto/create-main-character.dto';
import { UpdateMainCharacterDto } from './dto/update-main-character.dto';

@Injectable()
export class MainCharacterService {
  create(createMainCharacterDto: CreateMainCharacterDto) {
    return 'This action adds a new mainCharacter';
  }

  findAll() {
    return `This action returns all mainCharacter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mainCharacter`;
  }

  update(id: number, updateMainCharacterDto: UpdateMainCharacterDto) {
    return `This action updates a #${id} mainCharacter`;
  }

  remove(id: number) {
    return `This action removes a #${id} mainCharacter`;
  }
}
