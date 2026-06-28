import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Moon, Sun, Bell, Type, LogOut, User, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Slider } from "../components/ui/slider";
import { Separator } from "../components/ui/separator";
import { toast } from "sonner";

export function Settings() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [fontSize, setFontSize] = useState("medium");

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    toast.success(isDark ? "Tema claro ativado" : "Tema escuro ativado");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("Logout realizado com sucesso");
    navigate("/auth");
  };

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button
          onClick={() => navigate("/home")}
          variant="ghost"
          size="sm"
          className="p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Configurações</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Personalize sua experiência
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 p-4 rounded-full">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">Estudante</h3>
              <p className="text-sm text-muted-foreground">estudante@email.com</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Appearance */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Aparência</h3>

        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {isDark ? (
                  <Moon className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <Sun className="w-5 h-5 text-muted-foreground" />
                )}
                <div>
                  <Label>Tema Escuro</Label>
                  <p className="text-xs text-muted-foreground">
                    Reduza o brilho da tela
                  </p>
                </div>
              </div>
              <Switch checked={isDark} onCheckedChange={handleThemeToggle} />
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Type className="w-5 h-5 text-muted-foreground" />
                <Label>Tamanho da Fonte</Label>
              </div>
              <Select value={fontSize} onValueChange={setFontSize}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Pequeno</SelectItem>
                  <SelectItem value="medium">Médio</SelectItem>
                  <SelectItem value="large">Grande</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pomodoro Settings */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Pomodoro</h3>

        <Card>
          <CardContent className="p-4 space-y-5">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <Label>Tempo de Foco</Label>
                </div>
                <span className="text-sm font-medium">{pomodoroTime} min</span>
              </div>
              <Slider
                value={[pomodoroTime]}
                onValueChange={(value) => setPomodoroTime(value[0])}
                min={15}
                max={60}
                step={5}
              />
            </div>

            <Separator />

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-muted-foreground" />
                  <Label>Tempo de Pausa</Label>
                </div>
                <span className="text-sm font-medium">{breakTime} min</span>
              </div>
              <Slider
                value={[breakTime]}
                onValueChange={(value) => setBreakTime(value[0])}
                min={5}
                max={20}
                step={5}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Notifications */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold">Notificações</h3>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-muted-foreground" />
                <div>
                  <Label>Ativar Notificações</Label>
                  <p className="text-xs text-muted-foreground">
                    Lembretes e alertas
                  </p>
                </div>
              </div>
              <Switch
                checked={notifications}
                onCheckedChange={setNotifications}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* About */}
      <Card className="bg-accent/50 border-accent">
        <CardContent className="p-4">
          <h4 className="font-semibold mb-2">Sobre o App</h4>
          <p className="text-sm text-muted-foreground mb-1">
            Foca & Revisa v1.0.0
          </p>
          <p className="text-sm text-muted-foreground">
            Seu parceiro de estudos para melhorar foco e produtividade
          </p>
        </CardContent>
      </Card>

      {/* Logout Button */}
      <Button
        onClick={handleLogout}
        variant="outline"
        className="w-full h-12 text-destructive border-destructive hover:bg-destructive/10"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Sair da Conta
      </Button>
    </div>
  );
}
