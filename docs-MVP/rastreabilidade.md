## US01 - Timer Pomodoro
História de Usuário: Enquanto estudante, quero utilizar um cronómetro baseado na técnica Pomodoro, para conseguir manter o foco nos meus estudos sem distrações.

Implementação no MVP: A funcionalidade foi implementada na tela "Sessão de Estudo", apresentando um cronómetro regressivo visual configurado para o padrão de 25:00 minutos, integrado com elementos circulares de progresso que auxiliam o utilizador a acompanhar visualmente o tempo restante do ciclo de foco.

<img width="425" height="378" alt="Captura de tela 2026-06-30 150911" src="https://github.com/user-attachments/assets/a9dc0281-f111-40fd-bac4-067097dd6bef" />

## US02 - Revisão no intervalo
História de Usuário: Enquanto estudante, quero ser direcionado para revisar meus flashcards logo após o término de um ciclo de foco, para aproveitar o intervalo de forma produtiva fixando o conteúdo estudado.

Implementação no MVP: A funcionalidade foi implementada através da lógica de transição de ciclo integrada ao final do Timer de foco, onde um ecrã de pausa ou componente modal é acionado automaticamente, direcionando o fluxo do estudante diretamente para a interface de revisão de flashcards.

<img width="429" height="266" alt="Captura de tela 2026-06-30 153038" src="https://github.com/user-attachments/assets/e1ba6277-8698-4546-80e8-704db5df0398" />   <img width="421" height="377" alt="Captura de tela 2026-06-30 153054" src="https://github.com/user-attachments/assets/91799874-95b6-43fd-b755-6422c01acf59" />


## US03 - Criar Flashcards
História de Usuário: Enquanto estudante, quero criar novos flashcards associados às minhas matérias, para organizar minhas perguntas e respostas de revisão ativa.

Implementação no MVP: A funcionalidade foi implementada na tela "Criar Flashcard", através de um formulário estruturado com validação de campos obrigatórios e limites rigorosos de texto, permitindo um máximo de 200 caracteres para o campo de Pergunta (Frente) e 500 caracteres para o campo de Resposta (Verso).

<img width="399" height="418" alt="Captura de tela 2026-06-30 153207" src="https://github.com/user-attachments/assets/7ab57d08-086f-410b-a9a0-8005854731bb" />   <img width="417" height="288" alt="Captura de tela 2026-06-30 153238" src="https://github.com/user-attachments/assets/cdfb9069-e04a-4796-83f5-a609b4a13b21" />


## US04 - Organização por Matéria
História de Usuário: Enquanto estudante, quero categorizar meus flashcards e sessões por disciplinas, para localizar e estruturar meus estudos de forma organizada.

Implementação no MVP: A funcionalidade foi implementada na tela "Lista de Disciplinas" e nos seletores presentes nas interfaces de criação de cards, permitindo agrupar, listar e filtrar visualmente todos os dados do utilizador com base na matéria correspondente.

<img width="381" height="189" alt="Captura de tela 2026-06-30 153418" src="https://github.com/user-attachments/assets/368a3eed-1e3d-4603-bbc9-112b92d3c3d2" />

## US05 - Estatísticas de Estudo
História de Usuário: Enquanto estudante, quero visualizar gráficos sobre o meu tempo focado e revisões concluídas, para acompanhar de forma clara a evolução do meu rendimento.

Implementação no MVP: A funcionalidade foi implementada no "Dashboard Inicial (Home)", que consolida métricas de uso através de blocos visuais com o total de minutos focados e gráficos circulares que ilustram o nível de engajamento do estudante.

<img width="431" height="303" alt="Captura de tela 2026-06-30 153524" src="https://github.com/user-attachments/assets/80cc177e-9fcb-4464-beff-09105f08e4d8" />  <img width="416" height="306" alt="Captura de tela 2026-06-30 153539" src="https://github.com/user-attachments/assets/0f21cedb-012d-4bfa-8716-84f0702a32d4" />


