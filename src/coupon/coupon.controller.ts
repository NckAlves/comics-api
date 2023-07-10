import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CouponService } from './coupon.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { randomInt } from 'crypto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('coupon')
export class CouponController {
  constructor(private readonly couponService: CouponService) { }

  @ApiOperation({ summary: 'Creates a new Coupon' })
  @Post()
  create(@Body() createCouponDto: CreateCouponDto) {
    if ((randomInt(52) % 7) == 0) {
      createCouponDto.rare = true;
    } else {
      createCouponDto.rare = false;
    }
    createCouponDto.hash = ((randomInt(2) * randomInt(52)) * randomInt(7)).toString();
    return this.couponService.create(createCouponDto);
  }

  @ApiOperation({ summary: 'Fetchs all Coupons' })
  @Get()
  findAll() {
    this.couponService.findAll();
  }

  @ApiOperation({ summary: 'Fetchs a specific Coupon' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.couponService.findOne(+id);
  }

  @ApiOperation({ summary: 'Deletes a Coupon' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.couponService.remove(+id);
  }
}
