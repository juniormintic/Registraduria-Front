import { Partido } from "./partido.model";

export class Candidato {
    _id?:string;
    cedula?:string;
    nombre?:string;
    apellido?:string;
    numeroResolucion?:string;
    partido?:Partido;
}
