import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  console.log(process.env);
  const app = await NestFactory.create(AppModule);

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(3000);
}
bootstrap();
