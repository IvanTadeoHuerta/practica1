import { Component} from '@angular/core';

@Component({
  selector: 'mi-aplicacion',
  template: `<h1>Aprende Angular 2 Fácilmente</h1>
                <estudiante [universidad]="laUniversidad"
                (seleccionado)="mostrarEstudiante($event)"></estudiante>
              `
})

export class AppComponent  { 
    laUniversidad = "Instituto Tecnologico de Toluca";

    mostrarEstudiante(evento:any):void{
        console.log(evento.nombre);
    }
}
