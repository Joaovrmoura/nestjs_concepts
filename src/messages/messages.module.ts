import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { messagesService } from './messages.service';

@Module({
  controllers: [MessagesController],
  providers: [messagesService],
})
export class MessagesModule {}
