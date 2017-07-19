"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { Component } from '@angular/core' es una libreria que permite exportar la linea 4 @Component
var core_1 = require("@angular/core");
//@Component (decorador) es una funcion que recibe metadata
var EstudiantesComponent = (function () {
    function EstudiantesComponent() {
        this.titulo = "Lista de estudiantes";
        this.estudiantes = ['Ivan', 'Luis', 'Ricardo'];
        this.circle = true;
        this.padding = true;
        this.color = "blue";
    }
    EstudiantesComponent.prototype.alerta = function () {
        console.log('Hubo un evento');
        alert('Esta es una alerta');
    };
    EstudiantesComponent.prototype.listaDeEstudiantes = function () {
        if (this.universidad == "Instituto Tecnologico de Toluca") {
            return ["ejemplo", "ejemplo2"];
        }
        else {
            return ["Vacio"];
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], EstudiantesComponent.prototype, "universidad", void 0);
    EstudiantesComponent = __decorate([
        core_1.Component({
            selector: 'estudiante',
            //Inserta el template en el selector. Template es el html
            // {{ variable }} se conoce como interpolación y es para que reemplace variable por el texto
            template: "<div [style.margin-left]=\"300\">\n                <h3> {{ titulo }}</h3> \n                <ul>\n                    <li *ngFor=\"let estudiante of listaDeEstudiantes()\">{{ estudiante }}</li>\n                </ul>\n                <img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3K-rDvbrlmRfdEv0HG7c2O5LhdTEGdfF-TV4mlRh14-LrtS-rg\" [class.img-circle]=\"circle\"/>\n                <input type=\"text\" [(ngModel)]=\"titulo\"/>\n                <button (click)=\"alerta()\">Test</button>\n                </div>\n                "
        })
        //export es para que podamos usar EstudiantesComponent en otros componentes (clases)
    ], EstudiantesComponent);
    return EstudiantesComponent;
}());
exports.EstudiantesComponent = EstudiantesComponent;
//# sourceMappingURL=estudiantes.component.js.map