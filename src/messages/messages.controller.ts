import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { messagesService } from './messages.service';
import { CreateMessagesDto } from '../common/dto/create-message.dto';
import { UpdateMessagesDto } from '../common/dto/update-message.dto';
import { ParseIntIdPipe } from '../common/pipes/parseint-id.pipe';
import { addHeaderInterceptor } from 'src/common/interceptors/add-header.interceptor';
import { TimingConnectionInterceptor } from 'src/common/interceptors/timing-connection.interceptor';
import { ErrorhandlingInterceptor } from 'src/common/interceptors/error-handling.interceptor';
// Patch is used to update a data of a recurse
// Put is used for update entire data of a recurse

// pipe personalizado -> Executa antes de chegar no metodo.
@UsePipes(ParseIntIdPipe)
@Controller('messages')
export class MessagesController {
  constructor(private readonly messageService: messagesService) {}

  // find all messages
  @UseInterceptors(TimingConnectionInterceptor, ErrorhandlingInterceptor)
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(/*/@Query() pagination: any */) {
    // const { limite = 10, offset = 0 } = pagination;
    console.log('findALl Executed ');
    return this.messageService.findAll();
  }

  // get a route parameter
  @UseInterceptors(addHeaderInterceptor, ErrorhandlingInterceptor)
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id, typeof id);

    return this.messageService.findOne(id);
  }

  // POST for Create
  @Post()
  create(@Body() createMessageDto: CreateMessagesDto): any {
    return this.messageService.create(createMessageDto);
  }

  // update a message
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageDto: UpdateMessagesDto) {
    console.log(
      UpdateMessagesDto.constructor.name,
      updateMessageDto instanceof UpdateMessagesDto,
    );
    return this.messageService.update(id, updateMessageDto);
  }

  // delete a message
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    console.log(id, typeof id);
    return this.messageService.remove(id);
  }
}
