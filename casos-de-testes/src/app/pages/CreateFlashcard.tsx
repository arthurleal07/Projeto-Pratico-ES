import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Save } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { toast } from "sonner";

export function CreateFlashcard() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const subjects = [
    { value: "matematica", label: "Matemática" },
    { value: "portugues", label: "Português" },
    { value: "fisica", label: "Física" },
    { value: "quimica", label: "Química" },
    { value: "biologia", label: "Biologia" },
    { value: "historia", label: "História" },
    { value: "geografia", label: "Geografia" },
    { value: "ingles", label: "Inglês" },
  ];

  const handleSave = () => {
    if (!subject || !question || !answer) {
      toast.error("Preencha todos os campos");
      return;
    }

    // Simulate saving
    toast.success("Flashcard criado com sucesso! ✨");
    setTimeout(() => {
      navigate("/flashcards");
    }, 1000);
  };

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button
          onClick={() => navigate("/flashcards")}
          variant="ghost"
          size="sm"
          className="p-2"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-foreground">Criar Flashcard</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Adicione um novo card de estudo
          </p>
        </div>
      </div>

      {/* Form */}
      <Card>
        <CardContent className="p-6 space-y-5">
          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject">Matéria *</Label>
            <Select value={subject} onValueChange={setSubject}>
              <SelectTrigger id="subject">
                <SelectValue placeholder="Selecione uma matéria" />
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

          {/* Question */}
          <div className="space-y-2">
            <Label htmlFor="question">Pergunta *</Label>
            <Textarea
              id="question"
              placeholder="Digite a pergunta do flashcard..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={3}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              {question.length}/200 caracteres
            </p>
          </div>

          {/* Answer */}
          <div className="space-y-2">
            <Label htmlFor="answer">Resposta *</Label>
            <Textarea
              id="answer"
              placeholder="Digite a resposta do flashcard..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              rows={4}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              {answer.length}/500 caracteres
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Preview */}
      <div>
        <h3 className="text-sm font-medium mb-3">Pré-visualização</h3>
        <Card className="bg-accent/30">
          <CardContent className="p-6">
            {subject && (
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">
                {subjects.find((s) => s.value === subject)?.label}
              </span>
            )}
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Pergunta:</p>
                <p className="text-base">
                  {question || "Sua pergunta aparecerá aqui..."}
                </p>
              </div>
              <div className="border-t pt-4">
                <p className="text-xs text-muted-foreground mb-1">Resposta:</p>
                <p className="text-base">
                  {answer || "Sua resposta aparecerá aqui..."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3">
        <Button
          onClick={() => navigate("/flashcards")}
          variant="outline"
          className="h-12"
        >
          Cancelar
        </Button>
        <Button onClick={handleSave} className="h-12">
          <Save className="w-4 h-4 mr-2" />
          Salvar
        </Button>
      </div>
    </div>
  );
}
