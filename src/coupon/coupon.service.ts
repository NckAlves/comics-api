import { Injectable, Inject } from '@nestjs/common';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';
import { Repository } from 'typeorm';
import { Coupon } from './entities/coupon.entity';

@Injectable()
export class CouponService {
  constructor(
    @Inject('COUPON_REPOSITORY')
    private couponRepository: Repository<Coupon>,
  ) {}

  create(createCouponDto: CreateCouponDto) {
    return this.couponRepository.save(createCouponDto);
  }

  findAll() {
    return this.couponRepository.find();
  }

  findOne(id: number) {
    return this.couponRepository.findOne({ where: { id } });
  }

  remove(id: number) {
    return this.couponRepository.delete(id);
  }
}
