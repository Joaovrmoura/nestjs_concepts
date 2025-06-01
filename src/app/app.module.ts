import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from 'src/messages/messages.module';
// import { ConceptsModule } from 'src/manual-concepts/manual-concepts.module';
// import { AutomaticConceptsModule } from 'src/automatic-concepts/automatic-concepts.module';

// main module that imports other modules
@Module({
  imports: [MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
