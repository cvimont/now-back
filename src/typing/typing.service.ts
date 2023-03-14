import { Injectable } from '@nestjs/common';

@Injectable()
export class TypingService {

  private typing: string[] = [];

  addTyping(name: string): void {
    if (!this.typing.includes(name)) {
      this.typing.push(name);
    }
  }

  removeTyping(name: string): void {
    this.typing = this.typing.filter((t: string) => t !== name);
  }

  findAll(): string[] {
    return this.typing;
  }
}
