import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Brain, Sparkles } from "lucide-react";

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen max-w-md mx-auto bg-gradient-to-br from-primary/5 via-background to-accent/20 px-6">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
        <div className="relative bg-primary text-primary-foreground p-6 rounded-3xl shadow-lg">
          <Brain className="w-16 h-16" />
        </div>
      </div>

      <h1 className="text-3xl font-bold text-foreground mb-2 text-center">
        Foca & Revisa
      </h1>

      <div className="flex items-center gap-2 text-muted-foreground mb-8">
        <Sparkles className="w-4 h-4" />
        <p className="text-sm">Seu parceiro de estudos</p>
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground italic">
          "O sucesso é a soma de pequenos esforços repetidos dia após dia."
        </p>
      </div>

      {/* Loading animation */}
      <div className="mt-8 flex gap-2">
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0ms]"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:150ms]"></div>
        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:300ms]"></div>
      </div>
    </div>
  );
}
