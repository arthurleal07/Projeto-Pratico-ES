# Diagrama de Containers – Projeto Foca e Revisa

## O que é um Diagrama de Containers?

O Diagrama de Containers representa o segundo nível do modelo C4 (Context, Containers, Components e Code). Seu objetivo é detalhar a estrutura interna do sistema, demonstrando os principais containers que o compõem, suas responsabilidades e a forma como eles se comunicam.

Diferentemente do Diagrama de Contexto, que apresenta apenas uma visão geral do sistema e seus usuários, o Diagrama de Containers mostra as principais aplicações, bancos de dados e serviços externos envolvidos na solução.

## Aplicação no Projeto Foca e Revisa

No projeto **Foca e Revisa**, o Diagrama de Containers foi utilizado para representar a arquitetura da aplicação de estudos, evidenciando os componentes responsáveis pelo funcionamento das funcionalidades de Pomodoro, flashcards, agenda de estudos, conquistas e gerenciamento de assinaturas.

A arquitetura é composta pelos seguintes containers:

<img width="1291" height="651" alt="Diagrama containers" src="https://github.com/user-attachments/assets/6bf6db8e-2949-47b5-9208-e5c1a454256f" />


# Detalhamento por Partes

Nessa seção fiz alguns recortes do diagrama de containers para explicação

## Figura 1 – Camada de Aplicação Móvel

<img width="860" height="597" alt="RECORTE 1" src="https://github.com/user-attachments/assets/c451a163-6e81-4228-ab18-434c6833b962" />

Este recorte destaca os componentes envolvidos no processo de autenticação do estudante e sincronização de seus dados. O usuário acessa o aplicativo móvel, que utiliza o Supabase Auth para validação da identidade. Após a autenticação, o backend realiza a leitura e persistência das informações no banco de dados, permitindo que os dados sejam recuperados em diferentes dispositivos.

## Figura 2 – Camada de Serviços e Persistência

<img width="460" height="950" alt="RECORTE 2" src="https://github.com/user-attachments/assets/dc86c6a0-4ef8-467d-ba8c-2e7f88d97e0e" />

Este recorte apresenta o núcleo da arquitetura da plataforma, composto pelo aplicativo móvel, backend e banco de dados. O App Flutter envia requisições para a API REST implementada em Node.js, responsável pelo processamento das regras de negócio. O backend realiza operações de leitura e escrita no banco de dados, garantindo o armazenamento e a recuperação das informações utilizadas pelo sistema.

## Figura 3 – Camada de Autenticação

<img width="1449" height="689" alt="RECORTE 3" src="https://github.com/user-attachments/assets/e572392a-b4bc-4941-94e5-7cde779e9e5d" />

Este recorte destaca os componentes responsáveis pelo controle de acesso à plataforma. O processo de autenticação é realizado por meio do Supabase Auth, que valida as credenciais dos usuários e emite tokens de autenticação utilizados pelo aplicativo e pelo painel administrativo. Essa integração garante a identificação segura dos usuários e o acesso controlado aos recursos do sistema.

## Figura 4 – Integrações Externas

<img width="1449" height="689" alt="RECORTE 4" src="https://github.com/user-attachments/assets/64f7baf6-7361-4ded-a800-99d5cd558490" />

Este recorte apresenta os serviços externos integrados à plataforma. O Firebase FCM é utilizado para o envio de notificações push aos usuários, o Stripe é responsável pelo processamento de assinaturas e pagamentos, enquanto o Google Calendar possibilita a sincronização de eventos da aplicação com calendários externos. Essas integrações ampliam as funcionalidades do sistema sem a necessidade de implementação interna desses serviços.
