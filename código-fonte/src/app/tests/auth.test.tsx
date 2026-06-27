import { describe, test, expect } from "vitest";

/*
==================================================
US18 – Cadastro de Senha Segura
==================================================

História do Usuário:
Enquanto estudante, quero cadastrar uma senha
segura seguindo os requisitos definidos pelo
sistema, para proteger minha conta.

Critérios de Aceitação:
- A senha deve conter pelo menos uma letra maiúscula.
- A senha deve conter pelo menos um número.
- A senha deve conter pelo menos um símbolo especial.
- A senha deve possuir no mínimo 15 caracteres.
- O sistema deve validar a senha antes de concluir o cadastro.

Regras de Negócio:
- Não aceitar senhas sem letra maiúscula.
- Não aceitar senhas sem número.
- Não aceitar senhas sem símbolo especial.
- Não aceitar senhas com menos de 15 caracteres.
- Não aceitar senhas vazias ou apenas com espaços.
- Exibir mensagem indicando qual requisito
  não foi atendido.

Classes de Equivalência:

CE01 - Senha válida -------------------------- Válida
CE02 - Senha vazia --------------------------- Inválida
CE03 - Menos de 15 caracteres ---------------- Inválida
CE04 - Sem letra maiúscula ------------------- Inválida
CE05 - Sem número ---------------------------- Inválida
CE06 - Sem símbolo especial ------------------ Inválida

Casos de Teste:

CT01 - Senha válida
CT02 - Campo vazio
CT03 - Menos de 15 caracteres
CT04 - Sem letra maiúscula
CT05 - Sem número
CT06 - Sem símbolo especial

==================================================
*/

function validatePassword(password: string) {
  const trimmedPassword = password.trim();

  // CE02
  if (!trimmedPassword) {
    return "A senha não pode estar vazia.";
  }

  // CE03
  if (trimmedPassword.length < 15) {
    return "A senha deve possuir no mínimo 15 caracteres.";
  }

  // CE04
  if (!/[A-Z]/.test(trimmedPassword)) {
    return "A senha deve conter pelo menos uma letra maiúscula.";
  }

  // CE05
  if (!/[0-9]/.test(trimmedPassword)) {
    return "A senha deve conter pelo menos um número.";
  }

  // CE06
  if (!/[!@#$%&*]/.test(trimmedPassword)) {
    return "A senha deve conter pelo menos um símbolo especial (!,@,#,$,%,&,*).";
  }

  // CE01
  return null;
}

describe("US18 - Cadastro de Senha Segura", () => {

  // CE01
  test("CT01 - Senha válida", () => {
    expect(
      validatePassword("SenhaForte@1234")
    ).toBeNull();
  });

  // CE02
  test("CT02 - Campo vazio", () => {
    expect(
      validatePassword("")
    ).toBe(
      "A senha não pode estar vazia."
    );
  });

  // CE03
  test("CT03 - Menos de 15 caracteres", () => {
    expect(
      validatePassword("Senha@123")
    ).toBe(
      "A senha deve possuir no mínimo 15 caracteres."
    );
  });

  // CE04
  test("CT04 - Sem letra maiúscula", () => {
    expect(
      validatePassword("senhaforte@1234")
    ).toBe(
      "A senha deve conter pelo menos uma letra maiúscula."
    );
  });

  // CE05
  test("CT05 - Sem número", () => {
    expect(
      validatePassword("SenhaForte@abcd")
    ).toBe(
      "A senha deve conter pelo menos um número."
    );
  });

  // CE06
  test("CT06 - Sem símbolo especial", () => {
    expect(
      validatePassword("SenhaForte12345")
    ).toBe(
      "A senha deve conter pelo menos um símbolo especial (!,@,#,$,%,&,*)."
    );
  });

});