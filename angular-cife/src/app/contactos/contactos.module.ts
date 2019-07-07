import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactosComponent, FormTdComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactosRoutingModule
  ]
})
export class ContactosModule { }
