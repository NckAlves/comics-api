import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) { }
