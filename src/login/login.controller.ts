require("dotenv").config();
import { Controller, Get, Render, Post, Body } from '@nestjs/common';

class LoginForm{
    netid: string;
    password: string;
}

@Controller('login')
export class LoginController {

    @Get()
    @Render('createAccount.hbs')
    root(){
        return {postUrl: process.env.URL + 'login/', 
        elements: [
            {
                label: 'NetID',
                elementID: 'netid'
            },
            {
                label: 'Password',
                elementID: 'password'
            }
        ]}
    }

    @Post()
    @Render('createAccount.hbs')
    async login(@Body() loginForm: LoginForm){
        return {postUrl: process.env.URL + 'login/', 
        elements: [
            {
                label: loginForm.netid,
                elementID: 'netid'
            },
            {
                label: loginForm.password,
                elementID: 'password'
            }
        ]}
    }
}
