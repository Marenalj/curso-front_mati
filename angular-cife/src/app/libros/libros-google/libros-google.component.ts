import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/app';
import { map } from 'rxjs';

@Component({
  selector: 'app-libros-google',
  templateUrl: './libros-google.component.html',
  styleUrls: ['./libros-google.component.css']
})
export class LibrosGoogleComponent implements OnInit {

  clave: string;
  aTitulosLibros: Array<string>;
  urlBase: string;

  constructor(public x: HttpClient) { }

  ngOnInit() {
    this.aTitulosLibros = [];
    this.urlBase = 'https://developers.google.com/books/v1/volumes?q=intitle:';
  }
    // traemos los libros clave y los guardamos en nuestro array de títulos
  }

onBuscar() {
    if (this.clave) {
      const url = this.urlBase + '""' + this.clave + '""';
      this.http.get(url).toPromise().then(
        (response: any) => {
          this.aTitulosLibros = response.items.map(    
          item => item.volumeInfo.title
          );
        }
      );
    }
  }

  onBuscarRx() {
    if (this.clave) {
      const url = this.urlBase + '""' + this.clave + '""';
      this.http.get(url)
      .pipe( map( (response.item: any) => ) )
      .subscribe(
        (response: any) => {this.aTitulosLibros = response.items.map(
          item => item.volumeInfo.title);
        }
        ); }
      )
    }

