import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainCharacterModule } from './main-character/main-character.module';

@Module({
  imports: [MainCharacterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
