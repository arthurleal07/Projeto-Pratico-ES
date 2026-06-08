# Padrão Arquitetural

O grupo identificou a melhor arquitetura para o desenvolvimento do aplicativo , fizemos a descrição e justificamos os padrões
arquiteturais escolhidos para a construção do sistema.

# Arquitetura em Camadas — Foca & Revisa

## Descrição do padrão arquitetural

A arquitetura em camadas é um modelo de organização de software que divide o sistema em diferentes níveis de responsabilidade, facilitando a separação das funcionalidades do aplicativo.

Normalmente, essa arquitetura é dividida em:

- **Camada de apresentação:** responsável pela interface do usuário  
- **Camada de lógica de negócio:** responsável pelas regras e funcionalidades do sistema  
- **Camada de dados:** responsável pelo armazenamento e gerenciamento das informações  

Essa separação torna o código mais organizado, reutilizável e de fácil manutenção.

---

## Justificativa da escolha

A arquitetura em camadas foi escolhida para o desenvolvimento do aplicativo Foca & Revisa por ser uma solução simples, organizada e adequada para aplicações mobile de pequeno e médio porte.

Como o projeto será desenvolvido por uma equipe acadêmica e possui funcionalidades bem definidas, essa arquitetura facilita:
- a divisão de tarefas entre os integrantes  
- a manutenção do código  
- a identificação e correção de erros  
- futuras melhorias no aplicativo  

Além disso, a arquitetura em camadas reduz a complexidade do desenvolvimento quando comparada a modelos mais avançados, como microserviços, que seriam desnecessários para a proposta do projeto.

Outro fator importante é a compatibilidade com tecnologias mobile modernas, como o Flutter, permitindo desenvolver o aplicativo de forma organizada e escalável.

---

## Aplicação no sistema

No aplicativo Foca & Revisa, a arquitetura em camadas será aplicada da seguinte forma:

### Camada de apresentação
Responsável pelas telas do aplicativo, como:
- Timer Pomodoro  
- Flashcards  
- Agenda semanal  
- Estatísticas de estudo  

### Camada de lógica de negócio
Responsável pelas funcionalidades do sistema, como:
- Controle do tempo de estudo  
- Gerenciamento dos flashcards  
- Cálculo de desempenho  
- Funcionamento das notificações  

### Camada de dados
Responsável pelo armazenamento das informações do usuário, como:
- Matérias  
- Sessões de estudo  
- Flashcards  
- Configurações do aplicativo  

Utilizando serviços como:
- Firebase  

---

Essa organização permitirá que cada parte do sistema funcione de maneira independente, tornando o aplicativo mais fácil de desenvolver, testar e manter.

---

## Figura da Arquitetura

<img width="1600" height="900" alt="WhatsApp Image 2026-06-01 at 10 49 16" src="https://github.com/user-attachments/assets/73533d14-3723-4f1e-aaa5-3b8e04156fe4" />



**1. Camada de Apresentação (Interface do Usuário / UI)**

É a camada visual com a qual o usuário interage diretamente. Sua principal responsabilidade é capturar as ações do usuário e renderizar as informações processadas pelas camadas inferiores.
 Timer Pomodoro: Interface visual do cronômetro para gerenciamento do tempo de foco.
 Flashcards: Telas de exibição, criação e revisão dos cartões de memória.
 Agenda Semanal: Cronograma visual para o estudante planejar suas metas e horários.
 Estatísticas de Estudo: Gráficos e painéis que mostram o progresso e desempenho do usuário.

 
**2. Camada de Lógica de Negócio (Business Logic Layer)**

O "cérebro" do aplicativo. Esta camada recebe os dados da Interface do Usuário, aplica as regras de negócio e decide o que deve ser enviado para persistência ou como as informações devem ser calculadas.
 Controle de tempo de estudo: Gerencia as regras do Pomodoro (tempo de foco, pausas curtas e longas).
 Gerenciamento de flashcard: Controla algoritmos de repetição espaçada e organização dos cartões.
 Cálculo de desempenho: Processa os dados brutos de estudo para gerar as métricas de evolução.
 Sistema de notificação: Aciona alertas para o usuário (fim de um ciclo Pomodoro, lembretes de revisão, etc.).

 
**3. Camada de Dados (Data Layer)**

Camada responsável por estruturar e manipular os dados locais da aplicação antes de enviá-los para a nuvem ou utilizá-los na lógica.
 Matérias: Estrutura das disciplinas cadastradas.
 Sessões de estudo: Histórico e registros de tempos focados.
 Conteúdo de flashcard: O texto, perguntas, respostas e estados de cada card.
 Configurações do sistema: Preferências do usuário (temas, tempos customizados do Pomodoro, etc.).

 
**Integração com o Supabase**

Para garantir que o usuário não perca seus dados e possa acessá-los de múltiplos dispositivos, a aplicação se conecta diretamente ao Supabase: Sincronização e Armazenamento: A Camada de Dados envia e recebe informações do banco de dados PostgreSQL do Supabase em tempo real. Autenticação e Segurança: O Supabase gerencia o login dos usuários, garantindo que a Camada de Apresentação exiba apenas os dados pertencentes ao usuário autenticado.
