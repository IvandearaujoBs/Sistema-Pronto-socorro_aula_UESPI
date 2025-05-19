import { CorRisco } from "../tipos/CorRisco";
import { temposMaximos } from "../constantes/temposMaximos";

export class Paciente {
    horaEntradaFila?: number;

    constructor(
        public id: number,
        public nome: string,
        public idade: number,
        public cpf: string,
        public telefone: string,
        public prioridadeLegal: boolean,
        public corRisco?: CorRisco
    ) { }

    entrarNaFila(corRisco: CorRisco) {
        this.corRisco = corRisco;
        this.horaEntradaFila = Date.now();
    }

    tempoRestante(): number {
        if (!this.corRisco || !this.horaEntradaFila) return Infinity;
        const decorrido = (Date.now() - this.horaEntradaFila) / 1000;
        return temposMaximos[this.corRisco] - decorrido;
    }

    atrasoAbsoluto(): number {
        const resto = this.tempoRestante();
        return resto < 0 ? Math.abs(resto) : 0;
    }
}
