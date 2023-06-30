import { Module } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CouponController } from './coupon.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CouponProvider } from './coupn.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CouponController],
  providers: [...CouponProvider, CouponService]
})
export class CouponModule {}
