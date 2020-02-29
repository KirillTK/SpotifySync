import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import * as passport from 'passport';
import * as dotenv from 'dotenv';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule, { logger: ['log'], });


  // todo need to create cors config
  app.enableCors();
  app.use(cookieParser());
  app.use(session({
    secret: process.env.SESSION_SECRET,
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(8080);
}
bootstrap();
