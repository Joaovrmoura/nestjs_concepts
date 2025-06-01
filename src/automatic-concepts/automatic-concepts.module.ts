import { Module } from '@nestjs/common';
import { AutomaticConceptsController } from './automatic-concepts.controller';
import { AutomaticConceptsSerives } from './automatic-concepts.service';
@Module({
  controllers: [AutomaticConceptsController],
  providers: [AutomaticConceptsSerives],
})
export class AutomaticConceptsModule {}
