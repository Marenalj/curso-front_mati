import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor: string;     // propiedades autor y fecha
  empresa: string;
  fecha: Date;

  constructor() {
  }

  ngOnInit() {
    this.autor = 'Matilde Arenal';
    this.empresa = 'CIFE Fuenlabrada';
    this.fecha = new Date();
  }
}

