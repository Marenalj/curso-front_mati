import { Component, OnInit } from '@angular/core';
import { BooksMockService } from 'src/app/services/books-mock.service';

@Component({
  selector: 'app-libros-mock',
  templateUrl: './libros-mock.component.html',
  styleUrls: ['./libros-mock.component.css']
})
export class LibrosMockComponent implements OnInit {

  clave: string;
  aTitulosLibros: Array<string>;
// inyectar nuestro servicio(dentro del constructor)
  constructor(public booksMock: BooksMockService) { }

  ngOnInit() {
    this.aTitulosLibros = [];
  }
  onBuscar() {
    if (this.clave) {
      this.booksMock.getLibrosAsinc(this.clave).then(
        (response: any ) => {
          this.aTitulosLibros = response;
        }
      )
    }
  }
}
