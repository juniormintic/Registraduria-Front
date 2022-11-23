import { PartidoModule } from "../pages/partido/partido.module";

export class Candidato {
    cedula?:string;
    nombre?:string;
    apellido?:string;
    numeroResolucion?:string;
    partido?:Partido;
}