## US06 - Notificações
História de Usuário: Enquanto estudante, quero receber alertas visuais ao término de cada ciclo de tempo, para saber exatamente quando iniciar ou pausar um intervalo de descanso.

Implementação no MVP: A funcionalidade foi implementada como um serviço em segundo plano atrelado à tela "Sessão de Estudo", que gerencia o encerramento do cronómetro e dispara um aviso visual e sonoro de feedback na interface do utilizador.

<img width="408" height="121" alt="Captura de tela 2026-06-30 153729" src="https://github.com/user-attachments/assets/44cf8b1e-bc41-4c83-94e0-21c4fcf4b90f" />

## US07 - Configuração de tempo
História de Usuário: Enquanto estudante, quero ajustar a duração dos blocos de foco e dos intervalos, para personalizar o método Pomodoro de acordo com o meu próprio ritmo de aprendizado.

Implementação no MVP: A funcionalidade foi implementada na tela "Sessão de Estudo", por meio de painéis de ajustes e botões interativos que possibilitam configurar e alterar a duração padrão dos blocos de foco e dos tempos de descanso.

<img width="414" height="224" alt="Captura de tela 2026-06-30 153812" src="https://github.com/user-attachments/assets/0aa0dab6-2b9c-46f8-8bbf-1cc3212c97b1" />

## US08 - Interface Simples
História de Usuário: Enquanto estudante, quero interagir com um aplicativo com design limpo e minimalista, para evitar sobrecarga visual e distrações durante as sessões de foco.

Implementação no MVP: A funcionalidade foi implementada de maneira transversal através do Design System aplicado de forma padronizada em todos os ecrãs do projeto, adotando uma paleta de cores consistente, tipografia simplificada e fácil legibilidade de menus.

<img width="457" height="578" alt="Captura de tela 2026-06-30 153930" src="https://github.com/user-attachments/assets/5cc9762c-db14-4023-aae7-64be2aa0ee7c" />

## US09 - Acessibilidade
História de Usuário: Enquanto estudante com fadiga ou dificuldades visuais, quero poder alterar as configurações visuais do aplicativo, para ler os textos com maior conforto.

Implementação no MVP: A funcionalidade foi implementada na tela de "Aparência", que disponibiliza um seletor específico para o ajuste, configuração e redimensionamento dinâmico do tamanho da fonte da interface de utilizador.

<img width="394" height="109" alt="Captura de tela 2026-06-30 155330" src="https://github.com/user-attachments/assets/3c4b5e2f-7d8b-4282-8505-bf3d3d7e8408" />


## US10 - Sessão por matéria
História de Usuário: Enquanto estudante, quero selecionar qual matéria irei estudar antes de iniciar o cronómetro, para que meu tempo seja contabilizado corretamente na disciplina correspondente.

Implementação no MVP: A funcionalidade foi implementada na tela "Sessão de Estudo", através de um componente de menu suspenso (dropdown) posicionado logo acima do timer, permitindo que o utilizador associe o ciclo de foco a uma disciplina específica antes do início.

<img width="401" height="360" alt="Captura de tela 2026-06-30 154126" src="https://github.com/user-attachments/assets/fe949a14-93bb-409c-beb9-1df1523a0506" />

## US12 - Sincronização
História de Usuário: Enquanto estudante, quero que meus dados de progresso sejam salvos de forma automática, para não perder minhas informações e histórico ao fechar o aplicativo.

Implementação no MVP: A funcionalidade foi implementada como uma rotina lógica de persistência de dados em segundo plano, garantindo que qualquer alteração realizada (como criação de flashcards ou conclusão de sessões) seja gravada de forma automatizada.

 Não tem uma tela própria porque funciona de forma invisível em segundo plano. Podes testar criando um flashcard e atualizando a página (F5): as informações continuam lá guardadas.

