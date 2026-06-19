| US01 – Timer Pomodoro |
|-----------------------|
| **História do Usuário** |
| Enquanto estudante, desejo iniciar um timer Pomodoro, para manter foco durante meus estudos. |

| **Critérios de Aceitação** |
| - O sistema deve permitir iniciar, pausar e resetar o timer. |
| - O tempo padrão deve ser 25 minutos. |
| - O sistema deve emitir alerta ao final do ciclo. |
| - O sistema deve iniciar o intervalo automaticamente (opcional). |

| **Regras de Negócio** |
| - O tempo deve ser configurável entre 15 e 60 minutos. |


| US02 – Revisão com Flashcards no Intervalo |
|--------------------------------------------|
| **História do Usuário** |
| Enquanto estudante, desejo revisar flashcards durante os intervalos, para reforçar o conteúdo estudado. |

| **Critérios de Aceitação** |
| - O sistema deve exibir flashcards automaticamente no intervalo. |
| - O usuário deve poder marcar como "acerto" ou "erro". |
| - O sistema deve permitir pular flashcards. |

| **Regras de Negócio** |
| - Deve haver no mínimo 3 flashcards por intervalo. |


| US03 – Criar Flashcards |
|-------------------------|
| **História do Usuário** |
| Enquanto estudante, desejo criar flashcards, para revisar conteúdos importantes. |

| **Critérios de Aceitação** |
| - O sistema deve permitir inserir pergunta e resposta. |
| - O usuário deve poder editar flashcards. |
| - O usuário deve poder excluir flashcards. |
| - O sistema deve permitir associar flashcards a uma matéria. |

| **Regras de Negócio** |
| - Todo flashcard deve estar obrigatoriamente vinculado a uma matéria. |


| US04 – Organização por Matéria |
|--------------------------------|
| **História do Usuário** |
| Enquanto estudante, desejo organizar conteúdos por matéria, para facilitar meus estudos. |

| **Critérios de Aceitação** |
| - O sistema deve permitir criar matérias. |
| - O sistema deve permitir editar matérias. |
| - O sistema deve permitir excluir matérias. |
| - O sistema deve permitir associar flashcards às matérias. |

| **Regras de Negócio** |
| - Não pode existir flashcard sem matéria associada. |


| US05 – Estatísticas de Estudo |
|-------------------------------|
| **História do Usuário** |
| Enquanto estudante, desejo visualizar estatísticas de estudo, para acompanhar meu desempenho. |

| **Critérios de Aceitação** |
| - O sistema deve mostrar o tempo total estudado. |
| - O sistema deve mostrar o número de sessões. |
| - O sistema deve mostrar a taxa de acerto. |

| **Regras de Negócio** |
| - Os dados devem ser atualizados ao final de cada sessão. |


| US07 – Configuração de Tempo |
|------------------------------|
| **História do Usuário** |
| Enquanto estudante, desejo configurar o tempo de foco e pausa, para adaptar ao meu ritmo. |

| **Critérios de Aceitação** |
| - O sistema deve permitir alterar o tempo de foco. |
| - O sistema deve permitir alterar o tempo de pausa. |

| **Regras de Negócio** |
| - Tempo mínimo de 15 minutos. |
| - Tempo máximo de 60 minutos. |


| US10 – Sessão por Matéria |
|---------------------------|
| **História do Usuário** |
| Enquanto estudante, desejo vincular sessões a matérias, para analisar meu tempo de estudo. |

| **Critérios de Aceitação** |
| - O sistema deve permitir selecionar uma matéria antes da sessão. |
| - O sistema deve registrar os dados da sessão por matéria. |

| **Regras de Negócio** |
| - Toda sessão deve estar obrigatoriamente vinculada a uma matéria. |


| US13 – Revisão Manual |
|-----------------------|
| **História do Usuário** |
| Enquanto estudante, desejo revisar flashcards manualmente, para estudar fora do Pomodoro. |

| **Critérios de Aceitação** |
| - O sistema deve permitir acessar os flashcards a qualquer momento. |


| US19 – Histórico de Sessões |
|-----------------------------|
| **História do Usuário** |
| Enquanto usuário, quero visualizar o histórico de todos os meus ciclos de foco concluídos e remover registros inseridos por engano. |

