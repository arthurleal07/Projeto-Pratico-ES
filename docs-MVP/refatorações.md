# Sessão de Refatorações

**Nesta sessão serão colocados todas as alterações tanto de melhoria ou manuntenção no código ado app.**

# Refatoração: Extração da Lógica de Validação (`Extract Function`)

## Problema Identificado

A validação dos campos do formulário (`subject`, `question`, `answer`) estava feita diretamente dentro do `handleSave`, com uma única condição genérica que verificava os três campos ao mesmo tempo. Isso dificultava saber qual campo especificamente estava inválido e não cobria casos como strings preenchidas apenas com espaços em branco ou seleção de uma matéria inexistente.

```javascript
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
```

## Motivação da Refatoração

Misturar validação e persistência na mesma função viola o princípio de responsabilidade única, dificulta testes isolados das regras de negócio e gera mensagens de erro pouco específicas para o usuário. Era necessário separar "o que é válido" de "o que fazer quando é válido", além de cobrir a regra de negócio de que todo flashcard deve estar vinculado a uma matéria existente no sistema.

## Descrição da Melhoria

A lógica de validação foi extraída para uma função dedicada, `validateFlashcard`, documentada com as classes de equivalência (CE01–CE07) que ela cobre. A função usa `.trim()` para evitar que espaços em branco sejam considerados preenchimento válido, valida cada campo separadamente e retorna mensagens de erro específicas. O `handleSave` passou a apenas chamar essa função e, em caso de sucesso, persistir o flashcard no `localStorage`.

```javascript
/*
  Classes de Equivalência - US03 Criar Flashcards

  CE01 - Pergunta preenchida ---------------- Classe Válida
  CE02 - Pergunta vazia --------------------- Classe Inválida

  CE03 - Resposta preenchida ---------------- Classe Válida
  CE04 - Resposta vazia --------------------- Classe Inválida

  CE05 - Matéria válida --------------------- Classe Válida
  CE06 - Flashcard sem matéria ------------- Classe Inválida
  CE07 - Matéria inexistente --------------- Classe Inválida

  Regra de Negócio:
  Todo flashcard deve estar obrigatoriamente vinculado a uma matéria.
*/
const validateFlashcard = (
  question: string,
  answer: string,
  subject: string
) => {
  const trimmedQuestion = question.trim();
  const trimmedAnswer = answer.trim();
  const trimmedSubject = subject.trim();

  if (!trimmedQuestion) return "A pergunta não pode estar vazia.";
  if (!trimmedAnswer) return "A resposta não pode estar vazia.";
  if (!trimmedSubject) return "O flashcard deve estar vinculado a uma matéria.";

  const subjectExists = subjects.some((s) => s.value === trimmedSubject);
  if (!subjectExists) return "A matéria selecionada não existe no sistema.";

  return null;
};

const handleSave = () => {
  const validationError = validateFlashcard(question, answer, subject);

  if (validationError) {
    toast.error(validationError);
    return;
  }

  const newFlashcard = {
    id: Date.now(),
    subject,
    question,
    answer,
  };

  const flashcards = JSON.parse(localStorage.getItem("flashcards") || "[]");
  flashcards.push(newFlashcard);
  localStorage.setItem("flashcards", JSON.stringify(flashcards));

  toast.success("Flashcard criado com sucesso! ✨");
  setTimeout(() => {
    navigate("/flashcards");
  }, 1000);
};
```

## Impacto no Sistema

A separação entre validação e persistência tornou o código mais legível e fácil de manter, permitindo testar `validateFlashcard` isoladamente. As mensagens de erro específicas melhoram a experiência do usuário, indicando exatamente qual campo precisa de correção. Além disso, o `handleSave` deixou de ser apenas uma simulação e passou a persistir os dados de fato no `localStorage`, tornando a funcionalidade de criação de flashcards utilizável na prática.

---

# Refatoração: Extração de Estado e Handlers para Criação de Disciplina

