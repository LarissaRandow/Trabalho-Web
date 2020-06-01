import { Message } from "./message.model";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import { User } from "../author/user.model";

@Injectable()
export class MessageService {
    private messageSService: Message[] = [];

    constructor(private http: Http){}

    addUser(user: User){

        var bodyRequest = JSON.stringify(user);
        console.log(bodyRequest)
        const myHeaders = new Headers({'Content-Type': 'application/json'});

        return this.http.post('http://localhost:3000/user', bodyRequest, {headers: myHeaders})
                .map((responseRecebida: Response) => responseRecebida.json())
                .catch((erroRecebido: Response) => Observable.throw(erroRecebido.json()));  
    }

    signinUser(user: User)
    {
        return this.http.get('http://localhost:3000/user')
        .map((responseRecebida: Response) => 
                {
                    const resposeEmJSON = responseRecebida.json();
                    const userList = resposeEmJSON.objSUserSRecuperadoS;
                    let seção: boolean = false;
                        for(let usuario of userList)
                        {
                            if(usuario.email == user.email && usuario.password == user.password)
                            {
                                seção = true;
                            }
                        }
                    return seção;
                })
                .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));             
    }
    
    addMessage(message: Message){
        this.messageSService.push(message);
        console.log(this.messageSService);

        const bodyReq = JSON.stringify(message);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        console.log("add");
        return this.http.post('http://localhost:3000/message', bodyReq, {headers: myHeaders})
                .map((responseRecebida: Response) => responseRecebida.json())
                .catch((erroRecebido: Response) => Observable.throw(erroRecebido.json()));
    }

    getMessages(){
        return this.http.get('http://localhost:3000/message')
                .map((responseRecebida: Response) => 
                {
                    const resposeEmJSON = responseRecebida.json();
                    const messageSResponseRecebida = resposeEmJSON.objSMessageSRecuperadoS;
                    let transformedCastMessagesModelFrontEnd : Message[] = [];
                        for(let msg of messageSResponseRecebida)
                        {
                            transformedCastMessagesModelFrontEnd.push(
                                new Message(msg.content, msg.username, msg._id, null)
                            );
                        }
                    this.messageSService = transformedCastMessagesModelFrontEnd;
                    return transformedCastMessagesModelFrontEnd;
                })
                .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    deleteMessage(message: Message){
        this.messageSService.splice(this.messageSService.indexOf(message), 1); 

        const bodyReq = JSON.stringify(message);
        console.log("delete");
        return this.http.delete('http://localhost:3000/message', bodyReq)
                        .map((responseRecebida: Response) => responseRecebida.json())
                        .catch((erroRecebido: Response) => Observable.throw(erroRecebido.json()));
    }

    updateMessage(message: Message)
    {
        const bodyReq = JSON.stringify(message);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.put('http://localhost:3000/message', bodyReq, {headers: myHeaders})
                .map((responseRecebida: Response) => responseRecebida.json())
                .catch((erroRecebido: Response) => Observable.throw(erroRecebido.json()));
    }
}

