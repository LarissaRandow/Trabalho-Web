import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Message } from "./message.model";
import { MessageService } from "./message.services";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-bock;
            font-style: italic;
            font-size : 12px;
            width :80%;
        }
        .config {
            display: inline-bock;
            text-align: right;
            font-size : 12px;
            width :19%;
        }
    `]
})
export class MessageComponent{
    color = 'yellow';
    tam=12;
    onMudaStyle(){
        this.color = 'red';
        this.tam=16;
    }
    @Input() messageVarClasse : Message = new Message("", "");
    @Input('inputMessage') messageVarClasseAlias : Message = new Message("", "");

    constructor(private messageServiceObj: MessageService){}

    onDelete()
    {
        //this.messageServiceObj.deleteMessage(this.messageVarClasse);
        this.messageServiceObj.deleteMessage(this.messageVarClasse)
            .subscribe(
                dadosSucesso => console.log(dadosSucesso),
                dadosErro => console.log(dadosErro)
            );
    }

    onEdit(form: NgForm){
        this.editClicked_MessageMetodoClasse.emit(form.value.myContentngForm);
        
        const messageAux = new Message(form.value.myContentngForm,'Vini');
        this.messageServiceObj.updateMessage(messageAux)
            .subscribe(
                dadosSucesso => console.log(dadosSucesso),
                dadosErro => console.log(dadosErro)
            );
        form.resetForm();
    }

    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
}