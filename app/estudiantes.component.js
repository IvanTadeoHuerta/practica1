"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import { Component } from '@angular/core' es una libreria que permite exportar la linea 4 @Component
var core_1 = require("@angular/core");
//@Component (decorador) es una funcion que recibe metadata
var EstudiantesComponent = (function () {
    //export es para que podamos usar EstudiantesComponent en otros componentes (clases)
    function EstudiantesComponent() {
    }
    EstudiantesComponent = __decorate([
        core_1.Component({
            selector: 'estudiante',
            template: '<h3>Lista de Estudiantes</h3>' //Inserta el template en el selector. Template es el html
        })
        //export es para que podamos usar EstudiantesComponent en otros componentes (clases)
    ], EstudiantesComponent);
    return EstudiantesComponent;
}());
exports.EstudiantesComponent = EstudiantesComponent;
//# sourceMappingURL=estudiantes.component.js.map