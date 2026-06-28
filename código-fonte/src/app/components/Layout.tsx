import { Outlet, useLocation, useNavigate } from "react-router";
import { Home, Clock, CreditCard, Calendar, BookOpen, Settings, } from "lucide-react";

export function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
  { icon: Home, label: "Início", path: "/home" },
  { icon: BookOpen, label: "Matérias", path: "/materias" },
  { icon: Clock, label: "Pomodoro", path: "/pomodoro" },
  { icon: CreditCard, label: "Cards", path: "/flashcards" },
  { icon: Calendar, label: "Agenda", path: "/agenda" },
];

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-primary">Foca & Revisa</h1>
        <button
          onClick={() => navigate("/settings")}
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-card border-t border-border px-2 py-2 grid grid-cols-4 gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
