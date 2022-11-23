import { PartidoModule } from "../pages/partido/partido.module";

export class Candidato {
    _id?:string;
    cedula?:string;
    nombre?:string;
    apellido?:string;
    numeroResolucion?:string;
    partido?:Partido;
}
