import { useState } from "react";
import {
  Download,
  FileText,
  Table,
  Clock,
  CreditCard,
  BookOpen,
  Calendar,
  BarChart3,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { toast } from "sonner";

type Formato = "csv" | "pdf";
type Periodo = "semana" | "mes" | "trimestre" | "tudo";

interface Categoria {
  id: string;
  label: string;
  icone: React.ReactNode;
  registros: number;
  cor: string;
}

const categorias: Categoria[] = [
  {
    id: "pomodoro",
    label: "Sessões Pomodoro",
    icone: <Clock className="w-4 h-4" />,
    registros: 32,
    cor: "text-blue-500",
  },
  {
    id: "flashcards",
    label: "Flashcards",
    icone: <CreditCard className="w-4 h-4" />,
    registros: 148,
    cor: "text-purple-500",
  },
  {
    id: "resumos",
    label: "Resumos",
    icone: <BookOpen className="w-4 h-4" />,
    registros: 12,
    cor: "text-green-500",
  },
  {
    id: "agenda",
    label: "Agenda",
    icone: <Calendar className="w-4 h-4" />,
    registros: 24,
    cor: "text-orange-500",
  },
  {
    id: "estatisticas",
    label: "Estatísticas",
    icone: <BarChart3 className="w-4 h-4" />,
    registros: 7,
    cor: "text-red-500",
  },
];

const periodos: { id: Periodo; label: string }[] = [
  { id: "semana", label: "Esta semana" },
  { id: "mes", label: "Este mês" },
  { id: "trimestre", label: "Últimos 3 meses" },
  { id: "tudo", label: "Tudo" },
];

function gerarCSV(selecionadas: Set<string>, periodo: Periodo): string {
  const linhas = [
    ["Categoria", "Data", "Descrição", "Duração/Qtd", "Status"],
    ["Pomodoro", "2026-06-28", "Matemática - Álgebra", "25min", "Completo"],
    ["Pomodoro", "2026-06-28", "Física - Cinemática", "25min", "Completo"],
    ["Flashcard", "2026-06-27", "Fórmula de Bhaskara", "—", "Correto"],
    ["Flashcard", "2026-06-27", "Leis de Newton", "—", "Revisar"],
    ["Resumo", "2026-06-26", "Tabela Periódica", "—", "Salvo"],
    ["Agenda", "2026-06-25", "Simulado ENEM", "2h", "Concluído"],
  ]
    .filter(([cat]) =>
      selecionadas.has(
        cat === "Pomodoro"
          ? "pomodoro"
          : cat === "Flashcard"
          ? "flashcards"
          : cat === "Resumo"
          ? "resumos"
          : cat === "Agenda"
          ? "agenda"
          : "estatisticas"
      )
    );

  return [linhas[0], ...linhas.slice(1)].map((r) => r.join(",")).join("\n");
}

function baixarArquivo(conteudo: string, nomeArquivo: string, tipo: string) {
  const blob = new Blob([conteudo], { type: tipo });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = nomeArquivo;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function ExportData() {
  const [formato, setFormato] = useState<Formato>("csv");
  const [periodo, setPeriodo] = useState<Periodo>("mes");
  const [selecionadas, setSelecionadas] = useState<Set<string>>(
    new Set(categorias.map((c) => c.id))
  );
  const [exportando, setExportando] = useState(false);

  function toggleCategoria(id: string) {
    setSelecionadas((prev) => {
      const novo = new Set(prev);
      if (novo.has(id)) {
        if (novo.size > 1) novo.delete(id);
        else toast.error("Selecione ao menos uma categoria.");
      } else {
        novo.add(id);
      }
      return novo;
    });
  }

  function toggleTodas() {
    if (selecionadas.size === categorias.length) {
      setSelecionadas(new Set([categorias[0].id]));
    } else {
      setSelecionadas(new Set(categorias.map((c) => c.id)));
    }
  }

  const totalRegistros = categorias
    .filter((c) => selecionadas.has(c.id))
    .reduce((acc, c) => acc + c.registros, 0);

  async function handleExportar() {
    setExportando(true);
    await new Promise((r) => setTimeout(r, 1200));

    const data = new Date().toISOString().slice(0, 10);
    const nome = `foca-revisa_${periodo}_${data}`;

    if (formato === "csv") {
      const csv = gerarCSV(selecionadas, periodo);
      baixarArquivo(csv, `${nome}.csv`, "text/csv;charset=utf-8;");
      toast.success("CSV exportado com sucesso! Verifique seus downloads.");
    } else {
      const conteudo = `FOCA & REVISA — Relatório de Dados\nPeríodo: ${periodo}\nData: ${data}\n\n${gerarCSV(selecionadas, periodo)}`;
      baixarArquivo(conteudo, `${nome}.txt`, "text/plain;charset=utf-8;");
      toast.success("PDF gerado com sucesso! (simulado como .txt nesta versão)");
    }

    setExportando(false);
  }

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Exportar Dados</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Baixe seu histórico para análise externa
        </p>
      </div>

      {/* Formato */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Formato
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {(
            [
              { id: "csv" as Formato, label: "CSV", sub: "Excel, Sheets", icone: <Table className="w-5 h-5" /> },
              { id: "pdf" as Formato, label: "PDF", sub: "Relatório visual", icone: <FileText className="w-5 h-5" /> },
            ] as const
          ).map((f) => (
            <button
              key={f.id}
              onClick={() => setFormato(f.id)}
              className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                formato === f.id
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40"
              }`}
            >
              {formato === f.id && (
                <CheckCircle2 className="w-4 h-4 absolute top-2 right-2 text-primary" />
              )}
              {f.icone}
              <div className="text-center">
                <p className="font-semibold text-sm">{f.label}</p>
                <p className="text-xs opacity-70">{f.sub}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Período */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Período
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {periodos.map((p) => (
            <button
              key={p.id}
              onClick={() => setPeriodo(p.id)}
              className={`py-2.5 px-3 rounded-lg text-sm font-medium border transition-all ${
                periodo === p.id
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border text-foreground hover:bg-secondary"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categorias */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Categorias
          </h3>
          <button
            onClick={toggleTodas}
            className="text-xs text-primary font-medium hover:underline"
          >
            {selecionadas.size === categorias.length
              ? "Desmarcar todas"
              : "Selecionar todas"}
          </button>
        </div>

        <Card>
          <CardContent className="p-0 divide-y divide-border">
            {categorias.map((cat) => {
              const ativa = selecionadas.has(cat.id);
              return (
                <button
                  key={cat.id}
                  onClick={() => toggleCategoria(cat.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 transition-colors hover:bg-secondary/50 first:rounded-t-lg last:rounded-b-lg ${
                    ativa ? "" : "opacity-50"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      ativa ? "bg-primary/10" : "bg-muted"
                    } ${ativa ? cat.cor : "text-muted-foreground"}`}
                  >
                    {cat.icone}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-medium">{cat.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {cat.registros} registros
                    </p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                      ativa
                        ? "bg-primary border-primary"
                        : "border-muted-foreground"
                    }`}
                  >
                    {ativa && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Resumo da exportação */}
      <Card className="bg-accent/40 border-accent">
        <CardContent className="p-4">
          <h4 className="text-sm font-semibold mb-3">Resumo da exportação</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Formato</span>
              <Badge variant="secondary" className="uppercase text-xs">
                {formato}
              </Badge>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Período</span>
              <span className="font-medium">
                {periodos.find((p) => p.id === periodo)?.label}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Categorias</span>
              <span className="font-medium">
                {selecionadas.size} de {categorias.length}
              </span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold">
              <span>Total de registros</span>
              <span className="text-primary">{totalRegistros}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Botão exportar */}
      <Button
        onClick={handleExportar}
        disabled={exportando}
        className="w-full h-12 text-base"
        size="lg"
      >
        {exportando ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Gerando arquivo…
          </>
        ) : (
          <>
            <Download className="w-5 h-5 mr-2" />
            Exportar {formato.toUpperCase()}
          </>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground px-4">
        Os dados exportados contêm apenas seu histórico pessoal local e não são enviados a nenhum servidor.
      </p>
    </div>
  );
}
