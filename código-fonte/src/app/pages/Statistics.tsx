import { Clock, TrendingUp, Award, Calendar as CalendarIcon, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts";

const weeklyData = [
  { day: "Seg", hours: 3.5 },
  { day: "Ter", hours: 4.2 },
  { day: "Qua", hours: 2.8 },
  { day: "Qui", hours: 5.1 },
  { day: "Sex", hours: 3.9 },
  { day: "Sáb", hours: 6.0 },
  { day: "Dom", hours: 2.5 },
];

const monthlyData = [
  { week: "Sem 1", hours: 18 },
  { week: "Sem 2", hours: 22 },
  { week: "Sem 3", hours: 25 },
  { week: "Sem 4", hours: 28 },
];

const subjectData = [
  { subject: "Matemática", hours: 12, color: "#3b82f6" },
  { subject: "Física", hours: 8, color: "#8b5cf6" },
  { subject: "Química", hours: 10, color: "#10b981" },
  { subject: "História", hours: 6, color: "#f59e0b" },
  { subject: "Português", hours: 9, color: "#ec4899" },
];

export function Statistics() {
  const totalHours = 45;
  const totalSessions = 32;
  const reviewRate = 87;
  const currentStreak = 7;

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Estatísticas</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Acompanhe seu desempenho
        </p>
      </div>

      {/* Main Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalHours}h</p>
                <p className="text-xs opacity-90">Tempo total</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{reviewRate}%</p>
                <p className="text-xs opacity-90">Taxa revisão</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalSessions}</p>
                <p className="text-xs opacity-90">Sessões</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold">{currentStreak}</p>
                <p className="text-xs opacity-90">Dias seguidos</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Horas de Estudo - Semana</CardTitle>
        </CardHeader>
        <CardContent className="pb-4">
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="day" fontSize={12} stroke="#64748b" />
              <YAxis fontSize={12} stroke="#64748b" />
              <Tooltip />
              <Bar dataKey="hours" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Monthly Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Tendência Mensal</CardTitle>
        </CardHeader>
        <CardContent className="pb-4">
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="week" fontSize={12} stroke="#64748b" />
              <YAxis fontSize={12} stroke="#64748b" />
              <Tooltip />
              <Line type="monotone" dataKey="hours" stroke="#10b981" strokeWidth={3} dot={{ fill: "#10b981", r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Subject Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Tempo por Matéria</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {subjectData.map((item) => {
            const maxHours = Math.max(...subjectData.map((d) => d.hours));
            const percentage = (item.hours / maxHours) * 100;

            return (
              <div key={item.subject} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{item.subject}</span>
                  <span className="text-muted-foreground">{item.hours}h</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Goals */}
      <Card className="bg-accent/50 border-accent">
        <CardHeader>
          <CardTitle className="text-base">Metas do Mês</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Tempo de estudo</span>
              <span className="font-medium">180h / 200h</span>
            </div>
            <Progress value={90} />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Flashcards revisados</span>
              <span className="font-medium">450 / 500</span>
            </div>
            <Progress value={90} className="[&>div]:bg-green-500" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span>Sessões Pomodoro</span>
              <span className="font-medium">120 / 150</span>
            </div>
            <Progress value={80} className="[&>div]:bg-purple-500" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
