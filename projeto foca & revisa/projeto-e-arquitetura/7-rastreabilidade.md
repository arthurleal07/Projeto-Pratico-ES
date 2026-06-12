# 1. Rastreabilidade com Histórias do Usuário

O objetivo desta seção é demonstrar, de forma clara e
verificável, como as decisões arquiteturais estão diretamente
relacionadas as histórias do usuário definidas no nosso TP1.


## Diagrama de Containers com rastreabilidade 

## Rastreabilidade das Histórias de Usuário

Para demonstrar a relação entre os requisitos funcionais e as decisões arquiteturais do sistema, foram selecionadas cinco histórias de usuário que representam funcionalidades centrais da plataforma **Foca e Revisa**. Essas histórias foram escolhidas por envolverem a interação entre os principais containers da arquitetura, incluindo o aplicativo móvel, o backend, o banco de dados e os serviços externos.

A história **HU01 – Sincronizar dados entre dispositivos** foi selecionada por evidenciar o processo de autenticação e sincronização de informações do usuário entre diferentes dispositivos, justificando a utilização do serviço de autenticação e do armazenamento em nuvem.

A história **HU02 – Visualizar estatísticas de estudo** demonstra a necessidade de processamento e consulta de dados de estudo, evidenciando a comunicação entre o aplicativo, a API e o banco de dados para geração das métricas apresentadas ao usuário.

A história **HU03 – Visualizar histórico de estudos** foi escolhida por representar o acesso aos registros persistidos das sessões de estudo, permitindo identificar o fluxo de consulta de informações armazenadas no sistema.

A história **HU04 – Vincular sessões a matérias** evidencia o processo de registro e persistência dos dados produzidos pelo usuário durante suas atividades de estudo, justificando a utilização dos serviços responsáveis pelo gerenciamento das sessões e disciplinas.

Por fim, a história **HU05 – Exportar dados (CSV/PDF)** foi selecionada por demonstrar um fluxo que envolve consulta, processamento e geração de arquivos para download, destacando responsabilidades específicas da camada de backend.

No diagrama de containers, cada uma dessas histórias foi identificada por meio de cores e numeração próprias, permitindo visualizar de forma clara e verificável como os requisitos definidos no TP1 são suportados pela arquitetura proposta para o sistema.

<img width="1403" height="1303" alt="Containers com restreamento drawio (1)" src="https://github.com/user-attachments/assets/0c13d0c0-594a-4fd9-881b-9674cea0f65e" />


## Diagrama de Componente com rastreabilidade 

## Rastreabilidade das Histórias de Usuário

### 🔴 US01 – Timer Pomodoro
*   **Por que foi selecionada:** É a funcionalidade principal (*core business*) do aplicativo. Ela ataca diretamente o problema da procrastinação e da falta de foco do estudante. Sem ela, o "Foca e Revisa" perde sua proposta de valor central como um gerenciador de tempo.

---

### 🔴 Cadastro de Senha Segura
*   **Por que foi selecionada:** É um requisito crítico de segurança e governança. Como o aplicativo lida com contas de usuários e armazena seu histórico de estudos, garantir uma política de senhas fortes protege a privacidade dos estudantes e evita acessos não autorizados ou vazamentos de dados.

---

### 🔴 US03 – Criar Flashcards
*   **Por que foi selecionada:** Foi selecionada para transformar o app em uma plataforma de aprendizado completo, indo além de um simples cronômetro. Os flashcards trazem o conceito de "revisão ativa", permitindo que o estudante de fato retenha o conhecimento das matérias que cronometrou na ferramenta de foco.

---

### 🔴 US07 – Configuração de Tempo
*   **Por que foi selecionada:** Focada na experiência do usuário (UX) e na inclusão. O padrão de 25 minutos do Pomodoro não funciona da mesma forma para todos; estudantes com diferentes ritmos ou necessidades (como TDAH) precisam dessa flexibilidade de customização (entre 15 e 60 minutos) para não abandonarem o aplicativo.

---

### 🔴 US05 – Estatísticas de Estudo
*   **Por que foi selecionada:** É o motor de engajamento, retenção e gamificação do sistema. Estudar pode ser exaustivo, mas visualizar o progresso real (tempo acumulado, sessões feitas e taxa de acerto) gera um sentimento de recompensa e evolução, motivando o estudante a manter a constância no app.


  <img width="3951" height="1778" alt="Diagrama sem nome drawio (1) drawio (1)" src="https://github.com/user-attachments/assets/a6028fe9-0f60-4048-9c64-5b27397d97e3" />



   História de Usuário | Objetivo | Fluxo Principal Técnico  |
| :--- | :--- | :--- |
| *🔴 US01 – Timer Pomodoro* | Gerenciar o tempo de estudo usando a técnica Pomodoro para manter o foco e evitar a fadiga. | *1.* Ação de iniciar/pausar na *Pomodoro UI.<br>2.* Envio da requisição ao *PomodoroController.<br>3.* Delegação ao *PomodoroService* (controla duração e sessões).<br>*4.* Ao fim do ciclo, o serviço notifica o *ActivityTrackerService* para registrar a sessão. |
| *🔴 Cadastro de Senha Segura* | Garantir a proteção da conta do usuário validando regras rígidas de criação de senha. | *1.* Inserção de credenciais na *Auth UI.<br>2.* Requisição enviada ao *AuthController.<br>3.* O *AuthService* valida as regras (maiúscula, número, símbolo, máx 15 caracteres).<br>*4.* Se válida, o *UserRepository* persiste o usuário no banco de dados. |
| *🔴 US03 – Criar Flashcards* | Fornecer ferramenta de revisão ativa baseada em cartões associados a matérias específicas. | *1.* Preenchimento de pergunta/resposta na *Flashcard UI.<br>2.* Requisição enviada ao *FlashcardController.<br>3.* O *FlashcardService* valida o vínculo da matéria com o *SubjectService.<br>4.* Após validação, os dados são salvos via *FlashcardRepository* e a atividade é registrada. |
| *🔴 US07 – Configuração de Tempo* | Personalizar a duração do tempo de foco (15 a 60 min) e pausas ao ritmo do usuário. | *1.* Ajuste dos limites de tempo na interface do aplicativo.<br>*2.* Envio dos novos parâmetros ao *PomodoroController.<br>3.* O *PomodoroService* registra as novas configurações e as aplica para controlar as próximas sessões do timer. |
| *🔴 US05 – Estatísticas de Estudo* | Exibir o progresso consolidado (tempo total, sessões e acertos) para monitoramento de desempenho. | *1.* O *ActivityTrackerService* monitora e grava sessões/uso no banco de dados continuamente.<br>*2.* A interface aciona o *DashboardController* solicitando atualização.<br>*3.* Os dados consolidados são retornados para a tela.<br>*4.* Paralelamente, o *AchievementService* avalia metas e gera conquistas. |

