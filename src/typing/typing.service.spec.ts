import { Test, TestingModule } from '@nestjs/testing';
import { TypingService } from './typing.service';

describe('TypingService', () => {
  let service: TypingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypingService],
    }).compile();

    service = module.get<TypingService>(TypingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
