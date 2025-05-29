import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  teste(): string {
    return 'find route with successfully';
  }
}
