import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
/* import { HomeModule } from './home/home.module';
import { TareasModule } from './tareas/tareas.module';
import { LibrosModule } from './libros/libros.module';
import { ContactosModule } from './contactos/contactos.module'; */

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
