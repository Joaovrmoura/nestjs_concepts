import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove automaticamente propriedades que NÃO existem no DTO
      forbidNonWhitelisted: true, // Se o corpo da requisição contiver propriedades extras, lança um erro
      transform: true, // tenta trasnformar os tipos de dados de param e DTO's
    }),
  );

  console.log('SERVER RUN ON PORT ' + process.env.PORT);

  const config = new DocumentBuilder()
    .setTitle('Document of API')
    .setDescription('Endpoints of Posts, Users and Categories')
    .setVersion('1.0')
    .addTag('Posts')
    .addTag('Users')
    .addTag('Categories')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
