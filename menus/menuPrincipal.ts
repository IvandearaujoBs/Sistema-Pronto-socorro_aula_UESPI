import * as readline from "readline";
import { menuRecepcao } from "./menuRecepcao";
import { menuTriagem } from "./menuTriagem";
import { menuMedico } from "./menuMedico";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function menuPrincipal() {
    console.log("\n--- SISTEMA DE PRONTO-SOCORRO ---");
    console.log("1 - Acessar Recepção");
    console.log("2 - Acessar Triagem");
    console.log("3 - Acessar Médico");
    console.log("0 - Sair");
    rl.question("Escolha o setor: ", (opcao) => {
        switch (opcao) {
            case "1":
                menuRecepcao(rl);
                break;
            case "2":
                menuTriagem(rl);
                break;
            case "3":
                menuMedico(rl);
                break;
            case "0":
                rl.close();
                break;
            default:
                menuPrincipal();
        }
    });
}
