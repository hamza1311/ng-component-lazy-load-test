import { Component, OnInit } from '@angular/core';
import {AngularComponentLibraryService} from "./angular-component-library.service";

@Component({
  selector: 'lib-angular-component-library',
  template: `
    <p>
      angular-component-library works!
    </p>
    <ul>
        <li *ngFor="let d of data">{{d}}</li>
    </ul>
  `,
  styles: [
  ]
})
export class AngularComponentLibraryComponent implements OnInit {

  constructor(public service: AngularComponentLibraryService) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  get data() {
    return this.service.getData()
  }

}
