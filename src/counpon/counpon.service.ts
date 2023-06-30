import { Injectable } from '@nestjs/common';
import { CreateCounponDto } from './dto/create-counpon.dto';
import { UpdateCounponDto } from './dto/update-counpon.dto';

@Injectable()
export class CounponService {
  create(createCounponDto: CreateCounponDto) {
    return 'This action adds a new counpon';
  }

  findAll() {
    return `This action returns all counpon`;
  }

  findOne(id: number) {
    return `This action returns a #${id} counpon`;
  }

  update(id: number, updateCounponDto: UpdateCounponDto) {
    return `This action updates a #${id} counpon`;
  }

  remove(id: number) {
    return `This action removes a #${id} counpon`;
  }
}
