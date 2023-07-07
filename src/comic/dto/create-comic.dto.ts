import { IsBoolean, IsInt, IsString } from 'class-validator';
import { isNumberObject } from 'util/types';
import { ApiProperty } from '@nestjs/swagger';

export class CreateComicDto {
    @IsString()
    @ApiProperty({type: String})
    title: string;

    @IsString()
    @ApiProperty({type: String})
    chacacter: string;

    @IsString()
    @ApiProperty({type: String})
    author: string;

    @IsInt()
    @ApiProperty({type: Number})
    edition: number;

    @IsBoolean()
    @ApiProperty({type: Boolean})
    rare: boolean;

    @IsString()
    @ApiProperty({type: String})
    cover: string;
}
