import { fila } from "../data";
import { Medico } from "../entidades/Medico";

const medico = new Medico("Andrade");

export function menuMedico(rl: any) {
    console.log("\n--- MENU MÉDICO ---");
    console.log("1 - Atender Próximo Paciente");
    console.log("2 - Ver Fila");
    console.log("3 - Voltar");

    rl.question("Escolha uma opção: ", (op: string) => {
        switch (op) {
            case "1":
                const paciente = fila.proximo();
                if (paciente) {
                    medico.atender(paciente);
                } else {
                    console.log("Nenhum paciente na fila.");
                }
                menuMedico(rl);
                break;
            case "2":
                fila.mostrar();
                menuMedico(rl);
                break;
            default:
                require("./menuPrincipal").menuPrincipal();
        }
    });
}
