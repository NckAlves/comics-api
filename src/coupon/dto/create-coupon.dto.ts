import { IsBoolean, IsString } from 'class-validator';

export class CreateCouponDto {
    @IsBoolean()
    raro: boolean;
}
