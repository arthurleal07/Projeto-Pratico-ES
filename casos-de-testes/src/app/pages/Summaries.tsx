import { useState } from "react";
import { Plus, Search, FileText, Calendar as CalendarIcon } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { toast } from "sonner";

const mockSummaries = [
  {
    id: 1,
    title: "Equações do 2º Grau",
    subject: "Matemática",
    preview: "A equação do segundo grau é representada por ax² + bx + c = 0...",
    date: "2026-05-28",
    color: "bg-blue-500",
  },
  {
    id: 2,
    title: "Leis de Newton",
    subject: "Física",
    preview: "As três leis de Newton fundamentam a mecânica clássica...",
    date: "2026-05-27",
    color: "bg-purple-500",
  },
  {
    id: 3,
    title: "Tabela Periódica",
    subject: "Química",
    preview: "A tabela periódica organiza os elementos químicos...",
    date: "2026-05-26",
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Primeira Guerra Mundial",
    subject: "História",
    preview: "A Primeira Guerra Mundial (1914-1918) foi um conflito...",
    date: "2026-05-25",
    color: "bg-orange-500",
  },
];

export function Summaries() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [newContent, setNewContent] = useState("");

  const subjects = [
    { value: "matematica", label: "Matemática" },
    { value: "portugues", label: "Português" },
    { value: "fisica", label: "Física" },
    { value: "quimica", label: "Química" },
    { value: "biologia", label: "Biologia" },
    { value: "historia", label: "História" },
  ];

  const filteredSummaries = mockSummaries.filter(
    (summary) =>
      summary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      summary.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreate = () => {
    if (!newTitle || !newSubject || !newContent) {
      toast.error("Preencha todos os campos");
      return;
    }

    toast.success("Resumo criado com sucesso! ✨");
    setIsCreateOpen(false);
    setNewTitle("");
    setNewSubject("");
    setNewContent("");
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
  };

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Resumos</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {mockSummaries.length} resumos salvos
          </p>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Criar
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Criar Resumo</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título *</Label>
                <Input
                  id="title"
                  placeholder="Ex: Fórmulas de Matemática"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject-create">Matéria *</Label>
                <Select value={newSubject} onValueChange={setNewSubject}>
                  <SelectTrigger id="subject-create">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {subjects.map((s) => (
                      <SelectItem key={s.value} value={s.value}>
                        {s.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Conteúdo *</Label>
                <Textarea
                  id="content"
                  placeholder="Digite seu resumo aqui..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsCreateOpen(false)}
                >
                  Cancelar
                </Button>
                <Button className="flex-1" onClick={handleCreate}>
                  Salvar
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Buscar resumos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-3">
        <Card>
          <CardContent className="p-3 text-center">
            <p className="text-xl font-bold text-primary">12</p>
            <p className="text-xs text-muted-foreground">Total</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 text-center">
            <p className="text-xl font-bold text-green-600">6</p>
            <p className="text-xs text-muted-foreground">Matérias</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-3 text-center">
            <p className="text-xl font-bold text-purple-600">3</p>
            <p className="text-xs text-muted-foreground">Esta semana</p>
          </CardContent>
        </Card>
      </div>

      {/* Summaries List */}
      <div className="space-y-3">
        {filteredSummaries.length > 0 ? (
          filteredSummaries.map((summary) => (
            <Card key={summary.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className={`${summary.color} text-white p-3 rounded-xl h-fit`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="font-semibold truncate">{summary.title}</h4>
                      <Badge variant="secondary" className="text-xs shrink-0">
                        {summary.subject}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                      {summary.preview}
                    </p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <CalendarIcon className="w-3 h-3" />
                      {formatDate(summary.date)}
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
                <FileText className="w-8 h-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground mb-2">Nenhum resumo encontrado</p>
              <p className="text-sm text-muted-foreground">
                Tente outra busca ou crie um novo resumo
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
