import { Body, Injectable } from '@nestjs/common';
import { MessageEntity } from './entities/messge.entity';

@Injectable()
export class messagesService {
  private lastId = 1;
  private messages: Array<MessageEntity> = [
    {
      id: 2,
      text: 'como vai o seu mundo?',
      de: 'maria',
      for: 'joao',
      read: true,
      data: new Date(),
    },
  ];
  findAll() {
    return this.messages;
  }
  findOne(id: string) {
    return this.messages.find((item) => item.id === +id);
  }
  serviceMessage() {
    return `Hello world`;
  }
  create(body: object) {
    this.lastId++;
    const id = this.lastId;
    const newMessage = {
      id,
      ...body,
    };
    this.messages.push(newMessage);
  }
}
