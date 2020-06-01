import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    private userService: User[] = [];

    constructor(private http: Http){}

    addUser(user: User){

        var bodyRequest = JSON.stringify(user);
        const myHeaders = new Headers({'Content-Type': 'application/json'});

        return this.http.post('http://localhost:3000/autenticacao/signup', bodyRequest, {headers: myHeaders})
                .map((responseRecebida: Response) => responseRecebida.json())
                .catch((erroRecebido: Response) => Observable.throw(erroRecebido.json()));
        
    }

}