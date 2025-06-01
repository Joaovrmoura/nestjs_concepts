import { Module } from '@nestjs/common';
import { ConceptsController } from './manual-concepts.controller';
import { ManualConceptsService } from './manual-concepts.service';

@Module({
  controllers: [ConceptsController],
  providers: [ManualConceptsService],
})
export class ConceptsModule {}
