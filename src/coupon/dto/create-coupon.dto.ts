import { IsBoolean, IsInt, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCouponDto {
    @IsBoolean()
    @ApiProperty({type: Boolean})
    rare: boolean;

    @IsNumber()
    @ApiProperty({type: Number})
    value: number

    @IsString()
    @ApiProperty({type: String})
    hash: string;
}
