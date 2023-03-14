import { Test, TestingModule } from '@nestjs/testing';
import { TypingController } from './typing.controller';

describe('TypingController', () => {
  let controller: TypingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypingController],
    }).compile();

    controller = module.get<TypingController>(TypingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
