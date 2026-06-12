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
