import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/messages.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
import { AuthenticationComponent } from './author/authentication.component';
import { HeaderComponent } from './header.component';
import { MessagesComponent } from './messages/message.component';
import { myrouting } from './app.routing';
import { SignupComponent } from './author/signup.component';
import { SigninComponent } from './author/signin.component';
import { LogoutComponent } from './author/logout.component';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent, 
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        SignupComponent,
        SigninComponent,
        LogoutComponent

    ],
    imports: [BrowserModule, FormsModule, myrouting, ReactiveFormsModule, HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule
{

}