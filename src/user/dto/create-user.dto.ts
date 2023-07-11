import { IsBoolean, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { hashSync, hash } from 'bcrypt';
import { BeforeInsert } from 'typeorm/decorator/listeners/BeforeInsert';
import { Coupon } from 'src/coupon/entities/coupon.entity';

export class CreateUserDto {
    @IsString()
    @ApiProperty({type: String})
    name: string;

    @ApiProperty({type: String})
    @IsEmail()
    email: string;

    @IsString()
    @ApiProperty({type: String})
    password: string;

    @ApiProperty({type: Coupon})
    coupons: Coupon[]
}
