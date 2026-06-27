import { useNavigate } from "react-router";
import { Clock, CreditCard, Calendar, FileText, BarChart3, Timer, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

export function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || '{"name":"Estudante"}');
  const currentHour = new Date().getHours();
  const greeting =
    currentHour < 12 ? "Bom dia" : currentHour < 18 ? "Boa tarde" : "Boa noite";

  const studyTime = 135; // minutes
  const dailyGoal = 240; // minutes
  const progress = Math.min((studyTime / dailyGoal) * 100, 100);

  const quickActions = [
    { icon: CreditCard, label: "Flashcards", path: "/flashcards", color: "bg-blue-500" },
    { icon: Calendar, label: "Agenda", path: "/agenda", color: "bg-green-500" },
    { icon: FileText, label: "Resumos", path: "/summaries", color: "bg-purple-500" },
    { icon: BarChart3, label: "Estatísticas", path: "/statistics", color: "bg-orange-500" },
  ];

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Greeting */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">
          {greeting}, {user.name}! 👋
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Continue seu progresso de hoje
        </p>
      </div>

      {/* Study Time Card */}
      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm opacity-90 mb-1">Tempo estudado hoje</p>
              <p className="text-3xl font-bold">
                {Math.floor(studyTime / 60)}h {studyTime % 60}min
              </p>
            </div>
            <div className="bg-white/20 p-3 rounded-full">
              <Timer className="w-8 h-8" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm opacity-90">
              <span>Meta diária</span>
              <span>{Math.floor(dailyGoal / 60)}h</span>
            </div>
            <Progress value={progress} className="bg-white/20" />
          </div>
        </CardContent>
      </Card>

      {/* Start Pomodoro Button */}
      <Button
        onClick={() => navigate("/pomodoro")}
        className="w-full h-14 text-lg"
        size="lg"
      >
        <Clock className="w-5 h-5 mr-2" />
        Iniciar Pomodoro
      </Button>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Timer className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-xs text-muted-foreground">Sessões hoje</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-green-500/10 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-2xl font-bold">87%</p>
                <p className="text-xs text-muted-foreground">Taxa revisão</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Acesso Rápido</h3>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Card
                key={action.path}
                className="cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => navigate(action.path)}
              >
                <CardContent className="p-5 flex flex-col items-center gap-3">
                  <div className={`${action.color} text-white p-3 rounded-xl`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-center">{action.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
