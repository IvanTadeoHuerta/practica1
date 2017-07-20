//import { Component } from '@angular/core' es una libreria que permite exportar la linea 4 @Component
import { Component, Input, Output, EventEmitter } from '@angular/core'

//@Component (decorador) es una funcion que recibe metadata
@Component({
    selector: 'estudiante', // Busca la etiqueta estudiantes dentro del html
    //Inserta el template en el selector. Template es el html
    // {{ variable }} se conoce como interpolación y es para que reemplace variable por el texto
    templateUrl: 'app/templates/estudiantes.template.html'
})

//export es para que podamos usar EstudiantesComponent en otros componentes (clases)
export class EstudiantesComponent{
    @Input() universidad:String;
    @Output() seleccionado = new EventEmitter();
    titulo = "Lista de estudiantes";
    estudiantes = ['Ivan','Luis','Ricardo'];
    circle = true;
    padding = true;
    color = "blue";

    alerta(){
        console.log('Hubo un evento');
        alert('Esta es una alerta');
    }

    listaDeEstudiantes():Array<string>{
        if(this.universidad == "Instituto Tecnologico de Toluca"){
            return ["ejemplo","ejemplo2"]
        }else{
            return ["Vacio"]
        }
    }

    clickEnEstudiante(evento:any):void{
        this.seleccionado.emit({nombre: evento.target.textContent});
    }
}