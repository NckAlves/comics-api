import { PartialType } from '@nestjs/swagger';
import { CreateCounponDto } from './create-counpon.dto';

export class UpdateCounponDto extends PartialType(CreateCounponDto) {}
