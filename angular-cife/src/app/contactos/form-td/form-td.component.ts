import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FormTdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
