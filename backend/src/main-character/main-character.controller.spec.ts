import { Test, TestingModule } from '@nestjs/testing';
import { MainCharacterController } from './main-character.controller';
import { MainCharacterService } from './main-character.service';

describe('MainCharacterController', () => {
  let controller: MainCharacterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MainCharacterController],
      providers: [MainCharacterService],
    }).compile();

    controller = module.get<MainCharacterController>(MainCharacterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
