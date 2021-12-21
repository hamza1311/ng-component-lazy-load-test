import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }

  getData() {
    return ['1', 'two', '3']
  }
}
