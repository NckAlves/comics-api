import { IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @IsString()
    @ApiProperty({type: String})
    name: string;

    @IsString()
    @ApiProperty({type: String})
    email: string;

    @IsString()
    @ApiProperty({type: String})
    senha: string;
}
