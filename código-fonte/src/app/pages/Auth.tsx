import { useState } from "react";
import { useNavigate } from "react-router";
import { Brain, Mail, Lock, User } from "lucide-react";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import { Link } from "react-router";

export function Auth() {
  const navigate = useNavigate();

  // ===========================
  // Estados
  // ===========================
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] =useState("");
  const [password, setPassword] = useState("");

  const [aceitouTermos, setAceitouTermos] = useState(false);

  const [error, setError] = useState("");

  // ===========================
  // Validação de senha
  // ===========================
  const validatePassword = (password: string) => {
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
  };

  // ===========================
  // Login / Cadastro
  // ===========================
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    // Cadastro
    if (!isLogin) {

      if (!name.trim()) {
        setError("Informe seu nome.");
        return;
      }

      if (!email.trim()) {
        setError("Informe seu e-mail.");
        return;
      }

      const passwordError = validatePassword(password);

      if (passwordError) {
        setError(passwordError);
        return;
      }

      if (!aceitouTermos) {
        setError("É necessário aceitar os Termos de Uso.");
        return;
      }
    }

    // Login
    if (isLogin) {

      if (!email.trim()) {
        setError("Informe seu e-mail.");
        return;
      }

      if (!password.trim()) {
        setError("Informe sua senha.");
        return;
      }
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: name || "Estudante",
        email,
      })
    );

    navigate("/home");
  };

  // ===========================
  // Entrar como visitante
  // ===========================
  const handleGuest = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Visitante",
      })
    );

    navigate("/home");
  };

  // ===========================
  // Alternar Login/Cadastro
  // ===========================
  const toggleAuthMode = () => {
    setIsLogin((prev) => !prev);

    setName("");
    setEmail("");
    setPassword("");

    setAceitouTermos(false);

    setError("");
  };

  return (
  <div className="flex flex-col min-h-screen max-w-md mx-auto bg-background">

    {/* Header */}
    <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground px-6 py-12 rounded-b-3xl">
      <div className="flex items-center justify-center mb-4">
        <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
          <Brain className="w-12 h-12" />
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center mb-2">
        Foca & Revisa
      </h1>

      <p className="text-center text-sm opacity-90">
        {isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}
      </p>
    </div>

    {/* Conteúdo */}
    <div className="flex-1 px-6 py-8">

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Nome */}
        {!isLogin && (
          <div className="space-y-2">
            <Label htmlFor="name">
              Nome
            </Label>

            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                className="pl-10"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">
            E-mail
          </Label>

          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              className="pl-10"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* Senha */}
        <div className="space-y-2">
          <Label htmlFor="password">
            Senha
          </Label>

          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />

            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="pl-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Termos de Uso */}
        {!isLogin && (
          <div className="flex items-start gap-3 pt-2">

            <input
              id="termos"
              type="checkbox"
              checked={aceitouTermos}
              onChange={(e) => setAceitouTermos(e.target.checked)}
              className="mt-1 h-4 w-4 accent-primary cursor-pointer"
            />

            <Label
              htmlFor="termos"
              className="text-sm leading-5 cursor-pointer"
            >
              Li e aceito os{" "}

              <Link
                  to="/termos-de-uso"
                  target="_blank"
                  className="text-primary hover:underline font-medium"
                >
                  Termos de Uso
              </Link>
            </Label>

          </div>
        )}

        {/* Mensagem de erro */}
        {error && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            {error}
          </div>
        )}

        {/* Botão */}
        <Button
          type="submit"
          className="w-full mt-6"
        >
          {isLogin ? "Entrar" : "Criar conta"}
        </Button>

      </form>

      {/* Alternar Login/Cadastro */}
      <div className="mt-5 text-center">

        <button
          onClick={toggleAuthMode}
          className="text-sm text-primary hover:underline"
        >
          {isLogin
            ? "Não tem conta? Criar conta"
            : "Já tem conta? Entrar"}
        </button>

      </div>

      {/* Divisor */}
      <div className="relative my-6">

        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>

        <div className="relative flex justify-center text-sm">

          <span className="bg-background px-4 text-muted-foreground">
            ou
          </span>

        </div>

      </div>

      {/* Visitante */}
      <Button
        variant="outline"
        className="w-full"
        onClick={handleGuest}
      >
        Continuar sem conta
      </Button>

    </div>

  </div>
);
}
