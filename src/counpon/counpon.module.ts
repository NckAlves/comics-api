import { Module } from '@nestjs/common';
import { CounponService } from './counpon.service';
import { CounponController } from './counpon.controller';

@Module({
  controllers: [CounponController],
  providers: [CounponService]
})
export class CounponModule {}
