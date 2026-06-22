import { describe, test, expect } from "vitest";

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

  if (!trimmedQuestion) {
    return "A pergunta não pode estar vazia.";
  }

  if (!trimmedAnswer) {
    return "A resposta não pode estar vazia.";
  }

  if (!trimmedSubject) {
    return "O flashcard deve estar vinculado a uma matéria.";
  }

  const subjectExists = subjects.some(
    (s) => s.value === trimmedSubject
  );

  if (!subjectExists) {
    return "A matéria selecionada não existe no sistema.";
  }

  return null;
}

describe("US03 - Criar Flashcards", () => {

  test("CT01 - Flashcard válido", () => {
    expect(
      validateFlashcard(
        "O que é fotossíntese?",
        "Processo de produção de energia pelas plantas",
        "biologia"
      )
    ).toBeNull();
  });

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