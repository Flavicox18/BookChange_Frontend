import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: LandingpageComponent},
]
import {LandingpageComponent} from "./landingpage.component";
import {IniciarSesionComponent} from "./iniciar-sesion/iniciar-sesion.component";
import {BodylandingComponent} from "./bodylanding/bodylanding.component";
import {RegistrarseComponent} from "./registrarse/registrarse.component";

const routes: Routes = [
  { path: '', component: LandingpageComponent, children: [ {path: '', component: BodylandingComponent}]},
  { path: '', component: LandingpageComponent, children: [ { path: 'inicioSesion', component: IniciarSesionComponent}]},
  { path: '', component: LandingpageComponent, children: [ { path: 'registrarse', component: RegistrarseComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingpageRoutingModule { }
