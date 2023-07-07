import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComicModule } from './comic/comic.module';
import { UserModule } from './user/user.module';
import { CouponModule } from './coupon/coupon.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ComicModule, UserModule, CouponModule, OrderModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
