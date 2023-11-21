import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./principal.component";
import {ChatIntercambioComponent} from "./chat-intercambio/chat-intercambio.component";
import {MainPrincipalComponent} from "./main-principal/main-principal.component";

const routes: Routes = [
  { path: '', component: PrincipalComponent, children: [ {path: '', component: MainPrincipalComponent}]},
  { path: 'chatIntercambio', component: PrincipalComponent, children: [ {path: '', component: ChatIntercambioComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
