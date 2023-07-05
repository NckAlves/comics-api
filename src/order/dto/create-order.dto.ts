import { IsInt, IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { Coupon } from 'src/coupon/entities/coupon.entity';
import { Comic } from 'src/comic/entities/comic.entity';

export class CreateOrderDto {
    @IsInt()
    id: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: User })
    owner: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: Comic })
    comicTitle: string;

    @IsString()
    @ApiProperty({ type: Coupon })
    couponHash: Coupon;
}
