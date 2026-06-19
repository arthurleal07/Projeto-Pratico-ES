## HISTÓRIA  DE USUÁRIO, ACOMPANHADA DE CRITÉRIO DE ACEITAÇÃO E REGRA DE NEGÓCIO ACOSSIADAS


## US01 – Timer Pomodoro

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto estudante, desejo iniciar um timer Pomodoro, para manter foco durante meus estudos. |
| **Critérios de Aceitação** | • O sistema deve permitir iniciar, pausar e resetar o timer.<br>• O tempo padrão deve ser 25 minutos.<br>• O sistema deve emitir alerta ao final do ciclo.<br>• O sistema deve iniciar o intervalo automaticamente (opcional). |
| **Regras de Negócio** | • O tempo deve ser configurável entre 15 e 60 minutos. |

---

## US02 – Revisão com Flashcards no Intervalo

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto estudante, desejo revisar flashcards durante os intervalos, para reforçar o conteúdo estudado. |
| **Critérios de Aceitação** | • O sistema deve exibir flashcards automaticamente no intervalo.<br>• O usuário deve poder marcar como "acerto" ou "erro".<br>• O sistema deve permitir pular flashcards. |
| **Regras de Negócio** | • Deve haver no mínimo 3 flashcards por intervalo. |

---

## US03 – Criar Flashcards

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto estudante, desejo criar flashcards, para revisar conteúdos importantes. |
| **Critérios de Aceitação** | • O sistema deve permitir inserir pergunta e resposta.<br>• O usuário deve poder editar flashcards.<br>• O usuário deve poder excluir flashcards.<br>• O sistema deve permitir associar flashcards a uma matéria. |
| **Regras de Negócio** | • Todo flashcard deve estar obrigatoriamente vinculado a uma matéria. |

---

## US04 – Organização por Matéria

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto estudante, desejo organizar conteúdos por matéria, para facilitar meus estudos. |
| **Critérios de Aceitação** | • O sistema deve permitir criar matérias.<br>• O sistema deve permitir editar matérias.<br>• O sistema deve permitir excluir matérias.<br>• O sistema deve permitir associar flashcards às matérias. |
| **Regras de Negócio** | • Não pode existir flashcard sem matéria associada. |

---

## US05 – Estatísticas de Estudo

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto estudante, desejo visualizar estatísticas de estudo, para acompanhar meu desempenho. |
| **Critérios de Aceitação** | • O sistema deve mostrar o tempo total estudado.<br>• O sistema deve mostrar o número de sessões.<br>• O sistema deve mostrar a taxa de acerto. |
| **Regras de Negócio** | • Os dados devem ser atualizados ao final de cada sessão. |

---

## US07 – Configuração de Tempo

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto estudante, desejo configurar o tempo de foco e pausa, para adaptar ao meu ritmo. |
| **Critérios de Aceitação** | • O sistema deve permitir alterar o tempo de foco.<br>• O sistema deve permitir alterar o tempo de pausa. |
| **Regras de Negócio** | • Tempo mínimo de 15 minutos.<br>• Tempo máximo de 60 minutos. |

---

## US10 – Sessão por Matéria

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto estudante, desejo vincular sessões a matérias, para analisar meu tempo de estudo. |
| **Critérios de Aceitação** | • O sistema deve permitir selecionar uma matéria antes da sessão.<br>• O sistema deve registrar os dados da sessão por matéria. |
| **Regras de Negócio** | • Toda sessão deve estar obrigatoriamente vinculada a uma matéria. |

---

## US13 – Revisão Manual

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto estudante, desejo revisar flashcards manualmente, para estudar fora do Pomodoro. |
| **Critérios de Aceitação** | • O sistema deve permitir acessar os flashcards a qualquer momento. |


---

## US18 – Cadastro de Senha Segura

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto estudante, quero cadastrar uma senha segura seguindo os requisitos definidos pelo sistema, para proteger minha conta. |
| **Critérios de Aceitação** | • A senha deve conter pelo menos uma letra maiúscula.<br>• A senha deve conter pelo menos um número.<br>• A senha deve conter pelo menos um símbolo especial.<br>• A senha deve possuir no máximo 15 caracteres.<br>• O sistema deve validar a senha antes de concluir o cadastro. |
| **Regras de Negócio** | • Não aceitar senhas sem letra maiúscula.<br>• Não aceitar senhas sem número.<br>• Não aceitar senhas sem símbolo especial.<br>• Não aceitar senhas com mais de 15 caracteres.<br>• Não aceitar senhas vazias ou apenas com espaços.<br>• Exibir mensagem indicando qual requisito não foi atendido. |

## US19 – Seleção do Tipo de Ciclo

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto usuário, quero selecionar entre um ciclo de Foco e um ciclo de Pausa para alternar entre períodos de estudo e descanso. |
| **Critérios de Aceitação** | • Exibir as opções "Foco (25 min)" e "Pausa (5 min)".<br>• Atualizar o cronômetro conforme a opção selecionada.<br>• Possuir os estados Iniciar, Pausar e Resetar.<br>• Emitir alerta visual e sonoro ao final do ciclo. |
| **Regras de Negócio** | • Não permitir alterar o tipo de ciclo durante a execução.<br>• Ciclos de pausa não devem ser contabilizados no histórico.<br>• Ciclos de pausa não devem contar para conquistas. |

