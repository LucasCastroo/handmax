# 🏐 HandMax

**HandMax** é um sistema completo de gestão para uma associação de handebol sem fins lucrativos, com foco em **assistência a pessoas em situação de vulnerabilidade**.  
O projeto é composto por **três módulos principais** — *Frontend (Ionic)*, *Landing Page (Angular)* e *Backend (Quarkus/Java)* — integrados a uma **API de WhatsApp em Docker**, permitindo automação de comunicação e gerenciamento eficiente de treinos, atletas e atividades administrativas.

---

## 📁 Estrutura do Projeto

```

handmax/
│
├── frontend/          # Aplicação híbrida (Ionic) com painel administrativo
│   ├── login, dashboard, treinos, atletas, frequência
│   └── acesso restrito para professores e administradores
│
├── landing-page/      # Site institucional desenvolvido em Angular
│   ├── apresentação do projeto social
│   ├── notícias e publicações
│   └── formulário de contato
│
├── backend/           # API REST com Quarkus (Java)
│   ├── módulos: Atleta, Treino, Frequência, Usuário, Publicação, WhatsApp
│   ├── integração com serviços externos (e-mail e WhatsApp)
│   ├── configuração centralizada de integrações via painel administrativo
│   └── documentação via OpenAPI (Swagger UI)

````

---

## ⚙️ Tecnologias Utilizadas

| Camada | Tecnologia | Descrição |
|:-------|:------------|:-----------|
| **Frontend (App)** | [Ionic](https://ionicframework.com/) | Painel administrativo e acesso para professores |
| **Landing Page** | [Angular](https://angular.io/) | Site institucional e público |
| **Backend** | [Quarkus](https://quarkus.io/) + [Java 17+](https://openjdk.org/) | API REST modular e performática |
| **Banco de Dados** | PostgreSQL | Armazenamento relacional e seguro |
| **Mensageria** | API Waha (Docker) | Comunicação automatizada e configurável |
| **Autenticação** | JWT | Tokens de acesso para usuários e professores |
| **Documentação** | OpenAPI 3.0 (Swagger UI) | Interface de teste e especificação da API |

---

## 🧩 Módulos Principais

### 👥 Usuários e Autenticação
- Login com controle de acesso (professores e administradores)
- Recuperação de senha via e-mail
- Autorização via JWT

### 🏃‍♂️ Atletas
- Cadastro e atualização de dados pessoais e sociais  
- Controle de frequência  
- Acompanhamento de vulnerabilidade social (renda, moradia, NIS, etc.)

### 📅 Treinos
- Agendamento e gerenciamento de sessões  
- Associação de atletas a treinos  
- Registro automático de presenças

### 📊 Frequência
- Registro manual ou em lote  
- Histórico por atleta e por treino  
- Exportação para relatórios administrativos

### 📰 Publicações
- Criação e exibição de notícias com upload de imagens  
- Exibição pública na landing page

### 💬 Integrações (WhatsApp e E-mail)
- Envio automatizado de mensagens e notificações  
- Sessão do WhatsApp autenticada via QR Code (Docker)  
- Configuração dinâmica das credenciais e endpoints diretamente pelo **backend**  
- Envio de e-mails por serviço SMTP também configurável via painel administrativo

---

## 🚀 Instalação e Execução

### 🖥️ Requisitos
- **Java 17+**
- **Maven 3.8+**
- **Node.js 18+ / npm**
- **Docker e Docker Compose**
- **PostgreSQL 13+**

A parte de configuração estará disponível em cada pasta do projeto. Para configurar o backend, vá até sua respectiva pasta. O frontend idem, e a landing-page idem.

---

## 🧪 Documentação da API

A documentação completa está disponível em:

📄 **Swagger UI:**

> [http://localhost:8080/q/swagger-ui](http://localhost:8080/q/swagger-ui)

Formato: **OpenAPI 3.0.3**

---

## 📦 Deploy e Containerização

O projeto pode ser executado e orquestrado com **Docker Compose**, incluindo:

* Backend (Quarkus)
* Banco de Dados (PostgreSQL)
* API WhatsApp
* Frontend (Ionic + Angular)

Cada serviço pode ser configurado e gerenciado independentemente.

---

## 👨‍💻 Contribuição

Contribuições são bem-vindas!
Siga as etapas abaixo:

1. Faça um **fork** do projeto
2. Crie uma branch de feature:

   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Faça commit das alterações
4. Envie um **Pull Request** explicando a modificação

---

## 📜 Licença

Este projeto é distribuído sob a licença **MIT**.
Consulte o arquivo [`LICENSE`](LICENSE) para mais detalhes.

---

## 📧 Contato

**Autor:** Lucas Araújo de Castro
**GitHub:** [@LucasCastroo](https://github.com/LucasCastroo)

---

> HandMax © 2025 — Sistema social e esportivo para o desenvolvimento humano e comunitário.

