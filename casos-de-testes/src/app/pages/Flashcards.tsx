import { useState } from "react";
import { useNavigate } from "react-router";
import { Plus, RotateCcw, CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";

const mockFlashcards = [
  {
    id: 1,
    subject: "Matemática",
    question: "Qual é a fórmula de Bhaskara?",
    answer: "x = (-b ± √(b² - 4ac)) / 2a",
  },
  {
    id: 2,
    subject: "Física",
    question: "O que é a Primeira Lei de Newton?",
    answer: "Um corpo em repouso tende a permanecer em repouso, e um corpo em movimento tende a permanecer em movimento, a menos que uma força externa atue sobre ele.",
  },
  {
    id: 3,
    subject: "Química",
    question: "Qual a fórmula da água?",
    answer: "H₂O - Duas moléculas de hidrogênio e uma de oxigênio",
  },
  {
    id: 4,
    subject: "História",
    question: "Em que ano foi proclamada a República no Brasil?",
    answer: "1889 - Proclamada pelo Marechal Deodoro da Fonseca",
  },
];

export function Flashcards() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const currentCard = mockFlashcards[currentIndex];
  const progress = ((currentIndex + 1) / mockFlashcards.length) * 100;

  const handleNext = () => {
    setShowAnswer(false);
    if (currentIndex < mockFlashcards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
      setCorrect(0);
      setIncorrect(0);
    }
  };

  const handleCorrect = () => {
    setCorrect((prev) => prev + 1);
    handleNext();
  };

  const handleIncorrect = () => {
    setIncorrect((prev) => prev + 1);
    handleNext();
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setCorrect(0);
    setIncorrect(0);
  };

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Flashcards</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Revise seus estudos
          </p>
        </div>
        <Button onClick={() => navigate("/flashcards/create")} size="sm">
          <Plus className="w-4 h-4 mr-1" />
          Criar
        </Button>
      </div>

      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            Progresso: {currentIndex + 1}/{mockFlashcards.length}
          </span>
          <span className="text-primary font-medium">
            {Math.round(progress)}%
          </span>
        </div>
        <Progress value={progress} />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
          <CardContent className="p-4 flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold text-green-700 dark:text-green-400">
                {correct}
              </p>
              <p className="text-xs text-green-600 dark:text-green-500">Acertos</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900">
          <CardContent className="p-4 flex items-center gap-3">
            <XCircle className="w-8 h-8 text-red-600" />
            <div>
              <p className="text-2xl font-bold text-red-700 dark:text-red-400">
                {incorrect}
              </p>
              <p className="text-xs text-red-600 dark:text-red-500">Erros</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Flashcard */}
      <Card className="min-h-[300px] cursor-pointer" onClick={() => setShowAnswer(!showAnswer)}>
        <CardContent className="p-6 h-full flex flex-col">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
              {currentCard.subject}
            </span>
          </div>

          <div className="flex-1 flex items-center justify-center text-center">
            {!showAnswer ? (
              <div>
                <p className="text-lg font-medium mb-4">{currentCard.question}</p>
                <Button variant="outline" size="sm">
                  Mostrar resposta
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">{currentCard.question}</p>
                <div className="border-t pt-4">
                  <p className="text-lg">{currentCard.answer}</p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      {showAnswer ? (
        <div className="grid grid-cols-2 gap-3">
          <Button
            onClick={handleIncorrect}
            variant="outline"
            className="h-14 border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950/20"
          >
            <XCircle className="w-5 h-5 mr-2" />
            Errei
          </Button>
          <Button
            onClick={handleCorrect}
            className="h-14 bg-green-600 hover:bg-green-700 text-white"
          >
            <CheckCircle2 className="w-5 h-5 mr-2" />
            Acertei
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={handleReset} variant="outline" className="h-14">
            <RotateCcw className="w-5 h-5 mr-2" />
            Reiniciar
          </Button>
          <Button onClick={handleNext} className="h-14">
            Próximo
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      )}
    </div>
  );
}
