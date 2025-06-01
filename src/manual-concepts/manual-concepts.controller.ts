import { Controller, Get } from '@nestjs/common';
import { ManualConceptsService } from './manual-concepts.service';

@Controller('manual-concepts')
export class ConceptsController {
  constructor(private readonly service: ManualConceptsService) {}
  @Get()
  getPost(): string {
    return this.service.solutionExemplo();
  }
}
