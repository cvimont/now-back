import { Injectable } from '@nestjs/common';

export interface Message {
  sender: string;
  content: string;
}

const initMessage: Message = {
  sender: 'Chatbot',
  content: 'Hello'
};

@Injectable()
export class MessagesService {

  private messages: Message[] = [initMessage];

  findAll(): Message[] {
    return this.messages;
  }

  add(message: Message): void {
    this.messages.push(message);
  }
}
