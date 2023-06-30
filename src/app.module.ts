import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicModule } from './comic/comic.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ComicModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
