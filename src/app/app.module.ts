import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptsModule } from 'src/manual-concepts/concepts.module';
import { AutomaticConceptsModule } from 'src/automatic-concepts/automatic-concepts.module';

// módulo principal que importa outros módulos
@Module({
  imports: [ConceptsModule, AutomaticConceptsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
