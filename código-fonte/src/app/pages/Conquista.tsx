import { useEffect, useState } from "react";
import { Trophy, Lock, CheckCircle2, Flame, BookOpen, Target } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

interface Conquista {
  id: string;
  titulo: string;
  descricao: string;
  gatilho: string;
  icone: React.ReactNode;
  corDesbloqueada: string;
  corIcone: string;
  desbloqueada: boolean;
  progresso: number; // 0–100
  progressoLabel: string;
}

function lerLocalStorage() {
  const ciclosTotal = parseInt(localStorage.getItem("pomodoroCompletedCycles") || "0", 10);
  const ciclosHoje = parseInt(localStorage.getItem("pomodoroTodayCycles") || "0", 10);
  const primeiraRevisao = localStorage.getItem("firstRevisionCompleted") === "true";

  return { ciclosTotal, ciclosHoje, primeiraRevisao };
}

function calcularConquistas(): Conquista[] {
  const { ciclosTotal, ciclosHoje, primeiraRevisao } = lerLocalStorage();

  return [
    {
      id: "primeiro-passo",
      titulo: "Primeiro Passo",
      descricao: "Complete seu primeiro ciclo de foco de 25 minutos sem interrupção.",
      gatilho: "1 ciclo de foco completo",
      icone: <Target className="w-7 h-7" />,
      corDesbloqueada: "bg-gradient-to-br from-blue-500 to-blue-600",
      corIcone: "text-white",
      desbloqueada: ciclosTotal >= 1,
      progresso: Math.min(ciclosTotal * 100, 100),
      progressoLabel: `${Math.min(ciclosTotal, 1)}/1 ciclos`,
    },
    {
      id: "maratonista",
      titulo: "Maratonista",
      descricao: "Complete 4 ciclos de foco no mesmo dia. Concentração é consistência.",
      gatilho: "4 ciclos de foco no mesmo dia",
      icone: <Flame className="w-7 h-7" />,
      corDesbloqueada: "bg-gradient-to-br from-orange-500 to-red-500",
      corIcone: "text-white",
      desbloqueada: ciclosHoje >= 4,
      progresso: Math.min((ciclosHoje / 4) * 100, 100),
      progressoLabel: `${Math.min(ciclosHoje, 4)}/4 ciclos hoje`,
    },
    {
      id: "mestre-revisao",
      titulo: "Mestre da Revisão",
      descricao: "Marque sua primeira revisão como concluída na tela de Resumos.",
      gatilho: "1ª revisão concluída em Resumos",
      icone: <BookOpen className="w-7 h-7" />,
      corDesbloqueada: "bg-gradient-to-br from-purple-500 to-violet-600",
      corIcone: "text-white",
      desbloqueada: primeiraRevisao,
      progresso: primeiraRevisao ? 100 : 0,
      progressoLabel: primeiraRevisao ? "Concluída" : "0/1 revisões",
    },
  ];
}

