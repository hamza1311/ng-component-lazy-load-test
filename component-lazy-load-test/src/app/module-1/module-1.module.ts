import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M1CompComponent } from './m1-comp/m1-comp.component';
import {Service1Service} from "./service-1.service";


@NgModule({
  declarations: [
    M1CompComponent
  ],
  imports: [
    CommonModule
  ],
  // providers: [
  //   Service1Service
  // ]
})
export class Module1Module { }
