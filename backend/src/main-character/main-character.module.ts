import { Module } from '@nestjs/common';
import { MainCharacterService } from './main-character.service';
import { MainCharacterController } from './main-character.controller';

@Module({
  controllers: [MainCharacterController],
  providers: [MainCharacterService],
})
export class MainCharacterModule {}
