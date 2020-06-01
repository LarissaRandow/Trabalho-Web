import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/message.component";
import { AuthenticationComponent } from "./author/authentication.component";
import { AUTH_ROUTES } from "./author/auth.routers";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/mensagens', pathMatch: 'full' },
    { path: 'mensagens', component: MessagesComponent },
    { path: 'autenticacao', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);