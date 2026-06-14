# Diagrama de Código – Projeto Foca e Revisa

## O que é um Diagrama de Código?

O Diagrama de Código representa o quarto e mais detalhado nível do modelo C4 (Context, Containers, Components e Code). Seu objetivo é mapear a implementação estrutural dos elementos de software que compõem os componentes do sistema. Nesta etapa, a arquitetura abstrata se traduz em um Diagrama de Classes UML, explicitando as entidades, seus atributos, métodos, modificadores de visibilidade e os relacionamentos lógicos (associações, dependências e heranças).

Voltado essencialmente para desenvolvedores, este nível garante que a codificação siga estritamente o padrão arquitetural eleito pelo grupo, que neste projeto combina o modelo **MVC (Model-View-Controller)** para a exposição de recursos com as camadas segregadas de **Service (Regras de Negócio)** e **Repository (Acesso a Dados)**.

## Aplicação no Projeto Foca e Revisa

No projeto **Foca e Revisa**, o Diagrama de Código foi projetado para estruturar os blocos de código que tornam viáveis as funcionalidades de ciclos de Pomodoro, criação e revisão de flashcards, resumos, agendas de estudos e controle de usuários. 

Abaixo está a representação estrutural completa do diagrama de classes global:

![Diagrama de Classes Completo - Nível 4](<img width="1547" height="951" alt="diagrama completo" src="https://github.com/user-attachments/assets/3ae3f164-7b06-48fb-8792-3a7cc6d07c03" />
)

---

# Detalhamento por Partes (Camadas do Diagrama de Código)

Para facilitar a compreensão do ecossistema de software, o diagrama de código foi fragmentado e detalhado com base em suas camadas de responsabilidade técnica.

## Figura 1 – Camada de Controle (Controllers)

![Camada de Controllers](<img width="1535" height="330" alt="CONTROLE" src="https://github.com/user-attachments/assets/5371726d-71f8-4a2f-9343-9ad247262e78" />
)

A Camada de Controle funciona como a porta de entrada para todas as requisições disparadas pelas interfaces do usuário (como o aplicativo móvel em Flutter). Os *Controllers* não executam regras de negócio e não acessam o banco de dados diretamente; sua única atribuição é receber os dados de entrada, mapear as rotas correspondentes (como `+criar()`, `+editar()`, `+revisar()`) e delegar a execução para os respectivos serviços especialistas através de suas propriedades privadas de injeção de dependência (ex: `-service: FlashcardService`).

## Figura 2 – Camada de Negócio (Services)

![Camada de Services](<img width="1447" height="323" alt="SERVIÇO" src="https://github.com/user-attachments/assets/e52941fd-36a3-4311-aa7d-460ab82c142e" />
)

A Camada de Serviço representa o núcleo inteligente da aplicação. É onde residem as regras de negócio complexas do *Foca e Revisa*. Os métodos contidos aqui (como `+calcularDesempenho()`, `+validarSenha()`, `+calcularTempoEstudado()`) realizam validações de segurança, computação de dados temporais e restrições lógicas. Uma vez processada e aprovada a regra de negócio, o *Service* orquestra o fluxo enviando os dados limpos para que a camada de persistência salve as informações.

## Figura 3 – Camada de Acesso a Dados (Repositories)

![Camada de Repositories](<img width="1356" height="373" alt="REPOSITIRO" src="https://github.com/user-attachments/assets/65ea5617-0c6c-448f-ba74-7e7fda4bcdc0" />
)

A Camada de Repositório atua como uma interface de abstração sobre o mecanismo de persistência de dados. Utilizando métodos padronizados de manipulação de coleções de dados (como `+salvar()`, `+buscarPorId()`, `+listarTodos()` e `+excluir()`), os *Repositories* isolam o resto da aplicação de detalhes sobre se os dados estão sendo guardados localmente ou em uma API remota. Eles recebem as entidades estruturadas dos serviços e realizam as chamadas de banco de dados necessárias.

## Figura 4 – Camada de Entidades de Domínio (Models/Entities)

![Camada de Entidades](<img width="1282" height="472" alt="ENTIDADE E US" src="https://github.com/user-attachments/assets/1ab6b201-fd03-46d9-933b-3f327ba693ef" />
)

