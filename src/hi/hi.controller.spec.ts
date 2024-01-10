import { Test, TestingModule } from '@nestjs/testing';
import { HiController } from './hi.controller';
import { HiService } from './hi.service';

describe('HiController', () => {
  let controller: HiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HiController],
      providers: [HiService],
    }).compile();

    controller = module.get<HiController>(HiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
