import * as readline from "readline";
import { Paciente } from "./Paciente";

export class Recepcao {
    constructor(private rl: readline.Interface) { }

    cadastrarPaciente(callback: (p: Paciente) => void) {
        this.rl.question("Nome: ", (nome) => {
            this.rl.question("Idade: ", (idade) => {
                this.rl.question("CPF: ", (cpf) => {
                    this.rl.question("Telefone: ", (tel) => {
                        this.rl.question("É prioritário legal (s/n)? ", (prior) => {
                            const prioridadeLegal = prior.toLowerCase() === "s";
                            const paciente = new Paciente(
                                Date.now(),
                                nome,
                                parseInt(idade),
                                cpf,
                                tel,
                                prioridadeLegal
                            );
                            callback(paciente);
                        });
                    });
                });
            });
        });
    }
}
