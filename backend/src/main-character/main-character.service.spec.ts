import { Test, TestingModule } from '@nestjs/testing';
import { MainCharacterService } from './main-character.service';

describe('MainCharacterService', () => {
  let service: MainCharacterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MainCharacterService],
    }).compile();

    service = module.get<MainCharacterService>(MainCharacterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
