import { describe, test, expect } from "vitest";

interface Disciplina {
  id: number;
  nome: string;
  quantidadeSessoes: number;
}

function podeExcluir(disciplina: Disciplina) {
  return disciplina.quantidadeSessoes === 0;
}

describe("US23 - Gerenciamento e Exclusão de Disciplinas", () => {

  test("CT01 - Permitir exclusão de disciplina sem histórico", () => {
    const disciplina = {
      id: 1,
      nome: "Química",
      quantidadeSessoes: 0,
    };

    expect(podeExcluir(disciplina)).toBe(true);
  });

  test("CT02 - Bloquear exclusão de disciplina com histórico", () => {
    const disciplina = {
      id: 2,
      nome: "Matemática",
      quantidadeSessoes: 12,
    };

    expect(podeExcluir(disciplina)).toBe(false);
  });

  test("CT03 - Bloquear exclusão com apenas uma sessão", () => {
    const disciplina = {
      id: 3,
      nome: "Português",
      quantidadeSessoes: 1,
    };

    expect(podeExcluir(disciplina)).toBe(false);
  });

});