Esta camada compreende os objetos de domínio puros do sistema, mapeando a estrutura de dados e as propriedades essenciais que formam o coração do negócio. Classes como `FlashCard`, `SessaoPomodoro` e `Usuario` contêm atributos privados com suas respectivas tipagens (`long`, `string`, `date`, `boolean`) que refletem exatamente o esquema de tabelas lógicas, assegurando que o estado do sistema se mantenha consistente durante todo o fluxo operacional.

---

# Rastreabilidade com as Histórias de Usuário (US)

Após compreender o papel de cada camada, abaixo está evidenciada a rastreabilidade do fluxo de execução de três Histórias de Usuário cruciais extraídas do backlog, demonstrando como as camadas interagem de ponta a ponta quando estimuladas pelo usuário.

## Figura 5 – Fluxo de Execução da US03 (Criar Flashcards)

![Rastreabilidade visual da US03](<img width="280" height="822" alt="flash" src="https://github.com/user-attachments/assets/d3dad453-ee5f-4b37-aba4-ec3f547534e1" />
)

Este recorte detalha o caminho percorrido pela informação desde o momento em que o estudante cria um novo card de memorização na tela do aplicativo:
1. **Interface $\rightarrow$ `FlashcardController`:** O usuário insere a pergunta/resposta e envia. A requisição aciona o método `+criar()`.
2. **`FlashcardController` $\rightarrow$ `FlashcardService`:** O controlador valida a entrada e delega a operação para a lógica de negócio pelo método `+criar(flashcard: Flashcard)`.
3. **`FlashcardService` $\rightarrow$ `FlashcardRepository`:** O serviço valida se as informações são consistentes e dispara o método de persistência `+salvar(flashcard: Flashcard)`.
4. **`FlashcardRepository` $\rightarrow$ `FlashCard`:** O repositório realiza a gravação física baseando-se nas propriedades descritas na entidade de domínio `FlashCard`.

## Figura 6 – Fluxo de Execução da US01 (Timer Pomodoro)

![Rastreabilidade visual da US01](<img width="330" height="806" alt="pomodoro" src="https://github.com/user-attachments/assets/d3934cfa-b279-4995-a2a9-f82e0acf1211" />
)

Este fluxo descreve a sequência interna que rege o ciclo de foco do estudante e a sua mensuração cronometrada:
1. **Interface $\rightarrow$ `PomodoroController`:** O estudante clica em iniciar o timer, disparando o gatilho capturado no método `+iniciar()`.
2. **`PomodoroController` $\rightarrow$ `SessaoPomodoroService`:** O fluxo de tempo é delegado para o método `+iniciar()` da camada de negócio, ativando as regras temporais.
3. **`SessaoPomodoroService` $\rightarrow$ `SessaoPomodoroRepository`:** Ao final ou interrupção do ciclo, as estampas de tempo calculadas são registradas através do método `+salvar(sessao: SessaoPomodoro)`.
4. **`SessaoPomodoroRepository` $\rightarrow$ `SessaoPomodoro`:** Os estados e tempos de duração computados são consolidados nos atributos da entidade `SessaoPomodoro`.

## Figura 7 – Fluxo de Execução da US18 (Senha Segura)

![Rastreabilidade visual da US18](<img width="180" height="807" alt="senha (2)" src="https://github.com/user-attachments/assets/5fa8bc07-5194-4784-92ba-f28d5efa23b2" />
)

Este recorte ilustra as interações estruturais necessárias para garantir a segurança dos dados de acesso do usuário no ato de criação de uma conta:
1. **Interface $\rightarrow$ `UsuarioController`:** Os dados do novo cadastro batem na assinatura exposta pelo método `+cadastrar()`.
2. **`UsuarioController` $\rightarrow$ `AutenticacaoService`:** A senha passa pela camada de negócio no método `+validarSenha(senha: string)`, sendo testada contra critérios obrigatórios de força de caracteres.
3. **`AutenticacaoService` $\rightarrow$ `UsuarioRepository`:** Após a validação de segurança bem-sucedida e eventual aplicação de hashing hash, o serviço invoca o método de persistência `+cadastrar(usuario: Usuario)` no repositório.
4. **`UsuarioRepository` $\rightarrow$ `Usuario`:** Os atributos de perfil e as credenciais protegidas são definitivamente salvos respeitando os campos da classe `Usuario`.
