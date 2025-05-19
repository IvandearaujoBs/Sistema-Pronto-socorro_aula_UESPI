import { Triagem } from "../entidades/Triagem";
import { CorRisco } from "../tipos/CorRisco";
import { pacientes, fila } from "../data";

export function menuTriagem(rl: any) {
    console.log("\n--- MENU TRIAGEM ---");
    console.log("1 - Realizar triagem");
    console.log("2 - Voltar");

    rl.question("Escolha uma opção: ", (op: string) => {
        if (op === "1") {
            const naoTriados = pacientes.filter(
                (p) => !p.corRisco && !p.horaEntradaFila
            );

            if (naoTriados.length === 0) {
                console.log("Todos os pacientes já foram triados.");
                return menuTriagem(rl);
            }

            naoTriados.forEach((p, i) => console.log(`${i + 1} - ${p.nome}`));

            rl.question("Escolha o paciente para triagem: ", (idx: string) => {
                const paciente = naoTriados[parseInt(idx) - 1];
                if (!paciente) return menuTriagem(rl);

                rl.question("Cor de risco (vermelho/laranja/amarelo): ", (cor: string) => {
                    rl.question("Queixa principal: ", (queixa: string) => {
                        const corRisco = cor.toLowerCase() as CorRisco;
                        const triagem = new Triagem(paciente, corRisco, queixa);
                        triagem.enviarParaFila(fila);
                        console.log(`${paciente.nome.toUpperCase()} (${corRisco.toUpperCase()}) entrou na fila.`);
                        menuTriagem(rl);
                    });
                });
            });
        } else {
            require("./menuPrincipal").menuPrincipal();
        }
    });
}
