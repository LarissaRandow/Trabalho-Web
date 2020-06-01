import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { User } from './user.model';
import { NgForm } from "@angular/forms";
import { UserService } from "./author.service";
import { MessageService } from "../messages/message.services";

@Component(
    {
        selector: 'app-signup',
        templateUrl: './signup-component.html'
    }
)

export class SignupComponent
{
    myForm: FormGroup

    //constructor(private userService: UserService){};
    constructor(private messageService: MessageService){}

    onSubmit(form: NgForm)
    {
        console.log(this.myForm);

        const signupAux = new User(
            form.value.emailTS,
            form.value.passwordTS, 
            form.value.firstNameTS,
            form.value.lastNameTS,          
            form.value.genderTS
        );

        this.messageService.addUser(signupAux)
            .subscribe(
                dadosSucesso => console.log(dadosSucesso),
                dadosErro => console.log(dadosErro)
            );

        this.myForm.reset();
    }

    ngOnInit()
    {
        this.myForm = new FormGroup(
            {
                firstNameTS: new FormControl(null, Validators.required),
                lastNameTS: new FormControl(null, Validators.required),
                emailTS: new FormControl(null, [
                    Validators.required,
                    Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
                ]),
                passwordTS: new FormControl(null, Validators.required),
                genderTS: new FormControl(null, Validators.required)
            }
        );
    }
}

