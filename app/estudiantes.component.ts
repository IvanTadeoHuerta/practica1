//import { Component } from '@angular/core' es una libreria que permite exportar la linea 4 @Component
import { Component } from '@angular/core'

//@Component (decorador) es una funcion que recibe metadata
@Component({
    selector: 'estudiante', // Busca la etiqueta estudiantes dentro del html
    template: '<h3>Lista de Estudiantes</h3>' //Inserta el template en el selector. Template es el html
})

//export es para que podamos usar EstudiantesComponent en otros componentes (clases)
export class EstudiantesComponent{}