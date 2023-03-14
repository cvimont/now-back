import { Body, Controller, Get, Post } from '@nestjs/common';
import { TypingService } from './typing.service';

interface TypingBody {
  name: string;
  isTyping: boolean;
}

@Controller('typing')
export class TypingController {

  constructor(private typingService: TypingService) { }

  @Get()
  findAll(): string[] {
    return this.typingService.findAll();
  }


  @Post()
  update(@Body() typingBody: TypingBody) {
    typingBody.isTyping ? this.typingService.addTyping(typingBody.name) : this.typingService.removeTyping(typingBody.name);
  }
}
