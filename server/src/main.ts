import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (import.meta.env.PROD) await app.listen(3000);
  return app;
}

export const appServer = bootstrap();
