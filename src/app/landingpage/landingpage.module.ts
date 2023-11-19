import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LandingpageRoutingModule} from "./landingpage-routing.module";
import {LandingpageComponent} from "./landingpage.component";
import { NavlandingComponent } from './navlanding/navlanding.component';
import { BodylandingComponent } from './bodylanding/bodylanding.component';
import { FooterlandingComponent } from './footerlanding/footerlanding.component';



@NgModule({
  declarations: [
    LandingpageComponent,
    NavlandingComponent,
    BodylandingComponent,
    FooterlandingComponent
  ],
  imports: [
    CommonModule,
    LandingpageRoutingModule
  ]
})
export class LandingpageModule { }
