import { Paciente } from "./Paciente";

export class Fila {
    private pacientes: Paciente[] = [];

    entrar(paciente: Paciente): void {
        this.pacientes.push(paciente);
        console.log(
            `${paciente.nome} (${paciente.corRisco?.toUpperCase()}${paciente.prioridadeLegal ? ", PRIORIDADE LEGAL" : ""
            }) entrou na fila.`
        );
    }

    proximo(): Paciente | null {
        if (this.pacientes.length === 0) return null;

        const ordemCor = { vermelho: 0, laranja: 1, amarelo: 2 };

        this.pacientes.sort((a, b) => {
            if (a.corRisco === "vermelho" && b.corRisco !== "vermelho") return -1;
            if (b.corRisco === "vermelho" && a.corRisco !== "vermelho") return 1;

            const atrasoA = a.atrasoAbsoluto();
            const atrasoB = b.atrasoAbsoluto();

            if (atrasoA > 0 && atrasoB > 0 && a.corRisco === b.corRisco) {
                if (a.prioridadeLegal && !b.prioridadeLegal) return -1;
                if (!a.prioridadeLegal && b.prioridadeLegal) return 1;
                return atrasoB - atrasoA;
            }

            if (atrasoA > 0) return -1;
            if (atrasoB > 0) return 1;

            if (ordemCor[a.corRisco!] < ordemCor[b.corRisco!]) return -1;
            if (ordemCor[a.corRisco!] > ordemCor[b.corRisco!]) return 1;

            if (a.prioridadeLegal && !b.prioridadeLegal) return -1;
            if (!a.prioridadeLegal && b.prioridadeLegal) return 1;

            return a.tempoRestante() - b.tempoRestante();
        });

        return this.pacientes.shift() || null;
    }

    mostrar(): void {
        if (this.pacientes.length === 0) return console.log("Fila vazia.");
        console.log("--- Fila Atual ---");
        this.pacientes.forEach((p, i) => {
            const restante = Math.max(0, p.tempoRestante()).toFixed(1);
            console.log(
                `${i + 1}. ${p.nome} (${p.corRisco?.toUpperCase()}${p.prioridadeLegal ? ", PRIORIDADE LEGAL" : ""
                }) - ${restante}s`
            );
        });
    }
}
