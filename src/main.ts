import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('DC Comics')
    .setDescription('Abaixo você pode encontrar a documentação interativa de nossa API. Teste com cuidado, pois com grandes poderes vêm grandes responsabilidades.')
    .setVersion('1.0')
    .addTag('Comics')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
