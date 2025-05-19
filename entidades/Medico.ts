import { Paciente } from "./Paciente";

export class Medico {
    constructor(public nome: string) { }

    atender(paciente: Paciente) {
        console.log(`Dr(a). ${this.nome} está atendendo ${paciente.nome}`);
    }
}
