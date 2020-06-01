import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { MessageService } from "../messages/message.services";
import { User } from "./user.model";
import { MessageInputComponent } from "../messages/message-input.component"
import { MessagesComponent } from "../messages/message.component";

@Component(
    {
        selector: 'app-signin',
        templateUrl: './signin-component.html'
    }
)

export class SigninComponent
{
    myForm: FormGroup
    constructor(private messageService: MessageService, private input: MessageInputComponent){}

    
    onSignin(form: NgForm)
    {
        console.log(this.myForm);
        const signinAux = new User(
            form.value.emailTS,
            form.value.passwordTS     
        );
        
        this.messageService.signinUser(signinAux)
            .subscribe(
                dadosSucesso => 
                {
                    this.input.setSecao(dadosSucesso,signinAux.email)
                },
                dadosErro => console.log(dadosErro),            
            );
        this.myForm.reset();
    }

    ngOnInit()
    {
        this.myForm = new FormGroup(
            {
                emailTS: new FormControl(null, [
                    Validators.required,
                    Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
                ]),
                passwordTS: new FormControl(null, Validators.required)
            }
        );
    }
    
}