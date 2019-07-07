import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { LibrosMockComponent } from './libros-mock/libros-mock.component';
import { FormsModule } from '@angular/forms';
import { LibrosGoogleComponent } from './libros-google/libros-google.component';
import { HttpClientModule } from '@angular/common/http';
import { LibrosFinalComponent } from './libros-final/libros-final.component';

@NgModule({
  declarations: [LibrosComponent, LibrosMockComponent, LibrosGoogleComponent, LibrosFinalComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
