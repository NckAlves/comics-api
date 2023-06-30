import { Test, TestingModule } from '@nestjs/testing';
import { CounponService } from './counpon.service';

describe('CounponService', () => {
  let service: CounponService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CounponService],
    }).compile();

    service = module.get<CounponService>(CounponService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
