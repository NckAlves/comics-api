import { Module } from '@nestjs/common';
import { ComicService } from './comic.service';
import { ComicController } from './comic.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ComicProviders } from './comic.providers';

@Module({
  controllers: [ComicController],
  providers: [...ComicProviders, ComicService],
  imports: [DatabaseModule],
})
export class ComicModule {}
