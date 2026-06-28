import { describe, test, expect } from "vitest";

/*
==================================================
US03 – Criar Flashcards
==================================================

História do Usuário:
Enquanto estudante, desejo criar flashcards
para revisar conteúdos importantes.

Critérios de Aceitação:
- O sistema deve permitir inserir pergunta e resposta.
- O usuário deve poder editar flashcards.
- O usuário deve poder excluir flashcards.
- O sistema deve permitir associar flashcards a uma matéria.

Regra de Negócio:
- Todo flashcard deve estar obrigatoriamente
  vinculado a uma matéria.

Classes de Equivalência:
CE01 - Pergunta preenchida ---------------- Válida
CE02 - Pergunta vazia ---------------------- Inválida

CE03 - Resposta preenchida ---------------- Válida
CE04 - Resposta vazia ---------------------- Inválida

CE05 - Matéria válida ---------------------- Válida
CE06 - Flashcard sem matéria --------------- Inválida
CE07 - Matéria inexistente ----------------- Inválida

Casos de Teste:
CT01 - Flashcard válido
CT02 - Pergunta vazia
CT03 - Resposta vazia
CT04 - Matéria não selecionada
CT05 - Matéria inexistente
==================================================
*/

const subjects = [
  { value: "matematica" },
  { value: "portugues" },
  { value: "fisica" },
  { value: "quimica" },
  { value: "biologia" },
  { value: "historia" },
  { value: "geografia" },
  { value: "ingles" },
];

function validateFlashcard(
  question: string,
  answer: string,
  subject: string
) {
  const trimmedQuestion = question.trim();
  const trimmedAnswer = answer.trim();
  const trimmedSubject = subject.trim();

  // CE02
  if (!trimmedQuestion) {
    return "A pergunta não pode estar vazia.";
  }

  // CE04
  if (!trimmedAnswer) {
    return "A resposta não pode estar vazia.";
  }

  // CE06
  if (!trimmedSubject) {
    return "O flashcard deve estar vinculado a uma matéria.";
  }

  const subjectExists = subjects.some(
    (s) => s.value === trimmedSubject
  );

  // CE07
  if (!subjectExists) {
    return "A matéria selecionada não existe no sistema.";
  }

  // CE01 + CE03 + CE05
  return null;
}

describe("US03 - Criar Flashcards", () => {

  // CE01 + CE03 + CE05
  test("CT01 - Flashcard válido", () => {
    expect(
      validateFlashcard(
        "O que é fotossíntese?",
        "Processo de produção de energia pelas plantas",
        "biologia"
      )
    ).toBeNull();
  });

  // CE02
  test("CT02 - Pergunta vazia", () => {
    expect(
      validateFlashcard(
        "",
        "Resposta válida",
        "biologia"
      )
    ).toBe(
      "A pergunta não pode estar vazia."
    );
  });

  // CE04
  test("CT03 - Resposta vazia", () => {
    expect(
      validateFlashcard(
        "Pergunta válida",
        "",
        "biologia"
      )
    ).toBe(
      "A resposta não pode estar vazia."
    );
  });

  // CE06
  test("CT04 - Matéria não selecionada", () => {
    expect(
      validateFlashcard(
        "Pergunta válida",
        "Resposta válida",
        ""
      )
    ).toBe(
      "O flashcard deve estar vinculado a uma matéria."
    );
  });

  // CE07
  test("CT05 - Matéria inexistente", () => {
    expect(
      validateFlashcard(
        "Pergunta válida",
        "Resposta válida",
        "astronomia"
      )
    ).toBe(
      "A matéria selecionada não existe no sistema."
    );
  });

});