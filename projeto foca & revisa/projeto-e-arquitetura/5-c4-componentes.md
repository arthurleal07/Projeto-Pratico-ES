<img width="1600" height="928" alt="WhatsApp Image 2026-05-30 at 09 25 09" src="https://github.com/user-attachments/assets/44d4b3ab-1d6a-4564-866e-527ffaa6d5d9" />

**Explicação do diagrama.**

1. Componentes de Interface e Entrada (Clientes do Sistema)
No topo do diagrama, encontramos os componentes de interface: Auth UI, Pomodoro UI, Flashcard UI, Agenda UI e Subject UI.
 Papel no Sistema: Eles funcionam como os componentes clientes primários. A responsabilidade deles é capturar eventos externos (interações do usuário) e traduzi-los em comandos de controle.
 Comandos e Sinais: Esses componentes emitem sinais específicos para os módulos internos. Por exemplo, os componentes ⁠Pomodoro UI⁠ e ⁠Agenda UI⁠ possuem linhas de conexão que disparam uma "Chamada reset" para limpar estados internos. Já o componente ⁠Subject UI⁠ expõe as ações de "Cria matéria" e "Solicita Sync", acionando diretamente o nó de controle de disciplinas.





<img width="399" height="39" alt="Captura de tela 2026-06-12 162916" src="https://github.com/user-attachments/assets/2780b3c1-6776-40c6-b654-bd953c07f39c" />




2. Componentes de Orquestração (Controllers)
Logo abaixo das interfaces, situam-se os componentes controladores (como ⁠AuthController⁠, ⁠PomodoroController⁠, ⁠FlashcardController⁠, ⁠SubjectController⁠ e ⁠DashboardController⁠).
 Responsabilidade: Eles atuam como intermediários e gerenciadores de estado para as UIs. Eles recebem os comandos brutos das interfaces e os direcionam aos componentes de serviço apropriados.
 O Nó Central (Dashboard): O DashboardController se destaca como um componente agregador. Ele estabelece múltiplas linhas de dependência simultâneas: consome dados do ⁠SubjectService⁠, requisita o estado do ⁠AchievementController⁠ e aciona o ⁠ExportService⁠ para coordenar a atualização da tela principal.


<img width="466" height="41" alt="Captura de tela 2026-06-12 163101" src="https://github.com/user-attachments/assets/9be837b5-79a1-473f-bd9b-d9bbc83a6c7a" />



3. Componentes de Domínio e Lógica de Negócio (Services e Engines)
Este é o núcleo computacional do sistema, onde as regras de negócio estão estritamente isoladas e protegidas. As interações e dependências entre esses componentes determinam o comportamento do sistema:
 Acoplamento Flashcard → Subject: O componente FlashcardService possui uma dependência obrigatória em relação ao SubjectService. Para cumprir sua regra interna (como o limite de 20 cartões), ele precisa invocar as interfaces de "Valida vínculo" e "Valida matéria" fornecidas pelo componente de matérias, garantindo a integridade do sistema antes de qualquer operação.


<img width="247" height="47" alt="Captura de tela 2026-06-12 165221" src="https://github.com/user-attachments/assets/9594fb61-d811-4ae6-815d-35007852653b" />


 Agregação de Telemetria (Activity Tracker): O ActivityTrackerService funciona como um componente centralizador de logs de uso. Ele intercepta e consome dados gerados pelo ⁠PomodoroService⁠ ("Registra fim de sessão") e pelo ⁠FlashcardService⁠ ("Registra cartões de uso").

 
<img width="88" height="41" alt="Captura de tela 2026-06-12 165312" src="https://github.com/user-attachments/assets/eac86a43-2a04-4feb-b90b-000e68e427b4" />


 O Motor Automático (Badge Engine): O processamento de conquistas é feito por um componente especialista isolado, o Badge Engine. O ⁠ActivityTrackerService⁠ e o ⁠SubjectService⁠ enviam sinais de "Notifica ação para checar badge" para o AchievementService. Este, por sua vez, injeta esses dados no ⁠Badge Engine⁠, que calcula as metas e dispara o comando automático de "Grava Conquista".
 

<img width="79" height="47" alt="image" src="https://github.com/user-attachments/assets/5f4df326-4afd-4629-adb5-014aadab7296" />


5. Componentes de Acesso e Persistência de Dados (Repositories)
Os componentes de repositório (UserRepository, FlashcardRepository e ScheduleRepository) encapsulam toda a lógica de acesso a dados.
 Abstração: Eles servem para que os componentes de Serviço não precisem conhecer detalhes de infraestrutura ou linguagem SQL.
 Distribuição de Carga: O ScheduleRepository possui uma característica peculiar no diagrama: ele é um componente único que gerencia duas entidades lógicas distintas, mapeando e persistindo dados tanto para a tabela de agendamentos quanto para a tabela de matérias.


<img width="72" height="38" alt="image" src="https://github.com/user-attachments/assets/afb62adb-a7c7-46f2-b5bb-6b5e9981018b" />


<img width="248" height="67" alt="Captura de tela 2026-06-12 170053" src="https://github.com/user-attachments/assets/c985911f-1a0f-4192-8353-2c28dd513894" />


7. Componentes de Fronteira e Infraestrutura (Adapters)
Nas extremidades laterais do diagrama, encontram-se os componentes que fazem a ponte com sistemas externos através do padrão Ports and Adapters:
 GoogleAuthAdapter: Componente responsável por isolar a aplicação da API externa do Google/Firebase Auth. Ele valida as credenciais e emite um evento de token.


<img width="81" height="58" alt="Captura de tela 2026-06-12 170215" src="https://github.com/user-attachments/assets/a026ad16-9d30-4a61-bb88-788becd87b22" />


 CloudStorageAdapter: Componente encarregado de realizar chamadas HTTPS para sincronização na nuvem (Cloud Storage).
 Dependência de Segurança: Existe uma linha de comunicação crítica cruzando o diagrama: o ecossistema de autenticação envia uma notificação de "valida Token via HTTPS" diretamente para o ⁠CloudStorageAdapter⁠. Isso significa que o componente de armazenamento em nuvem depende estritamente do estado de validação do componente de autenticação para autorizar o fluxo vindo do ExportService.
 

<img width="86" height="42" alt="Captura de tela 2026-06-12 170300" src="https://github.com/user-attachments/assets/ce5bfba7-8594-4942-9eef-de4d21e4d228" />

 
9. Componente de Armazenamento Central (Banco de Dados)
Representado pela grande estrutura na base, o Banco de Dados (PostgreSQL ou SQLite) é o componente de persistência definitiva do sistema. Ele não possui lógica ativa; apenas expõe seu schema estruturado para receber as operações de leitura e escrita comandadas pelos Repositories e pelo motor de conquistas, subdividido nas tabelas de Users, Flashcards, Schedules, Subjects, Activity Logs e Achievements.

<img width="294" height="151" alt="Captura de tela 2026-06-12 170406" src="https://github.com/user-attachments/assets/3787ae58-dbf5-47f0-9475-6204a49507e6" />

