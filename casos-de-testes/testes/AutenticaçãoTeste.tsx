import { useState } from "react";
import { useNavigate } from "react-router";
import { Brain, Mail, Lock, User } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

export function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    // Validação apenas para cadastro
    if (!isLogin) {
      const passwordError = validatePassword(password);

      if (passwordError) {
        setError(passwordError);
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

  const handleGuest = () => {
    localStorage.setItem(
      "user",
      JSON.stringify({
        name: "Visitante",
      })
    );

    navigate("/home");
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

      {/* Form */}
      <div className="flex-1 px-6 py-8">
        <form onSubmit={handleSubmit} className="space-y-4">

          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>

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

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>

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

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>

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

          {error && (
            <div className="text-sm text-red-500 font-medium">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="w-full mt-6"
          >
            {isLogin ? "Entrar" : "Criar conta"}
          </Button>
        </form>

        {/* Toggle */}
        <div className="mt-4 text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
            className="text-sm text-primary hover:underline"
          >
            {isLogin
              ? "Não tem conta? Criar conta"
              : "Já tem conta? Entrar"}
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>

          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-background text-muted-foreground">
              ou
            </span>
          </div>
        </div>

        {/* Guest */}
        <Button
          onClick={handleGuest}
          variant="outline"
          className="w-full"
        >
          Continuar sem conta
        </Button>
      </div>
    </div>
  );
}
