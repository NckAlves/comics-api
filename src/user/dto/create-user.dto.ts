import { IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { hashSync, hash } from 'bcrypt';
import { BeforeInsert } from 'typeorm/decorator/listeners/BeforeInsert';

export class CreateUserDto {
    @IsString()
    @ApiProperty({type: String})
    name: string;

    @IsString()
    @ApiProperty({type: String})
    email: string;

    @IsString()
    @ApiProperty({type: String})
    password: string;

    @BeforeInsert()
    hashPassword() {
        return this.password = hashSync(this.password, 10);
    }
}
