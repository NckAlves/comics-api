import { Test, TestingModule } from '@nestjs/testing';
import { CounponController } from './counpon.controller';
import { CounponService } from './counpon.service';

describe('CounponController', () => {
  let controller: CounponController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CounponController],
      providers: [CounponService],
    }).compile();

    controller = module.get<CounponController>(CounponController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
