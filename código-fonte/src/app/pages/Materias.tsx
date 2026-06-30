import { useState } from "react";
import { Trash2, BookOpen, AlertCircle, GraduationCap, Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { toast } from "sonner";

interface Disciplina {
  id: number;
  nome: string;
  cor: string;
  icone: string;
  quantidadeSessoes: number;
}

const mockDisciplinas: Disciplina[] = [
  { id: 1, nome: "Matemática", cor: "bg-blue-500", icone: "📐", quantidadeSessoes: 12 },
  { id: 2, nome: "Português", cor: "bg-purple-500", icone: "📝", quantidadeSessoes: 8 },
  { id: 3, nome: "Física", cor: "bg-orange-500", icone: "⚛️", quantidadeSessoes: 5 },
  { id: 4, nome: "Química", cor: "bg-green-500", icone: "🧪", quantidadeSessoes: 0 },
  { id: 5, nome: "Biologia", cor: "bg-teal-500", icone: "🧬", quantidadeSessoes: 3 },
  { id: 6, nome: "História", cor: "bg-amber-500", icone: "📚", quantidadeSessoes: 0 },
  { id: 7, nome: "Geografia", cor: "bg-cyan-500", icone: "🌍", quantidadeSessoes: 0 },
];

// Opções disponíveis para personalização de uma nova disciplina
const CORES_DISPONIVEIS = [
  "bg-blue-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-green-500",
  "bg-teal-500",
  "bg-amber-500",
  "bg-cyan-500",
  "bg-pink-500",
  "bg-red-500",
  "bg-indigo-500",
];

const ICONES_SUGERIDOS = ["📐", "📝", "⚛️", "🧪", "🧬", "📚", "🌍", "💻", "🎨", "🎵", "⚖️", "🏛️"];

export function Materias() {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>(mockDisciplinas);
  const [disciplinaParaExcluir, setDisciplinaParaExcluir] = useState<Disciplina | null>(null);
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);
  const [erroAberto, setErroAberto] = useState(false);

  // --- Estado da nova funcionalidade: criar disciplina (US04) ---
  const [novaDisciplinaAberta, setNovaDisciplinaAberta] = useState(false);
  const [novoNome, setNovoNome] = useState("");
  const [novaCor, setNovaCor] = useState(CORES_DISPONIVEIS[0]);
  const [novoIcone, setNovoIcone] = useState(ICONES_SUGERIDOS[0]);
  const [erroNome, setErroNome] = useState("");

  const handleClickExcluir = (disciplina: Disciplina) => {
    if (disciplina.quantidadeSessoes > 0) {
      setDisciplinaParaExcluir(disciplina);
      setErroAberto(true);
    } else {
      setDisciplinaParaExcluir(disciplina);
      setConfirmacaoAberta(true);
    }
  };

  const handleConfirmarExclusao = () => {
    if (!disciplinaParaExcluir) return;
    setDisciplinas((prev) => prev.filter((d) => d.id !== disciplinaParaExcluir.id));
    toast.success(`"${disciplinaParaExcluir.nome}" excluída com sucesso`);
    setConfirmacaoAberta(false);
    setDisciplinaParaExcluir(null);
  };

  const handleFecharErro = () => {
    setErroAberto(false);
    setDisciplinaParaExcluir(null);
  };

  // --- Handlers da nova funcionalidade: criar disciplina ---
  const handleAbrirNovaDisciplina = () => {
    setNovoNome("");
    setNovaCor(CORES_DISPONIVEIS[0]);
    setNovoIcone(ICONES_SUGERIDOS[0]);
    setErroNome("");
    setNovaDisciplinaAberta(true);
  };

  const handleCriarDisciplina = () => {
    const nomeNormalizado = novoNome.trim();

    if (!nomeNormalizado) {
      setErroNome("Informe o nome da disciplina.");
      return;
    }

    const nomeJaExiste = disciplinas.some(
      (d) => d.nome.toLowerCase() === nomeNormalizado.toLowerCase()
    );
    if (nomeJaExiste) {
      setErroNome("Já existe uma disciplina com esse nome.");
      return;
    }

    const novaDisciplina: Disciplina = {
      id: Date.now(), // TODO: substituir pelo id retornado pela API quando integrado ao backend
      nome: nomeNormalizado,
      cor: novaCor,
      icone: novoIcone,
      quantidadeSessoes: 0,
    };

    setDisciplinas((prev) => [...prev, novaDisciplina]);
    toast.success(`"${novaDisciplina.nome}" criada com sucesso`);
    setNovaDisciplinaAberta(false);
  };

  const totalSessoes = disciplinas.reduce((acc, d) => acc + d.quantidadeSessoes, 0);
  const comHistorico = disciplinas.filter((d) => d.quantidadeSessoes > 0).length;
  const semHistorico = disciplinas.filter((d) => d.quantidadeSessoes === 0).length;

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Gerenciar Disciplinas</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {disciplinas.length} {disciplinas.length === 1 ? "disciplina cadastrada" : "disciplinas cadastradas"}
          </p>
        </div>
        <Button size="sm" onClick={handleAbrirNovaDisciplina} className="shrink-0 gap-1">
          <Plus className="w-4 h-4" />
          Nova
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardContent className="p-3 text-center">
            <p className="text-xl font-bold text-primary">{disciplinas.length}</p>
            <p className="text-xs text-muted-foreground">Total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 text-center">
            <p className="text-xl font-bold text-amber-600">{comHistorico}</p>
            <p className="text-xs text-muted-foreground">Com histórico</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 text-center">
            <p className="text-xl font-bold text-green-600">{semHistorico}</p>
            <p className="text-xs text-muted-foreground">Removíveis</p>
          </CardContent>
        </Card>
      </div>

      {/* Info banner */}
      <div className="flex items-start gap-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
        <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-700 dark:text-amber-400">
          Disciplinas com sessões de estudo vinculadas não podem ser excluídas para preservar seu histórico.
        </p>
      </div>

      {/* List */}
      <div className="space-y-3">
        {disciplinas.length > 0 ? (
          disciplinas.map((disciplina) => {
            const temHistorico = disciplina.quantidadeSessoes > 0;
            return (
              <Card key={disciplina.id} className="transition-shadow hover:shadow-md">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className={`${disciplina.cor} w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0`}>
                      {disciplina.icone}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold truncate">{disciplina.nome}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        {temHistorico ? (
                          <Badge variant="secondary" className="text-xs text-amber-700 bg-amber-100 dark:bg-amber-900/40 dark:text-amber-400 border-0">
                            {disciplina.quantidadeSessoes} {disciplina.quantidadeSessoes === 1 ? "sessão" : "sessões"}
                          </Badge>
                        ) : (
                          <Badge variant="secondary" className="text-xs text-green-700 bg-green-100 dark:bg-green-900/40 dark:text-green-400 border-0">
                            Sem histórico
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Delete button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleClickExcluir(disciplina)}
                      className={`p-2 shrink-0 ${
                        temHistorico
                          ? "text-muted-foreground/40 cursor-not-allowed"
                          : "text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                      }`}
                      title={temHistorico ? "Não é possível excluir: possui histórico vinculado" : "Excluir disciplina"}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })
        ) : (
          <Card className="border-dashed">
            <CardContent className="p-12 text-center">
              <div className="bg-muted w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-2">Nenhuma disciplina cadastrada</p>
              <p className="text-sm text-muted-foreground mb-4">
                Adicione disciplinas para começar a estudar
              </p>
              <Button size="sm" onClick={handleAbrirNovaDisciplina} className="gap-1">
                <Plus className="w-4 h-4" />
                Nova disciplina
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Confirmation dialog */}
      <Dialog open={confirmacaoAberta} onOpenChange={setConfirmacaoAberta}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Excluir disciplina</DialogTitle>
          </DialogHeader>
          <div className="py-2">
            <p className="text-sm text-muted-foreground">
              Tem certeza que deseja excluir{" "}
              <span className="font-semibold text-foreground">
                "{disciplinaParaExcluir?.nome}"
              </span>
              ? Essa ação não pode ser desfeita.
            </p>
          </div>
          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                setConfirmacaoAberta(false);
                setDisciplinaParaExcluir(null);
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="destructive"
              className="flex-1"
              onClick={handleConfirmarExclusao}
            >
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Error dialog — has history */}
      <Dialog open={erroAberto} onOpenChange={handleFecharErro}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-amber-600">
              <AlertCircle className="w-5 h-5" />
              Não é possível excluir
            </DialogTitle>
          </DialogHeader>
          <div className="py-2 space-y-3">
            <p className="text-sm text-muted-foreground">
              A disciplina{" "}
              <span className="font-semibold text-foreground">
                "{disciplinaParaExcluir?.nome}"
              </span>{" "}
              possui{" "}
              <span className="font-semibold text-amber-600">
                {disciplinaParaExcluir?.quantidadeSessoes}{" "}
                {disciplinaParaExcluir?.quantidadeSessoes === 1 ? "sessão" : "sessões"}
              </span>{" "}
              de estudo vinculadas ao seu histórico.
            </p>
            <p className="text-sm text-muted-foreground">
              Para excluir esta disciplina, primeiro remova todas as sessões associadas a ela.
            </p>
          </div>
          <DialogFooter>
            <Button className="w-full" onClick={handleFecharErro}>
              Entendi
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* New discipline dialog — US04 */}
      <Dialog open={novaDisciplinaAberta} onOpenChange={setNovaDisciplinaAberta}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Nova disciplina</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            {/* Nome */}
            <div className="space-y-1.5">
              <Label htmlFor="nome-disciplina">Nome</Label>
              <Input
                id="nome-disciplina"
                placeholder="Ex: Matemática"
                value={novoNome}
                onChange={(e) => {
                  setNovoNome(e.target.value);
                  if (erroNome) setErroNome("");
                }}
              />
              {erroNome && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  {erroNome}
                </p>
              )}
            </div>

            {/* Ícone */}
            <div className="space-y-1.5">
              <Label>Ícone</Label>
              <div className="flex flex-wrap gap-2">
                {ICONES_SUGERIDOS.map((icone) => (
                  <button
                    key={icone}
                    type="button"
                    onClick={() => setNovoIcone(icone)}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg border transition-colors ${
                      novoIcone === icone
                        ? "border-primary bg-primary/10"
                        : "border-border hover:bg-muted"
                    }`}
                  >
                    {icone}
                  </button>
                ))}
              </div>
            </div>

            {/* Cor */}
            <div className="space-y-1.5">
              <Label>Cor</Label>
              <div className="flex flex-wrap gap-2">
                {CORES_DISPONIVEIS.map((cor) => (
                  <button
                    key={cor}
                    type="button"
                    onClick={() => setNovaCor(cor)}
                    className={`${cor} w-8 h-8 rounded-full transition-transform ${
                      novaCor === cor ? "ring-2 ring-offset-2 ring-foreground scale-110" : ""
                    }`}
                    aria-label={cor}
                  />
                ))}
              </div>
            </div>

            {/* Pré-visualização */}
            <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-3">
              <div className={`${novaCor} w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0`}>
                {novoIcone}
              </div>
              <p className="text-sm text-muted-foreground truncate">
                {novoNome.trim() || "Pré-visualização da disciplina"}
              </p>
            </div>
          </div>
          <DialogFooter className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setNovaDisciplinaAberta(false)}
            >
              Cancelar
            </Button>
            <Button className="flex-1" onClick={handleCriarDisciplina}>
              Criar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
