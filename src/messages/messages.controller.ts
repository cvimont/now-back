import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { Message, MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

  constructor(private messagesService: MessagesService) { }

  @Get()
  findAll(): Message[] {
    return this.messagesService.findAll();
  }

  @Post()
  add(@Body() message: Message): void {
    console.log(`new message from ${message.sender} : ${message.content}`);
    return this.messagesService.add(message);
  }
}
