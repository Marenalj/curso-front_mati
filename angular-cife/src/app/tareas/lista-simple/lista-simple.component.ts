import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';
import { falTrash, faEdit, IconDefinition } from '@'
import { faCoffee } from @fontawesome/free-solid-svg icons';

@Component({
  selector: 'app-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {
  tarea: Tarea;
  aTareas: Array<Tarea>;
  faTrash = IconDefinition;
  storageName: string;

  constructor(public ls: LocalStorageService) { }

  ngOnInit() {
    this.faTrash = faTrash;
    this.tarea = new Tarea();
    this.aTareas = this.ls.readStorage(this.storageName);
    this.storageName = 'tareas';
  }

  onClickAdd() {
// tslint:disable-next-line: triple-equals
    if (this.tarea.nombre === '') {
      return;
    }
    this.aTareas.push(this.tarea);
    this.ls.saveStorage(this.storageName, this.aTareas);
    this.tarea = new Tarea();
    console.log(this.aTareas);
  }

  onClickDelete() {
    this.aTareas = [];
    this.ls.removeStorage(this.storageName);
  }

  onClickEditar(i: number) {
    this.aTareas.splice(i, 1);
    this.ls.saveStorage(this.storageName)
  }

  onClickborrar(i: number) {
    this.aTareas.splice(i, 1);
    this.ls.saveStorage(this.storageName, this.aTareas);
  }

  onBlur(ev: any, i: number) {
    // console.dir(ev.target.textContent);
    this.aTareas[i].nombre = ev.target.textContent;
    this.ls.saveStorage(this.storageName, this.aTareas);
  }

  onSelectCheck() {
    console.log(this.aTareas);
    this.ls.saveStorage(this.storageName, this.aTareas);
  }


/*    // Persistencia en LocaLStorage

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
  } */
}
 
