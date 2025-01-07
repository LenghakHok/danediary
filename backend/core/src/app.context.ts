import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

// Mounting the application as bare Nest standalone application so that we can use
// the Nest services inside our Encore endpoints
const ApplicationContext =
  NestFactory.createApplicationContext(AppModule).then(() => {
    return {
    }
  });

export default ApplicationContext;
