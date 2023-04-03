import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = Number(process.env.PORT) || 5000

  const app = await NestFactory.create(AppModule)

  app.enableCors({
    origin: 'https://genise-tk.ru'
  })

  await app.listen(PORT)
}
bootstrap();
