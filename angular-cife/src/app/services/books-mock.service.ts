import { Injectable } from '@angular/core';
// angular lo convierte en un servicio con @Injectable
@Injectable({
  providedIn: 'root'
})
export class BooksMockService {
  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
    'Angular para torpes',
    'Angular iniciar',
    'Angular avanzado'
  ];
  }
// Esto es un servicio: devolver libros por.ejem.
  getLibrosAsinc(clave: string): Promise<Array<string>> {
    return new Promise( (resolve) => {
      setTimeout( () => resolve(this.aLibros), 1000);
    });
  }
}
