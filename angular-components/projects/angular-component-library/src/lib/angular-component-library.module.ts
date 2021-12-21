import { NgModule } from '@angular/core';
import { AngularComponentLibraryComponent } from './angular-component-library.component';
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  declarations: [
    AngularComponentLibraryComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
  ],
  exports: [
    AngularComponentLibraryComponent
  ]
})
export class AngularComponentLibraryModule { }
