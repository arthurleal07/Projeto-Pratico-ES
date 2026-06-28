import { useState } from "react";
import { Plus, Clock, Book, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const mockSchedule = {
  monday: [
    { id: 1, subject: "Matemática", time: "09:00", duration: "2h", color: "bg-blue-500" },
    { id: 2, subject: "Física", time: "14:00", duration: "1h 30min", color: "bg-purple-500" },
  ],
  tuesday: [
    { id: 3, subject: "Química", time: "10:00", duration: "2h", color: "bg-green-500" },
  ],
  wednesday: [
    { id: 4, subject: "História", time: "09:00", duration: "1h", color: "bg-orange-500" },
    { id: 5, subject: "Português", time: "15:00", duration: "2h", color: "bg-pink-500" },
  ],
  thursday: [
    { id: 6, subject: "Matemática", time: "10:00", duration: "2h", color: "bg-blue-500" },
  ],
  friday: [
    { id: 7, subject: "Inglês", time: "09:00", duration: "1h 30min", color: "bg-indigo-500" },
    { id: 8, subject: "Biologia", time: "14:00", duration: "2h", color: "bg-teal-500" },
  ],
  saturday: [],
  sunday: [],
};

export function Agenda() {
  const [selectedDay, setSelectedDay] = useState(1); // Monday

  const getDaySchedule = (dayIndex: number) => {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return mockSchedule[days[dayIndex] as keyof typeof mockSchedule] || [];
  };

  const currentDaySchedule = getDaySchedule(selectedDay);

  // Get current date info
  const today = new Date();
  const currentDayOfWeek = today.getDay();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDayOfWeek);

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Agenda Semanal</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Organize seus estudos
          </p>
        </div>
        <Button size="sm">
          <Plus className="w-4 h-4 mr-1" />
          Adicionar
        </Button>
      </div>

      {/* Week Selector */}
      <div className="grid grid-cols-7 gap-2">
        {weekDays.map((day, index) => {
          const date = new Date(startOfWeek);
          date.setDate(startOfWeek.getDate() + index);
          const isSelected = selectedDay === index;
          const isToday = currentDayOfWeek === index;

          return (
            <button
              key={day}
              onClick={() => setSelectedDay(index)}
              className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${
                isSelected
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card hover:bg-secondary"
              }`}
            >
              <span className="text-xs opacity-80">{day}</span>
              <span className="text-lg font-bold">{date.getDate()}</span>
              {isToday && !isSelected && (
                <div className="w-1 h-1 bg-primary rounded-full"></div>
              )}
            </button>
          );
        })}
      </div>

      {/* Daily Summary */}
      <Card className="bg-gradient-to-br from-primary/5 to-accent/10">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Book className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sessões planejadas</p>
                <p className="text-2xl font-bold">{currentDaySchedule.length}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Tempo total</p>
              <p className="text-lg font-semibold text-primary">
                {currentDaySchedule.length > 0 ? "5h 30min" : "0h"}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Schedule List */}
      <div className="space-y-3">
        {currentDaySchedule.length > 0 ? (
          currentDaySchedule.map((session) => (
            <Card key={session.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className={`${session.color} text-white p-3 rounded-xl`}>
                    <Book className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{session.subject}</h4>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {session.time}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {session.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className="border-dashed">
            <CardContent className="p-12 text-center">
              <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-2">
                Nenhuma sessão planejada
              </p>
              <p className="text-sm text-muted-foreground">
                Adicione sessões de estudo para este dia
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Weekly Stats */}
      <Card className="bg-accent/50 border-accent">
        <CardContent className="p-4">
          <h4 className="font-semibold mb-3">Resumo da Semana</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-xs text-muted-foreground">Sessões planejadas</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-green-600">18h</p>
              <p className="text-xs text-muted-foreground">Tempo total</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}