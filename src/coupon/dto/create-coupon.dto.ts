import { IsBoolean, IsInt, IsString } from 'class-validator';

export class CreateCouponDto {
    @IsBoolean()
    rare: boolean;

    @IsString()
    hash: string;
}