> **Observação:** estritamente falando, esta alteração introduz uma nova funcionalidade (US04 — Criar Disciplina) e não uma refatoração pura (que pressupõe manter o comportamento existente). Ainda assim, ela foi estruturada seguindo o catálogo de *refactoring*, já que reorganiza o componente `Materias` separando responsabilidades (estado, validação, UI) de forma consistente com as demais refatorações do projeto.

## Problema Identificado

O componente `Materias` permitia apenas visualizar e excluir disciplinas, sem nenhum fluxo para adicionar novas. Não havia estado, validação, nem estrutura de UI preparada para esse cadastro, o que limitava a usabilidade da tela de gerenciamento de disciplinas.

```javascript
import { useState } from "react";
import { Trash2, BookOpen, AlertCircle, GraduationCap } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { toast } from "sonner";

export function Materias() {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>(mockDisciplinas);
  const [disciplinaParaExcluir, setDisciplinaParaExcluir] = useState<Disciplina | null>(null);
  const [confirmacaoAberta, setConfirmacaoAberta] = useState(false);
  const [erroAberto, setErroAberto] = useState(false);

  // ... apenas handlers de exclusão (handleClickExcluir, handleConfirmarExclusao, handleFecharErro)

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Header sem ação de criação */}
      <div>
        <h2 className="text-2xl font-bold text-foreground">Gerenciar Disciplinas</h2>
        <p className="text-sm text-muted-foreground mt-1">
          {disciplinas.length} disciplinas cadastradas
        </p>
      </div>
      {/* ... lista, stats, banner, dialogs de exclusão ... */}
    </div>
  );
}
```

## Motivação da Refatoração

Era necessário implementar a User Story de criação de disciplinas (US04), mantendo o padrão já estabelecido no projeto de separar validação, estado e apresentação. Concentrar tudo em poucos handlers, sem reaproveitar componentes (`Input`, `Label`) e sem regras claras de validação, geraria duplicação de lógica e inconsistência com o restante do sistema (como já feito na tela de criação de flashcards).

## Descrição da Melhoria

Foram adicionados:

- **Constantes de configuração** (`CORES_DISPONIVEIS` e `ICONES_SUGERIDOS`) para padronizar as opções de personalização visual da disciplina.
- **Novos estados** dedicados ao fluxo de criação (`novaDisciplinaAberta`, `novoNome`, `novaCor`, `novoIcone`, `erroNome`), isolados dos estados de exclusão já existentes.
- **Handler `handleAbrirNovaDisciplina`**, responsável por resetar o formulário antes de abrir o modal.
- **Handler `handleCriarDisciplina`**, responsável pela validação (nome obrigatório e não duplicado, usando `.trim()` e comparação *case-insensitive*) e pela criação da nova disciplina.
- **Novo `Dialog`** de criação, com campos de nome, seleção de ícone, seleção de cor e pré-visualização em tempo real.
- **Botão "Nova"** no header e no estado vazio da lista, dando acesso rápido ao novo fluxo.

