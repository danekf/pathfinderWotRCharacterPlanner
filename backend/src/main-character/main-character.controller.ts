// eslint-disable-next-line prettier/prettier
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MainCharacterService } from './main-character.service';
import { CreateMainCharacterDto } from './dto/create-main-character.dto';
import { UpdateMainCharacterDto } from './dto/update-main-character.dto';

@Controller('maincharacter')
export class MainCharacterController {
  constructor(private readonly mainCharacterService: MainCharacterService) {}

  @Post()
  create(@Body() createMainCharacterDto: CreateMainCharacterDto) {
    return this.mainCharacterService.create(createMainCharacterDto);
  }

  @Get()
  findAll() {
    return this.mainCharacterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mainCharacterService.findOne(+id);
  }

  @Patch(':id')
  // eslint-disable-next-line prettier/prettier
  update(@Param('id') id: string, @Body() updateMainCharacterDto: UpdateMainCharacterDto) {
    return this.mainCharacterService.update(+id, updateMainCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mainCharacterService.remove(+id);
  }
}
