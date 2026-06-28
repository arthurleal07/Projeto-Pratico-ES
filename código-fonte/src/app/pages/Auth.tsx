import { useState } from "react";

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

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [aceitouTermos, setAceitouTermos] = useState(false);
  const [mensagem, setMensagem] = useState("");

  function cadastrar(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !usuario || !senha) {
      setMensagem("Preencha todos os campos.");
      return;
    }

    const erroSenha = validatePassword(senha);

    if (erroSenha) {
      setMensagem(erroSenha);
      return;
    }

    if (!aceitouTermos) {
      setMensagem("É necessário aceitar os Termos de Uso.");
      return;
    }

    setMensagem("Cadastro realizado com sucesso!");

  
    console.log({
      email,
      usuario,
      senha,
    });
  }

  return (
    <div className="container">
      <h2>Cadastro</h2>

      <form onSubmit={cadastrar}>
        <div>
          <label>Gmail</label>
          <input
            type="email"
            placeholder="Digite seu Gmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Usuário</label>
          <input
            type="text"
            placeholder="Nome de usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>

        <div>
          <label>Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            type="checkbox"
            checked={aceitouTermos}
            onChange={(e) => setAceitouTermos(e.target.checked)}
          />

          <label>
            {" "}Li e aceito os{" "}
            <a href="/termos-de-uso" target="_blank">
              Termos de Uso
            </a>
          </label>
        </div>

        <button type="submit" style={{ marginTop: "20px" }}>
          Cadastrar
        </button>
      </form>

      {mensagem && (
        <p style={{ marginTop: "20px", color: "red" }}>
          {mensagem}
        </p>
      )}
    </div>
  );
}