## US20 – Sistema de Conquistas Locais

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto usuário, quero desbloquear insígnias com base no meu histórico de uso acumulado, para acompanhar meu progresso. |
| **Critérios de Aceitação** | • Exibir a medalha "Primeiro Passo" ao concluir 1 ciclo de foco.<br>• Exibir a medalha "Maratonista" ao concluir 4 ciclos de foco no mesmo dia.<br>• Exibir a medalha "Mestre da Revisão" após a primeira revisão concluída.<br>• As medalhas devem mudar visualmente quando desbloqueadas. |
| **Regras de Negócio** | • As conquistas devem ser calculadas através de consultas ao histórico local.<br>• Sessões interrompidas ou resetadas não devem contar para conquistas. |

## US21 – Histórico de Sessões

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto usuário, quero visualizar o histórico de todos os meus ciclos de foco concluídos e remover registros inseridos por engano. |
| **Critérios de Aceitação** | • O aplicativo deve possuir uma tela de histórico.<br>• Cada item deve exibir disciplina, data, hora de início e duração.<br>• Deve existir um botão de exclusão para cada registro.<br>• O sistema deve solicitar confirmação antes da exclusão. |
| **Regras de Negócio** | • O histórico deve ser exibido em ordem cronológica decrescente.<br>• Após confirmação, a exclusão deve ser permanente. |

---

## US22 – Resumo Estatístico Diário

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto usuário, quero visualizar o total de tempo focado no dia atual para acompanhar minha meta diária de estudos. |
| **Critérios de Aceitação** | • Exibir "Tempo de Foco Hoje: X minutos".<br>• Exibir "Ciclos Concluídos: Y".<br>• Atualizar automaticamente após a conclusão de um ciclo. |
| **Regras de Negócio** | • Considerar apenas ciclos de foco da data atual.<br>• Não considerar pausas.<br>• Não considerar ciclos cancelados pelo usuário. |

---

## US23 – Gerenciamento e Exclusão de Disciplinas

| Campo | Descrição |
|---------|---------|
| **História do Usuário** | Enquanto estudante, quero acessar uma lista de disciplinas cadastradas para excluir matérias antigas. |
| **Critérios de Aceitação** | • O aplicativo deve possuir a tela "Gerenciar Disciplinas".<br>• A tela deve listar todas as disciplinas cadastradas.<br>• Cada disciplina deve possuir um botão de exclusão. |
| **Regras de Negócio** | • Não permitir excluir disciplinas com histórico vinculado.<br>• Exibir mensagem de erro quando houver vínculo com histórico.<br>• Permitir exclusão apenas de disciplinas sem sessões associadas. |

---


## TABELA DE CLASSES DE EQUIVALÊNCIA


| Caso de Uso | Condição de Entrada | Classe Válida | Classe Inválida | Classe Inválida |
|---|---|---|---|---|
| US01 — Timer Pomodoro | Tempo do timer | Tempo entre 15 e 60 min (1) | Tempo menor que 15 min (2) | Tempo maior que 60 min (3) |
| US01 — Timer Pomodoro | Controle do timer | Timer iniciado/pausado/resetado corretamente (4) | Iniciar timer já em execução (5) | Resetar timer inexistente (6) |
| US02 — Revisão com Flashcards | Quantidade de flashcards | Intervalo com 3 ou mais flashcards (7) | Intervalo com menos de 3 flashcards (8) | Nenhum flashcard cadastrado (9) |
| US03 — Criar Flashcards | Associação de matéria | Flashcard vinculado a matéria válida (10) | Flashcard sem matéria (11) | Matéria inexistente (12) |
| US04 — Organização por Matéria | Cadastro de matéria | Matéria criada corretamente (13) | Nome da matéria vazio (14) | Matéria duplicada (15) |
| US05 — Estatísticas de Estudo | Registro de sessão | Sessão concluída registrada (16) | Sessão cancelada registrada (17) | Sessão sem duração (18) |
| US07 — Configuração de Tempo | Alteração de tempo | Tempo alterado entre 15 e 60 min (19) | Tempo abaixo de 15 min (20) | Tempo acima de 60 min (21) |
| US10 — Sessão por Matéria | Seleção de matéria | Sessão vinculada a matéria (22) | Sessão sem matéria (23) | Matéria inválida (24) |
| US13 — Revisão Manual | Acesso aos flashcards | Flashcards disponíveis para revisão (25) | Nenhum flashcard disponível (26) | Matéria sem flashcards (27) |
| US18 — Cadastro de Senha Segura | Validação da senha | Senha com maiúscula, número e símbolo (28) | Senha sem maiúscula (29) | Senha com mais de 15 caracteres (30) |
| US19 — Histórico de Sessões | Exclusão de registros | Exclusão confirmada de sessão existente (31) | Exclusão cancelada pelo usuário (32) | Exclusão de sessão inexistente (33) |
| US20 — Sistema de Conquistas Locais | Verificação de progresso | Conquista desbloqueada corretamente (34) | Sessão incompleta contabilizada (35) | Revisão não concluída contabilizada (36) |
| US21 — Resumo Estatístico Diário | Contagem de ciclos | Apenas ciclos de foco concluídos (37) | Ciclos de pausa contabilizados (38) | Ciclos cancelados contabilizados (39) |
| US22 — Gerenciamento e Exclusão de Disciplinas | Exclusão de disciplina | Disciplina sem histórico vinculada removida (40) | Disciplina com histórico vinculado (41) | Disciplina inexistente (42) |
| US23 — Seleção do Tipo de Ciclo | Alteração de ciclo | Troca de ciclo com timer parado (43) | Troca durante execução (44) | Nenhum ciclo selecionado (45) |



