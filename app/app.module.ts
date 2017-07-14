import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EstudiantesComponent } from './estudiantes.component'; // Importar el componente estudiantes.component

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EstudiantesComponent ], // Agregar el nuevo componente que se utliza a las declaraciones
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
