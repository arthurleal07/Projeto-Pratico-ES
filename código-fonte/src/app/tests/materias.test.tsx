import { describe, test, expect } from "vitest";

/*
==================================================
US23 – Gerenciamento e Exclusão de Disciplinas
==================================================

História do Usuário:
Enquanto estudante, quero acessar uma lista
de disciplinas cadastradas para excluir
matérias antigas.

Critérios de Aceitação:
- O aplicativo deve possuir a tela
  "Gerenciar Disciplinas".
- A tela deve listar todas as disciplinas
  cadastradas.
- Cada disciplina deve possuir um botão
  de exclusão.

Regras de Negócio:
- Não permitir excluir disciplinas com
  histórico vinculado.
- Exibir mensagem de erro quando houver
  vínculo com histórico.
- Permitir exclusão apenas de disciplinas
  sem sessões associadas.

Classes de Equivalência:

CE01 - Disciplina sem sessões associadas
       (0 sessões) ---------------------- Válida

CE02 - Disciplina com sessões associadas
       (> 0 sessões) -------------------- Inválida

Casos de Teste:

CT01 - Permitir exclusão de disciplina
       sem histórico

CT02 - Bloquear exclusão de disciplina
       com histórico

CT03 - Bloquear exclusão de disciplina
       com apenas uma sessão vinculada

==================================================
*/

interface Disciplina {
  id: number;
  nome: string;
  quantidadeSessoes: number;
}

/*
  Regra de Negócio:
  Apenas disciplinas sem sessões associadas
  podem ser excluídas.
*/
function podeExcluir(disciplina: Disciplina) {
  return disciplina.quantidadeSessoes === 0;
}

describe("US23 - Gerenciamento e Exclusão de Disciplinas", () => {

  // CE01 - Classe Válida
  test("CT01 - Permitir exclusão de disciplina sem histórico", () => {
    const disciplina = {
      id: 1,
      nome: "Química",
      quantidadeSessoes: 0,
    };

    expect(podeExcluir(disciplina)).toBe(true);
  });

  // CE02 - Classe Inválida
  test("CT02 - Bloquear exclusão de disciplina com histórico", () => {
    const disciplina = {
      id: 2,
      nome: "Matemática",
      quantidadeSessoes: 12,
    };

    expect(podeExcluir(disciplina)).toBe(false);
  });

  // CE02 - Classe Inválida
  test("CT03 - Bloquear exclusão com apenas uma sessão vinculada", () => {
    const disciplina = {
      id: 3,
      nome: "Português",
      quantidadeSessoes: 1,
    };

    expect(podeExcluir(disciplina)).toBe(false);
  });

});