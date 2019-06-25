import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
}

// Persistencia en LocaLStorage

saveStorage(name: string, data: Array<any>) {
    window.localStorage.setItem(name, JSON.stringify(data));
}
  readStorage(name: string) {
    let read = [];
    const cadena = window.localStorage.getItem(name);
    // console.log(cadena)
    if (cadena) {
        read = JSON.parse(cadena);
    }
    return read;
}
  removeStorage(name: string) {
    window.localStorage.removeItem(name);
  }
