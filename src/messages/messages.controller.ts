import { Controller, Get, Param } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  // find all messages
  @Get()
  findAll(): string {
    return 'Return all messages';
  }
  // get a route parameter
  @Get(':id')
  findOne(@Param() id: any) {
    console.log(id);
    return `Route Parameter of message`;
  }
}
