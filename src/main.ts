import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// 27. Global Pipes and Avoiding Malicious Request
// 28. Converting to an Instance of DTO
// 47. Enabling Swagger in NestJS

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
  /* swagger configuration */

  const config = new DocumentBuilder()
    .setTitle('NestJs Masterclass -Blog app API')
    .setDescription('Use the base API URL as http://localhost:3000')
    .setTermsOfService('http://localhost:3000/terms-of-service')
    .setLicense('MIT License', 'https://github.com/git/git-scm.com/blog/main/MIT-LICENSE.txt')
    .addServer('http://localhost:3000')
    .setVersion('1.0')
    .setDescription('')
    .build();
  // Instantiate Document
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
