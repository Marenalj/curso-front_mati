import { Component, OnInit } from '@angular/core';
import { Component, OnInit, NgModule } from '@angular/core';
import { timingSafeEqual } from 'crypto';
import { AppComponent } from 'src/app/app.component';
import { HttpClient } from '@angular/core';

@Component({
  selector: 'app-libros-google',
  templateUrl: './libros-google.component.html',
  styleUrls: ['./libros-google.component.css']
})
export class LibrosGoogleComponent implements OnInit {

  clave: string;
  aTitulosLibros: Array<string>;


  constructor(public books: BooksService) { }

  ngOnInit() {
    this.aTitulosLibros = [];
  }
    // traemos los libros clave y los guardamos en nuestro array de títulos
  }

onBuscar() {
  this.books.getLibros(this.clave).then(
    response => this.aTitulosLibros = response
  );
  }




@Component({
  selector: 'app-libros-final',
  templateUrl: './libros-final.component.html',
  styleUrls: ['./libros-final.component.css']
})
export class LibrosFinalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
