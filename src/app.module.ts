import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { TypingModule } from './typing/typing.module';

@Module({
  imports: [MessagesModule, TypingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