## US13 - Revisão Manual
História de Usuário: Enquanto estudante, quero poder revelar a resposta do flashcard manualmente e dar feedback sobre o meu nível de retenção, para gerenciar minhas sessões de repetição espaçada.

Implementação no MVP: A funcionalidade foi implementada nas telas de "Revisão de Flashcards" e feedback, permitindo ao estudante interagir diretamente com o card para revelar o verso (resposta) e registar o seu desempenho manual clicando nos botões de avaliação correspondentes.

<img width="404" height="300" alt="Captura de tela 2026-06-30 154430" src="https://github.com/user-attachments/assets/67aa0d40-e546-4198-9cd3-0d6613af6e20" />   <img width="401" height="390" alt="Captura de tela 2026-06-30 154412" src="https://github.com/user-attachments/assets/ec365811-6966-4140-b853-8e00e45e72d7" />

## US14 - Histórico de Sessões
História de Usuário: Enquanto estudante, quero ter acesso a uma lista de todas as sessões de estudo que já realizei, para revisar meu histórico cronológico de esforço.

Implementação no MVP: A funcionalidade foi implementada na tela "Histórico de Sessões", estruturada visualmente no formato de linha do tempo (timeline), listando os registos antigos ordenados por data, matéria e duração exata do ciclo.

<img width="414" height="223" alt="Captura de tela 2026-06-30 155130" src="https://github.com/user-attachments/assets/80c47bb2-9e0d-4575-8130-8d908087474a" />

## US15 - Tema Escuro
História de Usuário: Enquanto estudante, quero ativar o modo noturno no aplicativo, para conseguir estudar confortavelmente em ambientes com baixa iluminação.

Implementação no MVP: A funcionalidade foi implementada na tela de "Aparência", que conta com um botão de alternância (toggle switch) para ativação e desativação do Tema Escuro da interface de forma instantânea.

<img width="410" height="104" alt="Captura de tela 2026-06-30 155216" src="https://github.com/user-attachments/assets/2c7154e9-1b6c-43e6-9e18-c495c5a0b30b" />

## US16 - Exportar Dados
História de Usuário: Enquanto estudante, desejo exportar meus dados, para análise externa.

Implementação no MVP: A funcionalidade foi implementada por meio de um fluxo de exportação de dados distribuído em ecrãs específicos, onde o sistema permite ao estudante selecionar o formato do arquivo (CSV ou PDF) e filtrar o período desejado, exibindo um resumo informativo da quantidade de registos antes de concluir a extração.

<img width="438" height="386" alt="Captura de tela 2026-06-30 155426" src="https://github.com/user-attachments/assets/4e5cbac0-7c20-456a-9fc6-c018410d5bef" />  <img width="423" height="366" alt="Captura de tela 2026-06-30 155455" src="https://github.com/user-attachments/assets/85125169-3f84-4bc6-8b9b-996ac2545749" />  <img width="427" height="276" alt="Captura de tela 2026-06-30 155507" src="https://github.com/user-attachments/assets/ec2606a1-41ac-41c3-af28-832a451e17c6" />

## US18 - Senha Segura
História de Usuário: Enquanto utilizador, quero que minha palavra-passe seja ocultada ao digitá-la no cadastro ou login, para manter as minhas credenciais protegidas de terceiros.

Implementação no MVP: A funcionalidade foi implementada nas telas de "Cadastro" e "Login" do utilizador, aplicando máscaras de privacidade de caracteres confidenciais nos campos de entrada de texto reservados para palavras-passe (inputs protegidos).

<img width="458" height="262" alt="Captura de tela 2026-06-30 155643" src="https://github.com/user-attachments/assets/0ab7d605-f14f-433e-848d-d583f2b9c5dd" />   <img width="427" height="336" alt="Captura de tela 2026-06-30 155725" src="https://github.com/user-attachments/assets/24bfb54b-20fc-4bfd-9fcd-2ee05ed6b608" />

