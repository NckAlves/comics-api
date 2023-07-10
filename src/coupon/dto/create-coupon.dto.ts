import { IsBoolean, IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCouponDto {
    @IsBoolean()
    @ApiProperty({type: Boolean})
    rare: boolean;

    @IsString()
    @ApiProperty({type: String})
    hash: string;
}
