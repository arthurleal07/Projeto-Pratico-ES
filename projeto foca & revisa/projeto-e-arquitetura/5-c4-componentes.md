<img width="1600" height="928" alt="WhatsApp Image 2026-05-30 at 09 25 09" src="https://github.com/user-attachments/assets/44d4b3ab-1d6a-4564-866e-527ffaa6d5d9" />

##Explicação do diagrama.

1. Componentes de Interface e Entrada (Clientes do Sistema)
No topo do diagrama, encontramos os componentes de interface: Auth UI, Pomodoro UI, Flashcard UI, Agenda UI e Subject UI.
 Papel no Sistema: Eles funcionam como os componentes clientes primários. A responsabilidade deles é capturar eventos externos (interações do usuário) e traduzi-los em comandos de controle.
 Comandos e Sinais: Esses componentes emitem sinais específicos para os módulos internos. Por exemplo, os componentes ⁠Pomodoro UI⁠ e ⁠Agenda UI⁠ possuem linhas de conexão que disparam uma "Chamada reset" para limpar estados internos. Já o componente ⁠Subject UI⁠ expõe as ações de "Cria matéria" e "Solicita Sync", acionando diretamente o nó de controle de disciplinas.


2. Componentes de Orquestração (Controllers)
Logo abaixo das interfaces, situam-se os componentes controladores (como ⁠AuthController⁠, ⁠PomodoroController⁠, ⁠FlashcardController⁠, ⁠SubjectController⁠ e ⁠DashboardController⁠).
 Responsabilidade: Eles atuam como intermediários e gerenciadores de estado para as UIs. Eles recebem os comandos brutos das interfaces e os direcionam aos componentes de serviço apropriados.
 O Nó Central (Dashboard): O DashboardController se destaca como um componente agregador. Ele estabelece múltiplas linhas de dependência simultâneas: consome dados do ⁠SubjectService⁠, requisita o estado do ⁠AchievementController⁠ e aciona o ⁠ExportService⁠ para coordenar a atualização da tela principal.


3. Componentes de Domínio e Lógica de Negócio (Services e Engines)
Este é o núcleo computacional do sistema, onde as regras de negócio estão estritamente isoladas e protegidas. As interações e dependências entre esses componentes determinam o comportamento do sistema:
 Acoplamento Flashcard → Subject: O componente FlashcardService possui uma dependência obrigatória em relação ao SubjectService. Para cumprir sua regra interna (como o limite de 20 cartões), ele precisa invocar as interfaces de "Valida vínculo" e "Valida matéria" fornecidas pelo componente de matérias, garantindo a integridade do sistema antes de qualquer operação.
 Agregação de Telemetria (Activity Tracker): O ActivityTrackerService funciona como um componente centralizador de logs de uso. Ele intercepta e consome dados gerados pelo ⁠PomodoroService⁠ ("Registra fim de sessão") e pelo ⁠FlashcardService⁠ ("Registra cartões de uso").
 O Motor Automático (Badge Engine): O processamento de conquistas é feito por um componente especialista isolado, o Badge Engine. O ⁠ActivityTrackerService⁠ e o ⁠SubjectService⁠ enviam sinais de "Notifica ação para checar badge" para o AchievementService. Este, por sua vez, injeta esses dados no ⁠Badge Engine⁠, que calcula as metas e dispara o comando automático de "Grava Conquista".


4. Componentes de Acesso e Persistência de Dados (Repositories)
Os componentes de repositório (UserRepository, FlashcardRepository e ScheduleRepository) encapsulam toda a lógica de acesso a dados.
 Abstração: Eles servem para que os componentes de Serviço não precisem conhecer detalhes de infraestrutura ou linguagem SQL.
 Distribuição de Carga: O ScheduleRepository possui uma característica peculiar no diagrama: ele é um componente único que gerencia duas entidades lógicas distintas, mapeando e persistindo dados tanto para a tabela de agendamentos quanto para a tabela de matérias.


5. Componentes de Fronteira e Infraestrutura (Adapters)
Nas extremidades laterais do diagrama, encontram-se os componentes que fazem a ponte com sistemas externos através do padrão Ports and Adapters:
 GoogleAuthAdapter: Componente responsável por isolar a aplicação da API externa do Google/Firebase Auth. Ele valida as credenciais e emite um evento de token.
 CloudStorageAdapter: Componente encarregado de realizar chamadas HTTPS para sincronização na nuvem (Cloud Storage).
 Dependência de Segurança: Existe uma linha de comunicação crítica cruzando o diagrama: o ecossistema de autenticação envia uma notificação de "valida Token via HTTPS" diretamente para o ⁠CloudStorageAdapter⁠. Isso significa que o componente de armazenamento em nuvem depende estritamente do estado de validação do componente de autenticação para autorizar o fluxo vindo do ExportService.

 
6. Componente de Armazenamento Central (Banco de Dados)
Representado pela grande estrutura na base, o Banco de Dados (PostgreSQL ou SQLite) é o componente de persistência definitiva do sistema. Ele não possui lógica ativa; apenas expõe seu schema estruturado para receber as operações de leitura e escrita comandadas pelos Repositories e pelo motor de conquistas, subdividido nas tabelas de Users, Flashcards, Schedules, Subjects, Activity Logs e Achievements.
