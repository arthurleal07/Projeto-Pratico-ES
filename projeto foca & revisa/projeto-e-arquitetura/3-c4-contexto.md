# Diagrama de Contexto – Projeto Foca e Revisa

## O que é um Diagrama de Contexto?

O Diagrama de Contexto é o primeiro nível do modelo C4 (Context Diagram) e tem como objetivo apresentar uma visão geral do sistema, evidenciando seus principais usuários, sistemas externos e as interações existentes entre eles. Nesse nível, o sistema é tratado como uma única unidade, permitindo compreender quem utiliza a aplicação, quais serviços externos são integrados e como ocorre a troca de informações entre esses elementos.

Esse diagrama auxilia na identificação dos limites do sistema e de suas dependências externas, servindo como base para os níveis mais detalhados da arquitetura, como os Diagramas de Containers e Componentes.

## Aplicação no Projeto Foca e Revisa

<img width="1431" height="1021" alt="Diagrama de contexto drawio" src="https://github.com/user-attachments/assets/06287d00-d274-491e-bfa6-861c5954b3bb" />


No projeto **Foca e Revisa**, o Diagrama de Contexto apresenta a plataforma como um sistema voltado ao apoio dos estudos, oferecendo recursos como Pomodoro, flashcards, agenda semanal, relatórios de desempenho e acompanhamento da evolução do estudante.

Os principais atores identificados são o **Estudante**, responsável pela utilização das funcionalidades da plataforma para organizar e executar seus estudos, e o **Administrador**, encarregado do gerenciamento de usuários, planos e métricas da aplicação por meio de um painel administrativo.

Além dos usuários, o sistema integra diversos serviços externos que ampliam suas funcionalidades. O **Supabase Auth** é utilizado para autenticação e controle de acesso, enquanto o **Supabase** é responsável pelo armazenamento das informações da aplicação. O **Firebase FCM** fornece serviços de notificações push para lembretes e alertas importantes aos usuários. O **Stripe** realiza o processamento de assinaturas e pagamentos relacionados aos recursos premium da plataforma. Para análise de uso e métricas do produto, é utilizada a ferramenta **Mixpanel**. A infraestrutura da aplicação é hospedada em serviços como **Railway** ou **Render**, responsáveis pela execução e disponibilidade do backend. Por fim, a integração com a **Google Calendar API**, prevista como funcionalidade futura, permitirá a sincronização dos eventos da agenda do aplicativo com calendários externos.

Dessa forma, o Diagrama de Contexto fornece uma visão abrangente do ecossistema da plataforma Foca e Revisa, evidenciando seus usuários, integrações externas e os principais fluxos de comunicação que sustentam o funcionamento da aplicação.

# Detalhamento por Partes

## Recorte 1 – Interação do Estudante com o Sistema

<img width="614" height="831" alt="Recorte 1 Contexto" src="https://github.com/user-attachments/assets/d67f3d2c-d1f4-4986-8521-85b29c7dd0d0" />

Este recorte destaca a relação entre o estudante e o sistema Foca & Revisa. O usuário utiliza o aplicativo por meio de um dispositivo móvel para acessar funcionalidades relacionadas à organização dos estudos, execução de sessões de foco, revisão de conteúdos e acompanhamento do progresso acadêmico.

## Recorte 2 – Gerenciamento Administrativo

<img width="614" height="831" alt="Recorte 2 Contexto" src="https://github.com/user-attachments/assets/8937497c-098f-47dc-85fc-b83f682c205c" />

Este recorte apresenta a interação entre o administrador e a plataforma Foca & Revisa. Por meio de um painel web, o administrador pode gerenciar usuários, acompanhar métricas do sistema e administrar recursos relacionados aos planos disponíveis na aplicação.

## Recorte 3 – Autenticação e Persistência de Dados

<img width="1123" height="537" alt="Recorte 3 Contexto" src="https://github.com/user-attachments/assets/d4c865f5-7ea3-4298-9cb4-61a1ff911aed" />

Este recorte destaca os serviços responsáveis pela autenticação e persistência das informações da plataforma. O Supabase Auth realiza a validação das credenciais dos usuários e o gerenciamento dos tokens de acesso, enquanto o banco de dados Supabase armazena informações relacionadas aos usuários, sessões de estudo, flashcards, agendas e demais recursos da aplicação.


## Recorte 4 – Serviços de Notificação e Pagamento

<img width="1418" height="653" alt="Recorte 4 Contexto" src="https://github.com/user-attachments/assets/93925cfd-e50c-48c8-bfb4-7f85ca39ac08" />

Este recorte apresenta duas integrações importantes da plataforma. O Firebase FCM é utilizado para o envio de notificações e lembretes aos usuários, enquanto o Stripe é responsável pelo processamento de assinaturas e pagamentos relacionados aos recursos premium da aplicação.

## Recorte 5 – Infraestrutura e Serviços Complementares

<img width="1778" height="725" alt="Recorte 5 Contexto" src="https://github.com/user-attachments/assets/a248dc28-9926-4395-9d77-bfbaef3b00f5" />

Este recorte evidencia os serviços auxiliares utilizados pela plataforma. O Mixpanel é empregado para coleta e análise de métricas de uso, enquanto o Railway ou Render são responsáveis pela hospedagem dos serviços da aplicação. Além disso, a integração com a Google Calendar API possibilita a sincronização de eventos da agenda do usuário com serviços externos de calendário.