```javascript
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

// Opções disponíveis para personalização de uma nova disciplina
const CORES_DISPONIVEIS = [
  "bg-blue-500", "bg-purple-500", "bg-orange-500", "bg-green-500",
  "bg-teal-500", "bg-amber-500", "bg-cyan-500", "bg-pink-500",
  "bg-red-500", "bg-indigo-500",
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

  return (
    <div className="p-4 space-y-6 pb-8">
      {/* Header com botão de criação */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Gerenciar Disciplinas</h2>
          <p className="text-sm text-muted-foreground mt-1">
            {disciplinas.length} disciplinas cadastradas
          </p>
        </div>
        <Button size="sm" onClick={handleAbrirNovaDisciplina} className="shrink-0 gap-1">
          <Plus className="w-4 h-4" />
          Nova
        </Button>
      </div>

      {/* ... lista, stats, banner, dialogs de exclusão ... */}

      {/* New discipline dialog — US04 */}
      <Dialog open={novaDisciplinaAberta} onOpenChange={setNovaDisciplinaAberta}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Nova disciplina</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
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

            <div className="space-y-1.5">
              <Label>Ícone</Label>
              <div className="flex flex-wrap gap-2">
                {ICONES_SUGERIDOS.map((icone) => (
                  <button
                    key={icone}
                    type="button"
                    onClick={() => setNovoIcone(icone)}
                    className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg border transition-colors ${
                      novoIcone === icone ? "border-primary bg-primary/10" : "border-border hover:bg-muted"
                    }`}
                  >
                    {icone}
                  </button>
                ))}
              </div>
            </div>

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
            <Button variant="outline" className="flex-1" onClick={() => setNovaDisciplinaAberta(false)}>
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
```

## Impacto no Sistema

A criação de disciplinas passou a seguir o mesmo padrão de validação e separação de responsabilidades já usado na criação de flashcards (validação isolada, mensagens de erro específicas, normalização com `.trim()`). A reorganização do header e do estado vazio melhora a descoberta da funcionalidade pelo usuário, e a pré-visualização em tempo real reduz erros de configuração antes da criação. Como a lógica de exclusão não foi tocada, o risco de regressão nas funcionalidades existentes é baixo.

---

## Refatoração da tela de cadastro (adicionar critérios de senha)

Problema Identificado

O fluxo de cadastro realizava apenas a validação da senha, permitindo a criação de contas sem a confirmação de aceite dos Termos de Uso.

Trecho original (antes da refatoração)

Código

```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  setError("");

  // Validação apenas para cadastro
  if (!isLogin) {
    const passwordError = validatePassword(password);

    if (passwordError) {
      setError(passwordError);
      return;
    }
  }

  localStorage.setItem(
    "user",
    JSON.stringify({
      name: name || "Estudante",
      email,
    })
  );

  navigate("/home");
};
```

Descrição da Melhoria

Foi adicionado um estado para controlar o aceite dos Termos de Uso e uma nova validação no método handleSubmit, impedindo a criação da conta enquanto o usuário não confirmar o aceite.

Trecho refatorado (depois da refatoração)

Código

```tsx
const [aceitouTermos, setAceitouTermos] = useState(false);

...

