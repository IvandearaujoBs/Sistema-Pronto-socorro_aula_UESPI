import { Paciente } from "./Paciente";
import { Fila } from "./Fila";
import { CorRisco } from "../tipos/CorRisco";

export class Triagem {
    constructor(
        public paciente: Paciente,
        public cor: CorRisco,
        public queixa: string
    ) { }

    enviarParaFila(fila: Fila) {
        this.paciente.entrarNaFila(this.cor);
        fila.entrar(this.paciente);
    }
}