## US19 - Seleção do Tipo de Ciclo (Gerenciamento de Estados do Timer)
História de Usuário: Enquanto estudante, quero poder alternar e comandar os estados do timer, para gerenciar com precisão meus tempos de foco e descanso de acordo com os acontecimentos do dia.

Implementação no MVP: A funcionalidade foi implementada na tela "Sessão de Estudo", fornecendo controle dinâmico e direto sobre os estados do cronómetro através de botões funcionais para Iniciar, Pausar e Reiniciar o ciclo ativo.

<img width="417" height="249" alt="Captura de tela 2026-06-30 155923" src="https://github.com/user-attachments/assets/65a9f0a4-eac4-48f2-8005-a7edd07baf48" />

## US20 - Sistema de Conquistas Locais
História de Usuário: Enquanto usuário, quero desbloquear insígnias com base no meu histórico de uso acumulado, para que eu tenha um indicativo visual do meu progresso no aplicativo.

Implementação no MVP: A funcionalidade foi implementada na tela de "Conquistas", que exibe o progresso de 3 medalhas locais fixas (Primeiro Passo: desbloqueada com 1 ciclo; Maratonista: 4 ciclos no mesmo dia; Mestre da Revisão: primeira revisão concluída). A interface faz a alteração do estado visual das insígnias de cinza opaco para colorido com base em consultas diretas na tabela local de histórico, ignorando sessões interrompidas antes dos 25 minutos regulamentares.

<img width="421" height="458" alt="Captura de tela 2026-06-30 160030" src="https://github.com/user-attachments/assets/99a15ef6-a0b2-425b-9257-599eaa8fb1ab" />   <img width="411" height="401" alt="Captura de tela 2026-06-30 160043" src="https://github.com/user-attachments/assets/51ac33c5-9873-4a4f-8a0b-6dd10f9e0cce" />


## US21 - Histórico de Sessões com Opção de Exclusão
História de Usuário: Enquanto estudante, quero poder remover registos específicos do meu histórico de sessões, para corrigir marcações acidentais ou indesejadas no meu banco de dados.

Implementação no MVP: A funcionalidade foi implementada na tela "Histórico de Sessões", adicionando um botão de ação com o ícone de lixeira posicionado ao lado de cada card de registo antigo, permitindo a exclusão manual e imediata da sessão selecionada.

<img width="411" height="392" alt="Captura de tela 2026-06-30 160209" src="https://github.com/user-attachments/assets/94d4536c-234b-4be5-8290-08d150889d46" />

## US22 - Resumo Estatístico Diário (Agregação de Dados no Banco)
História de Usuário: Enquanto estudante, quero ver uma consolidação das minhas atividades do dia atual logo na entrada da aplicação, para acompanhar rapidamente o andamento da minha meta diária.

Implementação no MVP: A funcionalidade foi implementada no "Dashboard Inicial (Home)", agregando e exibindo em tempo real os dados consolidados das sessões do dia corrente, como o total de horas estudadas hoje e o percentual de conclusão da meta diária do utilizador.

<img width="423" height="388" alt="Captura de tela 2026-06-30 160309" src="https://github.com/user-attachments/assets/62dd48ac-e2c7-48c8-a489-1b54b671d099" />

## US23 - Gerenciamento e Exclusão de Disciplinas
História de Usuário: Enquanto estudante, quero gerenciar minhas disciplinas e receber alertas de segurança antes de excluí-las, para evitar a perda acidental de flashcards ou históricos vinculados.

Implementação no MVP: A funcionalidade foi implementada na tela "Gerenciar Disciplinas", fornecendo a listagem completa de matérias criadas e exibindo um card amarelo de aviso contendo travas de segurança caso o utilizador tente apagar uma disciplina que possua dados ou cards vinculados em segundo plano.

<img width="519" height="211" alt="Captura de tela 2026-06-30 160630" src="https://github.com/user-attachments/assets/7efbe0b5-f8b6-4592-8086-48341233e886" />



