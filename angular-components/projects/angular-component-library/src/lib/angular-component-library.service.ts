import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AngularComponentLibraryService {

  constructor() { }


  getData() {
    return ['1', 'two', '3']
  }
}
