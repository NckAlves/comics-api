import { IsBoolean, IsInt, IsNumber, IsString } from 'class-validator';
import { isNumberObject } from 'util/types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateComicDto {
    @IsString()
    @ApiProperty({type: String})
    title: string;

    @IsString()
    @ApiProperty({type: String})
    character: string;

    @IsString()
    @ApiProperty({type: String})
    author: string;

    @IsInt()
    @ApiProperty({type: Number})
    edition: number;

    @IsBoolean()
    @ApiProperty({type: Boolean})
    rare: boolean;

    @IsNumber()
    @ApiProperty({type: Number})
    price: number;

    @IsString()
    @ApiProperty({type: String})
    cover: string;
}
