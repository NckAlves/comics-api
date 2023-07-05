import { IsBoolean, IsInt, IsString } from 'class-validator';
import { isNumberObject } from 'util/types';

export class CreateComicDto {
    @IsString()
    title: string;

    @IsString()
    chacacter: string;

    @IsString()
    author: string;

    @IsInt()
    edition: number;

    @IsBoolean()
    rare: boolean;

    @IsString()
    cover: string;

}
