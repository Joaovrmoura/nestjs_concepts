import { Injectable } from '@nestjs/common';

@Injectable()
export class ManualConceptsService {
  solutionExemplo(): string {
    return 'TESTE INJECTABLE METHOD';
  }
}
