import { Controller, Get } from '@nestjs/common';

@Controller('manual-concepts')
export class ConceptsController {
  @Get()
  getPost(): string {
    return `controller manual`;
  }
}
