import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

// Patch is used to update a data of a recurse
// Put is used for update entire data of a recurse

// crud of messages
@Controller('messages')
export class MessagesController {
  // find all messages
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(): string {
    return 'Return all messages';
  }
  // get a route parameter
  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `Route Parameter of message ${id}`;
  }
  // POST for Create
  @Post()
  create(@Body() body: any): any {
    return body;
  }
  // update a message
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: string) {
    return {
      id,
      body,
    };
  }
}
