import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./principal.component";
import {AgregarLibroComponent} from "./agregar-libro/agregar-libro.component";

const routes: Routes = [
  { path: '', component: PrincipalComponent, children: [ {path: '', component: AgregarLibroComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
