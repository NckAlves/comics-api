import { IsString } from 'class-validator';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { Coupon } from 'src/coupon/entities/coupon.entity';
import { Comic } from 'src/comic/entities/comic.entity';

export class CreateOrderDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: User })
    owner: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: Comic })
    comic: Comic;

    @IsString()
    @ApiProperty({ type: Coupon })
    coupon: Coupon;
}
