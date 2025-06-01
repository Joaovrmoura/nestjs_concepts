import { Controller, Get } from '@nestjs/common';
import { AutomaticConceptsSerives } from './automatic-concepts.service';

@Controller('automatic-concepts')
export class AutomaticConceptsController {
  constructor(
    private readonly automaticConceptsSerives: AutomaticConceptsSerives,
  ) {}
  @Get()
  getPost(): string {
    return this.automaticConceptsSerives.solutionExemploAutomatic();
  }
}