| **Critérios de Aceitação** |
| - O aplicativo deve possuir uma tela de histórico. |
| - Cada item deve exibir disciplina, data, hora de início e duração. |
| - Deve existir um botão de exclusão para cada registro. |
| - O sistema deve solicitar confirmação antes da exclusão. |

| **Regras de Negócio** |
| - O histórico deve ser exibido em ordem cronológica decrescente. |
| - Após confirmação, a exclusão deve ser permanente. |


| US20 – Resumo Estatístico Diário |
|----------------------------------|
| **História do Usuário** |
| Enquanto usuário, quero visualizar o total de tempo focado no dia atual para acompanhar minha meta diária de estudos. |

| **Critérios de Aceitação** |
| - Exibir "Tempo de Foco Hoje: X minutos". |
| - Exibir "Ciclos Concluídos: Y". |
| - Atualizar os valores automaticamente após a conclusão de um ciclo. |

| **Regras de Negócio** |
| - Considerar apenas ciclos de foco da data atual. |
| - Não considerar pausas. |
| - Não considerar ciclos cancelados pelo usuário. |


| US21 – Cadastro de Senha Segura |
|---------------------------------|
| **História do Usuário** |
| Enquanto estudante, quero cadastrar uma senha segura seguindo os requisitos definidos pelo sistema, para proteger minha conta. |

| **Critérios de Aceitação** |
| - A senha deve conter pelo menos uma letra maiúscula. |
| - A senha deve conter pelo menos um número. |
| - A senha deve conter pelo menos um símbolo especial. |
| - A senha deve possuir no máximo 15 caracteres. |
| - O sistema deve validar a senha antes de concluir o cadastro. |

| **Regras de Negócio** |
| - Não aceitar senhas sem letra maiúscula. |
| - Não aceitar senhas sem número. |
| - Não aceitar senhas sem símbolo especial. |
| - Não aceitar senhas com mais de 15 caracteres. |
| - Não aceitar senhas vazias ou compostas apenas por espaços. |
| - Exibir mensagem indicando qual requisito não foi atendido. |


| US22 – Sistema de Conquistas Locais |
|-------------------------------------|
| **História do Usuário** |
| Enquanto usuário, quero desbloquear insígnias com base no meu histórico de uso acumulado, para acompanhar meu progresso. |

| **Critérios de Aceitação** |
| - Exibir a medalha "Primeiro Passo" ao concluir 1 ciclo de foco. |
| - Exibir a medalha "Maratonista" ao concluir 4 ciclos de foco no mesmo dia. |
| - Exibir a medalha "Mestre da Revisão" após a primeira revisão concluída. |
| - As medalhas devem mudar visualmente quando desbloqueadas. |

| **Regras de Negócio** |
| - As conquistas devem ser calculadas através de consultas ao histórico local. |
| - Sessões interrompidas ou resetadas não devem contar para conquistas. |


| US23 – Gerenciamento e Exclusão de Disciplinas |
|------------------------------------------------|
| **História do Usuário** |
| Enquanto estudante, quero acessar uma lista de disciplinas cadastradas para excluir matérias antigas. |

| **Critérios de Aceitação** |
| - O aplicativo deve possuir a tela "Gerenciar Disciplinas". |
| - A tela deve listar todas as disciplinas cadastradas. |
| - Cada disciplina deve possuir um botão de exclusão. |

| **Regras de Negócio** |
| - Não permitir excluir disciplinas com histórico vinculado. |
| - Exibir mensagem de erro quando houver vínculo com histórico. |
| - Permitir exclusão apenas de disciplinas sem sessões associadas. |


| US24 – Seleção do Tipo de Ciclo |
|---------------------------------|
| **História do Usuário** |
| Enquanto usuário, quero selecionar entre um ciclo de Foco e um ciclo de Pausa para alternar entre períodos de estudo e descanso. |

| **Critérios de Aceitação** |
| - Exibir as opções "Foco (25 min)" e "Pausa (5 min)". |
| - Atualizar o cronômetro conforme a opção selecionada. |
| - Possuir os estados Iniciar, Pausar e Resetar. |
| - Emitir alerta visual e sonoro ao final do ciclo. |

| **Regras de Negócio** |
| - Não permitir alterar o tipo de ciclo durante a execução. |
| - Ciclos de pausa não devem ser contabilizados no histórico. |
| - Ciclos de pausa não devem contar para conquistas. |
