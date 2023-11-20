import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PrincipalRoutingModule} from "./principal-routing.module";
import {PrincipalComponent} from "./principal.component";
import { NavPrincipalComponent } from './nav-principal/nav-principal.component';
import { DetalleLibroComponent } from './detalle-libro/detalle-libro.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { SolicitudIntercambioComponent } from './solicitud-intercambio/solicitud-intercambio.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    NavPrincipalComponent,
    DetalleLibroComponent,
    SolicitudIntercambioComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule
  ]
})
export class PrincipalModule { }
