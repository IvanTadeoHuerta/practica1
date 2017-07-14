//import { Component } from '@angular/core' es una libreria que permite exportar la linea 4 @Component
import { Component } from '@angular/core'

//@Component (decorador) es una funcion que recibe metadata
@Component({
    selector: 'estudiante', // Busca la etiqueta estudiantes dentro del html
    //Inserta el template en el selector. Template es el html
    // {{ variable }} se conoce como interpolación y es para que reemplace variable por el texto
    template: `<h3> {{ titulo }}</h3> 
                <ul>
                    <li *ngFor="let estudiante of estudiantes">{{ estudiante }}</li>
                </ul>`
})

//export es para que podamos usar EstudiantesComponent en otros componentes (clases)
export class EstudiantesComponent{
    titulo = "Lista de estudiantes";
    estudiantes = ['Ivan','Luis','Ricardo'];
}