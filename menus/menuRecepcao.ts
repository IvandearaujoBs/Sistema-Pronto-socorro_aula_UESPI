import { Recepcao } from "../entidades/Recepcao";
import { pacientes } from "../data";

export function menuRecepcao(rl: any) {
    const recepcao = new Recepcao(rl);

    console.log("\n--- MENU RECEPÇÃO ---");
    console.log("1 - Cadastrar Paciente");
    console.log("2 - Voltar");
    rl.question("Escolha uma opção: ", (op: string) => {
        if (op === "1") {
            recepcao.cadastrarPaciente((p) => {
                pacientes.push(p);
                console.log("Paciente cadastrado com sucesso.");
                menuRecepcao(rl);
            });
        } else {
            require("./menuPrincipal").menuPrincipal();
        }
    });
}
