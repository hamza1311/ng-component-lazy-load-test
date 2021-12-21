import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ts-ignore
  @ViewChild('anchor', { read: ViewContainerRef }) anchor: ViewContainerRef;

  constructor() {}

  async loadComponent() {
    // the module MUST be imported, otherwise the component won't function properly
    const { AngularComponentLibraryModule, AngularComponentLibraryComponent } = await import('angular-component-library');

    // Uncomment the following lines to import module-1. Then use the `M1CompComponent` in the last line.
    // const { Module1Module } = await import('./module-1/module-1.module');
    // const { M1CompComponent } = await import('./module-1/m1-comp/m1-comp.component');
    this.anchor.clear()
    this.anchor.createComponent(AngularComponentLibraryComponent);
  }

}
