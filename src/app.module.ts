import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateAccountController } from './create-account/create-account.controller';
import { LoginController } from './login/login.controller';

@Module({
  imports: [],
  controllers: [AppController, CreateAccountController, LoginController],
  providers: [AppService],
})
export class AppModule {}
