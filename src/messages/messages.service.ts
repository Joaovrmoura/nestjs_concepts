import { Injectable, NotFoundException } from '@nestjs/common';
import { MessageEntity } from './entities/messge.entity';
import { NotFoundError } from 'rxjs';
import { CreateMessagesDto } from './dto/create-message.dto';
import { UpdateMessagesDto } from './dto/update-message.dto';

@Injectable()
export class messagesService {
  private lastId = 1;
  private messages: MessageEntity[] = [
    {
      id: 2,
      text: 'como vai o seu mundo?',
      from: 'maria',
      for: 'joao',
      read: true,
      data: new Date(),
    },
  ];
  findAll() {
    return this.messages;
  }
  findOne(id: string) {
    const message = this.messages.find((item) => item.id === +id);
    if (message) return message;
    // throw new HttpException('Error from server ', HttpStatus.NOT_FOUND);
    throw new NotFoundException('Error from Server');
  }
  serviceMessage() {
    return `Hello world`;
  }
  create(createMessageDto: CreateMessagesDto) {
    this.lastId++;
    const id = this.lastId;
    const newMessage = {
      id,
      ...createMessageDto,
      read: false,
      data: new Date(),
    };
    this.messages.push(newMessage);
    return newMessage;
  }

  update(id: string, updateMessageDto: UpdateMessagesDto) {
    const messageExistsIndex = this.messages.findIndex(
      (item) => item.id === +id,
    );
    if (messageExistsIndex < 0) {
      throw new NotFoundError('Index not existis ');
    }
    if (messageExistsIndex >= 0) {
      const messageExiste = this.messages[messageExistsIndex];
      this.messages[messageExistsIndex] = {
        ...messageExiste,
        ...updateMessageDto,
      };
    }
  }

  remove(id: number) {
    const messageExistsIndex = this.messages.findIndex(
      (item) => item.id === id,
    );

    if (messageExistsIndex < 0) {
      throw new NotFoundError('Index not existis ');
    }
    if (messageExistsIndex >= 0) {
      this.messages.splice(messageExistsIndex, 1);
    }
  }
}
