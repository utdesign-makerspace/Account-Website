require("dotenv").config();
import { Get, Controller, Render } from '@nestjs/common';


@Controller()
export class AppController {
  @Get()
  @Render('index.hbs')
  root() {
    return { path: [{
      url: process.env.URL + 'create-account',
      message: 'Create an account'
    }, 
    {
      url: process.env.URL + 'login',
      message: 'Login to account'
    }] };
  }
}