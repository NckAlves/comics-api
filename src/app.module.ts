import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicModule } from './comic/comic.module';
import { UserModule } from './user/user.module';
import { CounponModule } from './counpon/counpon.module';

@Module({
  imports: [ComicModule, UserModule, CounponModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
