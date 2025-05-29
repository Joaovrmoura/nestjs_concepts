import { Controller, Get } from '@nestjs/common';

@Controller('automatic-concepts')
export class AutomaticConceptsController {
  @Get()
  getPost(): string {
    return `controller manual`;
  }
}
