import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { messagesService } from './messages.service';
// Patch is used to update a data of a recurse
// Put is used for update entire data of a recurse

// crud of messages
@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: messagesService) {}
  // find all messages
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(/*/@Query() pagination: any */) {
    // const { limite = 10, offset = 0 } = pagination;
    console.log('findALl');
    return this.messageService.findAll();
  }
  // get a route parameter
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageService.findOne(id);
  }
  // POST for Create
  @Post()
  create(@Body() body: any): any {
    return this.create(body);
  }
  // update a message
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: object) {
    return {
      id,
      ...body,
    };
  }
  // delete a message
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `remove the message ID: ${id}`;
  }
}
