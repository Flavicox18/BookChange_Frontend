import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingpageComponent} from "./landingpage.component";
import {IniciarSesionComponent} from "./iniciar-sesion/iniciar-sesion.component";
import {BodylandingComponent} from "./bodylanding/bodylanding.component";
import {RegistrarseComponent} from "./registrarse/registrarse.component";

const routes: Routes = [
  { path: '', component: LandingpageComponent, children: [ {path: '', component: BodylandingComponent}]},
  { path: 'inicioSesion', component: LandingpageComponent, children: [ { path: '', component: IniciarSesionComponent}]},
  { path: 'registrarse', component: LandingpageComponent, children: [ { path: '', component: RegistrarseComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingpageRoutingModule { }
