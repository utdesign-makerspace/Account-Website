require("dotenv").config();
import { Get, Post, Controller, Render, Body, Res } from '@nestjs/common';
import { Response } from 'express';

class Form {
    netid: string;
    fname: string;
    lname: string;
}

@Controller('create-account')
export class CreateAccountController {
    @Get()
    @Render('createAccount.hbs')
    root() {
        return {
            postUrl: process.env.URL + 'create-account',
            elements: [{
                label: "NetID",
                elementID: "netid",
                errorMessage: ''
            },
            {
                label: "First Name",
                elementID: "fname",
                errorMessage: ''
            },
            {
                label: "Last Name",
                elementID: "lname",
                errorMessage: ''
            }]
        }
    }

    @Post()
    async create(@Res() res: Response, @Body() form: Form) {
        if (!/^[A-z]{3}[0-9]{6}/.test(form.netid)) {
            return res.render('createAccount.hbs', {
                postUrl: process.env.URL + 'create-account',
                elements: [{
                    label: "NetID",
                    elementID: "netid",
                    errorMessage: 'Invalid NetID'
                },
                {
                    label: "First Name",
                    elementID: "fname",
                    errorMessage: ''
                },
                {
                    label: "Last Name",
                    elementID: "lname",
                    errorMessage: ''
                }]
            })
        }
        else{
            return res.render("succesfulAccountCreation.hbs", {
                message: 'Your account has succesfully been created.\n' + 
                    'Please check the email attached to your NetID for your random-generated password.',
                returnURL: process.env.URL,
                returnMessage: 'Return to the Homepage'
            });
        }
    }
}