if (!isLogin) {
  const passwordError = validatePassword(password);

  if (passwordError) {
    setError(passwordError);
    return;
  }

  if (!aceitouTermos) {
    setError("É necessário aceitar os Termos de Uso.");
    return;
  }
}
```

Impacto no Sistema

O cadastro passou a exigir o aceite dos Termos de Uso.

O fluxo de autenticação ficou mais seguro e aderente aos requisitos do sistema.

O código tornou-se mais organizado e preparado para futuras validações.

Foi criada também a página TermosDeUso.tsx e a rota /termos-de-uso para consulta dos termos pelo usuário.

Motivação da Refatoração

A refatoração foi realizada para separar melhor as regras de login e cadastro, melhorar a legibilidade do componente Auth.tsx e atender ao requisito funcional de aceite obrigatório dos Termos de Uso antes da criação da conta.

# Refatoração  – Atualização do Sistema de Rotas (routes.tsx)
Problema Identificado

## O sistema de rotas não contemplava as novas páginas Termos de Uso e Conquistas, impedindo a navegação para essas funcionalidades.

### Trecho original (antes da refatoração)
```tsx
import { createBrowserRouter } from "react-router";
import { Splash } from "./pages/Splash";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";
import { Materias } from "./pages/Materias";
import { Pomodoro } from "./pages/Pomodoro";
import { Flashcards } from "./pages/Flashcards";
import { CreateFlashcard } from "./pages/CreateFlashcard";
import { Agenda } from "./pages/Agenda";
import { Summaries } from "./pages/Summaries";
import { Statistics } from "./pages/Statistics";
import { Settings } from "./pages/Settings";
import { Layout } from "./components/Layout";
```
## Motivação da Refatoração

Com a criação das páginas Termos de Uso e Conquistas, tornou-se necessário atualizar o sistema de roteamento da aplicação para permitir o acesso a essas novas funcionalidades, mantendo a organização do arquivo routes.tsx.

## Descrição da Melhoria

Foram adicionados novos imports e novas rotas ao arquivo routes.tsx, integrando as páginas TermosDeUso e Conquistas ao sistema de navegação.

### Trecho refatorado (depois da refatoração)
```tsx
import { createBrowserRouter } from "react-router";
import { Splash } from "./pages/Splash";
import { Auth } from "./pages/Auth";
import { TermosDeUso } from "./pages/TermosDeUso";
import { Home } from "./pages/Home";
import { Materias } from "./pages/Materias";
import { Pomodoro } from "./pages/Pomodoro";
import { Flashcards } from "./pages/Flashcards";
import { CreateFlashcard } from "./pages/CreateFlashcard";
import { Agenda } from "./pages/Agenda";
import { Conquistas } from "./pages/Conquista";
import { Summaries } from "./pages/Summaries";
import { Statistics } from "./pages/Statistics";
import { Settings } from "./pages/Settings";
import { Layout } from "./components/Layout";
```

### Além dos novos imports, foram incluídas as rotas:

```tsx
{
  path: "/termos-de-uso",
  element: <TermosDeUso />,
},
{
  path: "/conquistas",
  element: <Conquistas />,
},
```
Impacto no Sistema
Inclusão da navegação para a página Termos de Uso.
Inclusão da navegação para a página Conquistas.
Centralização das rotas em um único arquivo.
Maior organização e escalabilidade do sistema de navegação.
Facilidade para adicionar novas páginas futuramente.

# Refatoração – Home.tsx (Inclusão da tela de Conquistas no Acesso Rápido)

## Código Antigo

```tsx
import { Clock, CreditCard, Calendar, FileText, BarChart3, Timer, TrendingUp } from "lucide-react";

const quickActions = [
  { icon: CreditCard, label: "Flashcards", path: "/flashcards", color: "bg-blue-500" },
  { icon: Calendar, label: "Agenda", path: "/agenda", color: "bg-green-500" },
  { icon: FileText, label: "Resumos", path: "/summaries", color: "bg-purple-500" },
  { icon: BarChart3, label: "Estatísticas", path: "/statistics", color: "bg-orange-500" },
];

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

          <p className="text-sm font-medium text-center">
            {action.label}
          </p>
        </CardContent>
      </Card>
    );
  })}
</div>
```

---

## Código Novo

```tsx
import {
  Clock,
  CreditCard,
  Calendar,
  FileText,
  BarChart3,
  Timer,
  TrendingUp,
  Trophy,
} from "lucide-react";

const quickActions = [
  { icon: CreditCard, label: "Flashcards", path: "/flashcards", color: "bg-blue-500" },
  { icon: Calendar, label: "Agenda", path: "/agenda", color: "bg-green-500" },
  { icon: FileText, label: "Resumos", path: "/summaries", color: "bg-purple-500" },
  { icon: BarChart3, label: "Estatísticas", path: "/statistics", color: "bg-orange-500" },
  { icon: Trophy, label: "Conquistas", path: "/conquistas", color: "bg-yellow-500" },
];

<div className="grid grid-cols-3 gap-3">
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

          <p className="text-sm font-medium text-center">
            {action.label}
          </p>
        </CardContent>
      </Card>
    );
  })}
</div>
```

---

## Alterações Realizadas

- Inclusão do ícone `Trophy` da biblioteca **Lucide React**.
- Adição do atalho **Conquistas** na lista `quickActions`.
- Configuração da navegação para a rota `/conquistas`.
- Alteração do layout da grade de **2 colunas** (`grid-cols-2`) para **3 colunas** (`grid-cols-3`), proporcionando uma melhor distribuição dos atalhos na tela inicial.
- Mantida a mesma estrutura de renderização utilizando o método `map()`, facilitando futuras inclusões de novas funcionalidades no Acesso Rápido.
