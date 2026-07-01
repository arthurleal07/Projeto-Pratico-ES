# Tech Stack Map — Foca e Revisa
 
---
 
## O que é o Tech Stack Map
 
O **Tech Stack Map** é um mapa visual e documentado de todas as tecnologias, ferramentas e serviços utilizados no desenvolvimento de um software. Ele organiza cada tecnologia por camada — como Frontend, Backend, Banco de Dados, Autenticação, entre outras — oferecendo uma visão clara e estruturada de como o sistema é construído.
 
---
## imagem do nosso tech stack map

<img width="1692" height="665" alt="Captura de tela 2026-06-30 214930" src="https://github.com/user-attachments/assets/bc44f831-fd6d-4d74-95c6-b0ca0aa3b637" />

---
## Para que ele funciona
 
O Tech Stack Map funciona como uma **referência central** do projeto. Ele serve para:
 
- Documentar todas as tecnologias escolhidas e suas respectivas camadas
- Justificar as decisões técnicas tomadas pela equipe
- Facilitar a entrada de novos desenvolvedores no projeto
- Identificar quais serviços são externos ao sistema (base para o Diagrama de Contexto C4)
- Guiar a comunicação entre equipes técnicas e não técnicas
---
 
## Qual a importância
 
O Tech Stack Map é importante porque evita decisões técnicas dispersas e sem critério. Ao centralizar todas as escolhas tecnológicas em um único documento, a equipe mantém **consistência arquitetural** ao longo do desenvolvimento. Além disso, ele serve como base para outros artefatos de engenharia de software, como o **Diagrama de Contexto C4**, onde cada tecnologia externa mapeada se torna um sistema externo no diagrama.
 
---

## Recorte de cada tecnologia por camadas

### Front end

<img width="537" height="342" alt="Captura de tela 2026-06-30 214942" src="https://github.com/user-attachments/assets/92833eba-7c2f-41ce-9115-d4b5cab3471e" />

### Back end

<img width="2764" height="1763" alt="backend" src="https://github.com/user-attachments/assets/0fb44580-7a1d-4f28-a203-4b2577b2d503" />

### Banco de dados

<img width="2772" height="1775" alt="banco de dados" src="https://github.com/user-attachments/assets/557752fd-9024-4951-86df-318e1f2c3e81" />

### Autenticação

<img width="1779" height="1787" alt="autenticação" src="https://github.com/user-attachments/assets/0d78c560-6ce6-4168-8c35-4929bf669b53" />


### Infraestrutura 

<img width="3821" height="1758" alt="Infraestrutura" src="https://github.com/user-attachments/assets/3a75d000-bec2-41c9-84f2-7f0e83f500b9" />


### Notificações 

<img width="1779" height="1787" alt="notificações" src="https://github.com/user-attachments/assets/7c3baa6c-bd58-4a39-90c3-ba6e047a6319" />

### Pagamentos

<img width="1779" height="1787" alt="pagamentos" src="https://github.com/user-attachments/assets/36179e7b-382b-4173-a8d9-b00fa24a80cf" />

### Tabela Tech Stack Map

# Tecnologias e Ferramentas Utilizadas (Tech Stack Map)

**Engenharia de Software I — Universidade Federal do Amazonas**

---

## Tabela de explicação das tecnologias — Foca e Revisa

| Tecnologia | Camada | Justificativa |
|---|---|---|
| **Flutter** | Frontend Mobile | Permite desenvolvimento multiplataforma (Android/iOS) com uma única base de código em Dart, alta performance e widgets prontos para as telas de Timer, Flashcards e Agenda. |
| **Dart** | Frontend Mobile | Linguagem oficial do Flutter com tipagem forte, sintaxe limpa e compilação nativa — resulta em código previsível e apps rápidos. |
| **Riverpod** | Frontend Mobile | Biblioteca de gerenciamento de estado reativo para Flutter. Controla o estado do timer, flashcards e agenda, integrando-se nativamente ao SDK do Supabase. |
| **Node.js + Express** | Backend | Rápido, escalável e com grande comunidade — ideal para APIs REST leves. Centraliza todas as regras de negócio do app (Pomodoro, Flashcards, Agenda, Conquistas). |
| **Zod** | Backend | Biblioteca de validação de dados para Node.js. Garante que os dados enviados pelo Flutter chegam no formato correto antes de processar as regras de negócio. |
| **Google Calendar API** | Backend / AgendaService | Integração futura que permitirá exportar as entradas da agenda do app para o calendário nativo Google do usuário. |
| **REST + JSON** | API | Leve, simples e amplamente suportado para comunicação entre o app Flutter e o backend Node.js. |
| **Supabase** | Banco de Dados | Plataforma open-source que fornece PostgreSQL gerenciado, sincronização Realtime e SDK oficial para Flutter — permitindo sincronizar flashcards e agenda entre dispositivos. |
| **PostgreSQL** | Banco de Dados Relacional | Banco de dados robusto e gratuito. Os dados do app (usuários, flashcards, sessões, agenda, conquistas) são 100% relacionais, encaixando-se perfeitamente no modelo. |
| **Supabase Auth** | Autenticação | Gerencia login via Google OAuth e email/senha. Já incluso no Supabase, tem SDK Flutter nativo e emite tokens JWT sem configuração adicional. |
| **JWT + HTTPS** | Segurança | Garante autenticação segura e comunicação criptografada entre o app Flutter e o backend. O SDK do Supabase gerencia o token automaticamente. |
| **Firebase Cloud Messaging (FCM)** | Notificações Push | Serviço oficial do Google para push notifications com SDK Flutter nativo. Envia lembretes de agenda, fim de sessão Pomodoro e alertas de metas semanais. |
| **Stripe** | Pagamentos | Plataforma de pagamentos recorrentes com suporte a Pix e cartão de crédito. Aceita Pix — essencial para o público estudantil brasileiro. Integra via pacote `flutter_stripe`. |
| **In-App Purchase** | Pagamentos (nativo) | Pacote `in_app_purchase` unifica Google Play Billing (Android) e Apple StoreKit (iOS) em uma única implementação Flutter para assinaturas nativas nas lojas. |
| **Mixpanel** | Analytics | Plataforma de analytics de produto. Rastreia comportamento do usuário: flashcards revisados, tempo de estudo, uso da agenda e engajamento com as funcionalidades. |
| **Railway / Render** | Hospedagem | Plataformas de hospedagem em nuvem para o backend Node.js com deploy simples via Git. Plano gratuito generoso para o estágio inicial do app. |
| **GitHub Actions** | CI/CD | Automatiza testes e deploys a cada alteração no repositório, garantindo qualidade e agilidade no desenvolvimento do app. |
| **Flutter Build + EAS** | Build / Publicação | Processo nativo do Flutter para gerar os binários `.apk`, `.aab` (Android) e `.ipa` (iOS) para publicação na Play Store e App Store. |
