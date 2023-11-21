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
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import {FormsModule} from "@angular/forms";
import { FooterPrincipalComponent } from './footer-principal/footer-principal.component';
import {ChatIntercambioComponent} from "./chat-intercambio/chat-intercambio.component";
import { MainPrincipalComponent } from './main-principal/main-principal.component';


@NgModule({
  declarations: [
    PrincipalComponent,
    NavPrincipalComponent,
    DetalleLibroComponent,
    SolicitudIntercambioComponent,
    AgregarLibroComponent,
    FooterPrincipalComponent,
    ChatIntercambioComponent,
    MainPrincipalComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ]
})
export class PrincipalModule { }
