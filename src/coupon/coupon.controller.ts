import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import * as bcrypt from 'bcrypt';
import { randomInt } from 'crypto';

@Controller('coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) { }

  @Post()
  create(@Body() createCouponDto: CreateCouponDto) {
    if ((randomInt(52) % 7) == 0) {
      createCouponDto.rare = true;
    } else {
      createCouponDto.rare = false;
    }

    createCouponDto.hash = ((randomInt(248) * randomInt(52)) * randomInt(7)).toString();
    return this.couponService.create(createCouponDto);
  }

  @Get()
  findAll() {
    this.couponService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.couponService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.couponService.remove(+id);
  }
}
