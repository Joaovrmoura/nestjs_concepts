import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Remove automaticamente propriedades que NÃO existem no DTO
      forbidNonWhitelisted: true, // Se o corpo da requisição contiver propriedades extras, lança um erro
      transform: false, // tenta trasnformar os tipos de dados de param e DTO's
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
