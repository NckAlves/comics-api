import { PartialType } from '@nestjs/swagger';
import { CreateCouponDto } from './create-coupon.dto';
import { IsBoolean } from 'class-validator';

export class UpdateCouponDto extends PartialType(CreateCouponDto) {
    @IsBoolean()
    raro: boolean;
}
