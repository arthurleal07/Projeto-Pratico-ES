# Diagrama de Containers – Projeto Foca e Revisa

## O que é um Diagrama de Containers?

O Diagrama de Containers representa o segundo nível do modelo C4 (Context, Containers, Components e Code). Seu objetivo é detalhar a estrutura interna do sistema, demonstrando os principais containers que o compõem, suas responsabilidades e a forma como eles se comunicam.

Diferentemente do Diagrama de Contexto, que apresenta apenas uma visão geral do sistema e seus usuários, o Diagrama de Containers mostra as principais aplicações, bancos de dados e serviços externos envolvidos na solução.

## Aplicação no Projeto Foca e Revisa

No projeto **Foca e Revisa**, o Diagrama de Containers foi utilizado para representar a arquitetura da aplicação de estudos, evidenciando os componentes responsáveis pelo funcionamento das funcionalidades de Pomodoro, flashcards, agenda de estudos, conquistas e gerenciamento de assinaturas.

A arquitetura é composta pelos seguintes containers:

<img width="1291" height="651" alt="Diagrama containers" src="https://github.com/user-attachments/assets/6bf6db8e-2949-47b5-9208-e5c1a454256f" />


### App Flutter

O aplicativo mobile desenvolvido em Flutter é utilizado pelos estudantes para acessar os recursos da plataforma.

Principais funcionalidades:

- Sessões de estudo utilizando a técnica Pomodoro;
- Criação e revisão de flashcards;
- Agenda semanal de estudos;
- Relatórios de desempenho;
- Sistema de conquistas;
- Gerenciamento da conta do usuário.

### Painel Administrativo

O Painel Administrativo, desenvolvido em React, é utilizado pelos administradores do sistema para realizar o gerenciamento da plataforma.

Entre suas responsabilidades estão:

- Gerenciamento de usuários;
- Controle de planos gratuitos e premium;
- Monitoramento de métricas do aplicativo;
- Administração de conteúdos e dados da plataforma.

### Backend Node.js + Express

O Backend representa o núcleo da aplicação e disponibiliza uma API REST responsável por processar as regras de negócio do sistema.

Entre os principais serviços implementados estão:

- TimerService;
- FlashcardService;
- AgendaService;
- ProgressService;
- AchievementService;
- SubscriptionService.

Além disso, o backend é responsável por:

- Receber requisições do aplicativo e do painel administrativo;
- Validar autenticações;
- Processar assinaturas premium;
- Integrar serviços externos;
- Gerenciar notificações;
- Persistir dados no banco de dados.

### Banco de Dados PostgreSQL (Supabase)

O banco de dados é responsável pelo armazenamento persistente das informações da plataforma.

Entre os dados armazenados estão:

- Usuários;
- Flashcards;
- Sessões de estudo;
- Agendas;
- Conquistas;
- Assinaturas;
- Estatísticas de desempenho.

## Sistemas Externos Integrados

Para ampliar as funcionalidades da aplicação, o sistema utiliza alguns serviços externos especializados.

### Supabase Auth

Responsável pela autenticação e autorização dos usuários.

Suas funções incluem:

- Login com e-mail e senha;
- Login com Google OAuth;
- Emissão e validação de Tokens JWT;
- Controle seguro de acesso aos recursos da plataforma.

### Firebase Cloud Messaging (FCM)

Utilizado para o envio de notificações push aos usuários.

Exemplos:

- Lembretes de estudo;
- Início de sessões Pomodoro;
- Alertas de revisões pendentes;
- Metas semanais.

### Stripe

Responsável pelo processamento de pagamentos dos planos premium.

Suas funcionalidades incluem:

- Cobrança recorrente;
- Pagamentos via Pix;
- Pagamentos por cartão de crédito;
- Comunicação com o backend através de webhooks.

### Google Calendar

Permite a sincronização das agendas de estudo do aplicativo com o calendário pessoal do usuário, facilitando a organização das atividades acadêmicas.

## Benefícios do Diagrama para o Projeto

A utilização do Diagrama de Containers no projeto Foca e Revisa permite:

- Visualizar a arquitetura completa da solução;
- Compreender a responsabilidade de cada container;
- Facilitar a comunicação entre desenvolvedores e stakeholders;
- Documentar integrações com sistemas externos;
- Auxiliar na manutenção e evolução da aplicação;
- Servir como referência para futuras implementações.

## Rastreabilidade com Histórias do Usuário

O objetivo desta seção é demonstrar, de forma clara e
verificável, como as decisões arquiteturais estão diretamente
relacionadas as histórias do usuário definidas no nosso TP1.

**Diagrama de containers com rastreabilidade**

<img width="1403" height="1303" alt="Containers com restreamento drawio (1)" src="https://github.com/user-attachments/assets/aee5283f-7d44-4c61-a4a1-b18aa82492b8" />


## Conclusão

O Diagrama de Containers do Foca e Revisa apresenta uma visão detalhada da arquitetura da aplicação, demonstrando como o App Flutter, o Painel Administrativo, o Backend Node.js, o Banco de Dados PostgreSQL e os sistemas externos trabalham de forma integrada para fornecer uma plataforma de estudos moderna, segura e escalável.

