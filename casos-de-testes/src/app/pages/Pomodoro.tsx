import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Coffee } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

export function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [sessions, setSessions] = useState(0);
  const [subject, setSubject] = useState("matematica");

  const totalSeconds = isBreak ? 5 * 60 : 25 * 60;
  const currentSeconds = minutes * 60 + seconds;
  const progress = ((totalSeconds - currentSeconds) / totalSeconds) * 100;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            // Timer finished
            setIsActive(false);
            if (!isBreak) {
              setSessions((prev) => prev + 1);
              setIsBreak(true);
              setMinutes(5);
            } else {
              setIsBreak(false);
              setMinutes(25);
            }
          } else {
            setMinutes((m) => m - 1);
            setSeconds(59);
          }
        } else {
          setSeconds((s) => s - 1);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, isBreak]);

  const handleReset = () => {
    setIsActive(false);
    setMinutes(isBreak ? 5 : 25);
    setSeconds(0);
  };

  const subjects = [
    { value: "matematica", label: "Matemática" },
    { value: "portugues", label: "Português" },
    { value: "fisica", label: "Física" },
    { value: "quimica", label: "Química" },
    { value: "biologia", label: "Biologia" },
    { value: "historia", label: "História" },
  ];

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-foreground mb-1">
          {isBreak ? "Intervalo" : "Sessão de Estudo"}
        </h2>
        <p className="text-sm text-muted-foreground">
          {isBreak ? "Descanse um pouco 😌" : "Mantenha o foco! 🎯"}
        </p>
      </div>

      {/* Subject Selection */}
      {!isBreak && (
        <Card>
          <CardContent className="p-4">
            <label className="text-sm text-muted-foreground mb-2 block">
              Matéria
            </label>
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {subjects.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      )}

      {/* Timer Display */}
      <Card className={`${isBreak ? "bg-green-50 dark:bg-green-950/20" : ""} border-2`}>
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <div className="text-7xl font-bold tabular-nums tracking-tight">
              {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
            </div>
          </div>

          {/* Progress */}
          <Progress value={progress} className="h-2 mb-6" />

          {/* Controls */}
          <div className="flex gap-3 justify-center">
            <Button
              onClick={() => setIsActive(!isActive)}
              size="lg"
              className="flex-1 h-14"
            >
              {isActive ? (
                <>
                  <Pause className="w-5 h-5 mr-2" />
                  Pausar
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 mr-2" />
                  Iniciar
                </>
              )}
            </Button>

            <Button
              onClick={handleReset}
              size="lg"
              variant="outline"
              className="h-14"
            >
              <RotateCcw className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <Coffee className="w-6 h-6 text-primary" />
            </div>
            <p className="text-2xl font-bold">{sessions}</p>
            <p className="text-xs text-muted-foreground">Sessões concluídas</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 text-center">
            <div className="bg-green-500/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl">🔥</span>
            </div>
            <p className="text-2xl font-bold">7</p>
            <p className="text-xs text-muted-foreground">Dias consecutivos</p>
          </CardContent>
        </Card>
      </div>

      {/* Tips */}
      <Card className="bg-accent/50 border-accent">
        <CardContent className="p-4">
          <p className="text-sm text-accent-foreground">
            💡 <strong>Dica:</strong> Durante o Pomodoro, evite distrações e foque
            apenas na tarefa escolhida.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
