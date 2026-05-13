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

**Figura da Arquitetura**:



