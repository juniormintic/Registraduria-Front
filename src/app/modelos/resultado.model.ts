import { CandidatosModule } from "../pages/candidatos/candidatos.module";
import { MesasModule } from "../pages/mesas/mesas.module";

export class Resultado {
    _id?:string;
    numero_mesa?:MesasModule;
    cedula_candidato?:CandidatosModule;
    numero_votos?:string;
}
