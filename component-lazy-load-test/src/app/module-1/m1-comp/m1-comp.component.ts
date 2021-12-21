import { Component, OnInit } from '@angular/core';
import {Service1Service} from "../service-1.service";

@Component({
  selector: 'app-m1-comp',
  templateUrl: './m1-comp.component.html',
  styleUrls: ['./m1-comp.component.scss']
})
export class M1CompComponent implements OnInit {
  constructor(public service: Service1Service) { }

  ngOnInit(): void {
  }

}
