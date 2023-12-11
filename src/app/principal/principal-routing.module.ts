import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrincipalComponent} from "./principal.component";
import {ChatIntercambioComponent} from "./chat-intercambio/chat-intercambio.component";
import {MainPrincipalComponent} from "./main-principal/main-principal.component";
import {VerLibroComponent} from "./ver-libro/ver-libro.component";
import {AgregarLibroComponent} from "./agregar-libro/agregar-libro.component";
import {DetalleLibroComponent} from "./detalle-libro/detalle-libro.component";
import {SolicitudIntercambioComponent} from "./solicitud-intercambio/solicitud-intercambio.component";
import {VerPerfilComponent} from "./ver-perfil/ver-perfil.component";


const routes: Routes = [
  { path: '', component: PrincipalComponent, children: [ {path: '', component: MainPrincipalComponent}]},
  { path: '', component: PrincipalComponent, children: [ {path: 'chatIntercambio', component: ChatIntercambioComponent}]},
  { path: '', component: PrincipalComponent, children: [ {path: 'verLibro', component: VerLibroComponent}]},
  { path: '', component: PrincipalComponent, children: [ {path: 'verPerfil', component: VerPerfilComponent}]},
  { path: '', component: PrincipalComponent, children: [ {path: 'agregarLibro', component: AgregarLibroComponent}]},
  { path: '', component: PrincipalComponent, children: [ {path: 'detalleLibro/:id', component: DetalleLibroComponent}]},
  { path: '', component: PrincipalComponent, children: [ {path: 'solicitudIntercambio', component: SolicitudIntercambioComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
