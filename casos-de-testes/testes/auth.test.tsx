import { describe, test, expect } from "vitest";

function validatePassword(password: string) {
  const trimmedPassword = password.trim();

  if (!trimmedPassword) {
    return "A senha não pode estar vazia.";
  }

  if (trimmedPassword.length < 15) {
    return "A senha deve possuir no mínimo 15 caracteres.";
  }

  if (!/[A-Z]/.test(trimmedPassword)) {
    return "A senha deve conter pelo menos uma letra maiúscula.";
  }

  if (!/[0-9]/.test(trimmedPassword)) {
    return "A senha deve conter pelo menos um número.";
  }

  if (!/[!@#$%&*]/.test(trimmedPassword)) {
    return "A senha deve conter pelo menos um símbolo especial (!,@,#,$,%,&,*).";
  }

  return null;
}

describe("US18 - Cadastro de Senha Segura", () => {
  test("CT01 - Senha válida", () => {
    expect(validatePassword("SenhaForte@1234")).toBeNull();
  });

  test("CT02 - Campo vazio", () => {
    expect(validatePassword("")).toBe(
      "A senha não pode estar vazia."
    );
  });

  test("CT03 - Sem letra maiúscula", () => {
    expect(validatePassword("senhaforte@1234")).toBe(
      "A senha deve conter pelo menos uma letra maiúscula."
    );
  });

  test("CT04 - Sem número", () => {
    expect(validatePassword("SenhaForte@abcd")).toBe(
      "A senha deve conter pelo menos um número."
    );
  });

  test("CT05 - Sem símbolo", () => {
    expect(validatePassword("SenhaForte12345")).toBe(
      "A senha deve conter pelo menos um símbolo especial (!,@,#,$,%,&,*)."
    );
  });
});