export function Conquistas() {
  const [conquistas, setConquistas] = useState<Conquista[]>([]);

  useEffect(() => {
    setConquistas(calcularConquistas());
  }, []);

  const desbloqueadas = conquistas.filter((c) => c.desbloqueada).length;
  const total = conquistas.length;
  const progressoGeral = total > 0 ? Math.round((desbloqueadas / total) * 100) : 0;

  // Demo: simula ações para fins de demonstração do fluxo
  function simularCicloPomodoro() {
    const atual = parseInt(localStorage.getItem("pomodoroCompletedCycles") || "0", 10);
    const hoje = parseInt(localStorage.getItem("pomodoroTodayCycles") || "0", 10);
    localStorage.setItem("pomodoroCompletedCycles", String(atual + 1));
    localStorage.setItem("pomodoroTodayCycles", String(hoje + 1));
    const novas = calcularConquistas();
    const recemDesbloqueadas = novas.filter(
      (n) => n.desbloqueada && !conquistas.find((c) => c.id === n.id)?.desbloqueada
    );
    recemDesbloqueadas.forEach((c) =>
      toast.success(`🏅 Conquista desbloqueada: "${c.titulo}"!`)
    );
    setConquistas(novas);
  }

  function simularRevisao() {
    localStorage.setItem("firstRevisionCompleted", "true");
    const novas = calcularConquistas();
    const recemDesbloqueadas = novas.filter(
      (n) => n.desbloqueada && !conquistas.find((c) => c.id === n.id)?.desbloqueada
    );
    recemDesbloqueadas.forEach((c) =>
      toast.success(`🏅 Conquista desbloqueada: "${c.titulo}"!`)
    );
    setConquistas(novas);
  }

  function resetarDemo() {
    localStorage.removeItem("pomodoroCompletedCycles");
    localStorage.removeItem("pomodoroTodayCycles");
    localStorage.removeItem("firstRevisionCompleted");
    setConquistas(calcularConquistas());
    toast("Conquistas resetadas para demonstração.");
  }

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Conquistas</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {desbloqueadas} de {total} medalhas desbloqueadas
        </p>
      </div>

      {/* Progresso geral */}
      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
        <CardContent className="p-5">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <Trophy className="w-7 h-7" />
            </div>
            <div>
              <p className="text-sm opacity-90">Progresso geral</p>
              <p className="text-3xl font-bold">{progressoGeral}%</p>
            </div>
          </div>
          <Progress value={progressoGeral} className="bg-white/20 [&>div]:bg-white" />
          <p className="text-xs opacity-80 mt-2">
            {desbloqueadas}/{total} conquistas
          </p>
        </CardContent>
      </Card>

      {/* Lista de conquistas */}
      <div className="space-y-4">
        {conquistas.map((conquista) => (
          <Card
            key={conquista.id}
            className={`transition-all duration-500 ${
              conquista.desbloqueada
                ? "border-primary/30 shadow-md"
                : "opacity-60"
            }`}
          >
            <CardContent className="p-4">
              <div className="flex gap-4 items-start">
                {/* Ícone da medalha */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${
                    conquista.desbloqueada
                      ? conquista.corDesbloqueada
                      : "bg-muted"
                  } ${conquista.desbloqueada ? conquista.corIcone : "text-muted-foreground"}`}
                >
                  {conquista.icone}
                </div>

                {/* Conteúdo */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold">{conquista.titulo}</h4>
                    {conquista.desbloqueada ? (
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    ) : (
                      <Lock className="w-4 h-4 text-muted-foreground shrink-0" />
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                    {conquista.descricao}
                  </p>

                  <Badge
                    variant="secondary"
                    className="text-xs mb-3 font-normal"
                  >
                    {conquista.gatilho}
                  </Badge>

                  {/* Barra de progresso */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Progresso</span>
                      <span>{conquista.progressoLabel}</span>
                    </div>
                    <Progress
                      value={conquista.progresso}
                      className={
                        conquista.desbloqueada
                          ? "[&>div]:bg-green-500"
                          : ""
                      }
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Painel de demonstração */}
      <Card className="border-dashed border-amber-300 bg-amber-50/50 dark:bg-amber-950/20">
        <CardContent className="p-4">
          <p className="text-xs font-semibold text-amber-700 dark:text-amber-400 mb-3 uppercase tracking-wide">
            Simulador de Gatilhos (Demo)
          </p>
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start text-sm"
              onClick={simularCicloPomodoro}
            >
              <Flame className="w-4 h-4 mr-2 text-orange-500" />
              Simular +1 ciclo Pomodoro concluído
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full justify-start text-sm"
              onClick={simularRevisao}
            >
              <BookOpen className="w-4 h-4 mr-2 text-purple-500" />
              Simular conclusão de revisão
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="w-full text-xs text-muted-foreground"
              onClick={resetarDemo}
            >
              Resetar conquistas
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

