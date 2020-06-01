import { Component, Injectable } from "@angular/core"
import { MessageService } from "./message.services";
import { Message } from './message.model'
import { NgForm } from "@angular/forms";

var email: string
var seçao: boolean

@Component ({
    selector: 'app-message-input',
    templateUrl :'./message-input.component.html',
})

@Injectable()
export class MessageInputComponent{
    
    setSecao(secao: boolean, username: string)
    {
        seçao = secao;
        email = username
        console.log(seçao, email)
    }
    
    constructor(private messageService: MessageService){}


    OnSubmit(form: NgForm)
    {
        var messageAux = new Message(form.value.myContentngForm, 'Anonimo');

        if(seçao == true)
            messageAux = new Message(form.value.myContentngForm, email);

        this.messageService.addMessage(messageAux)
            .subscribe(
                dadosSucesso => console.log(dadosSucesso),
                dadosErro => console.log(dadosErro)
            );
        console.log(form);
        console.log(email);
        form.resetForm();
    }
}