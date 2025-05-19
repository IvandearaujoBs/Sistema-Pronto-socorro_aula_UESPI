# 🏥 Sistema de Pronto-Socorro — Terminal Interativo (TypeScript)

Este projeto simula um sistema de pronto-socorro com **cadastro de pacientes**, **triagem por cor de risco**, e **atendimento médico**, tudo via **terminal**, usando `Node.js` e `TypeScript`.

## 📋 Funcionalidades

- 📌 **Recepção**
  - Cadastra pacientes com nome, idade, CPF, telefone e se possuem prioridade legal (ex: idosos, gestantes).

- 🚨 **Triagem**
  - Classifica o paciente com uma cor de risco: `vermelho`, `laranja` ou `amarelo`.
  - Registra a queixa principal e o tempo de entrada na fila.

- 👨‍⚕️ **Atendimento Médico**
  - O médico chama o próximo paciente da fila.
  - Os critérios de atendimento consideram:
  - Cor de risco.
  - Tempo de espera.
  - Prioridade legal.

- 📊 **Visualização da Fila**
  - Mostra todos os pacientes aguardando, com cor de risco e tempo restante.

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- Módulo nativo `readline` para entrada interativa via terminal.

## ▶️ Como Executar

### Pré-requisitos:

- Ter o **Node.js** e o **TypeScript** instalados:
```bash
npm install -g typescript
