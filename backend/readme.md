# 🧠 HandMaxx Backend

Este é o backend do projeto **HandMaxx**, uma plataforma desenvolvida para apoiar a gestão de uma escolinha de handebol sem fins lucrativos. O sistema foi construído com foco em escalabilidade, integração e facilidade de manutenção, utilizando o framework Quarkus e banco de dados PostgreSQL.

## ⚙️ Tecnologias Utilizadas

- **Quarkus** – Framework leve e reativo para aplicações Java
- **Java 17** – Linguagem principal da aplicação
- **PostgreSQL** – Banco de dados relacional
- **Docker** – Contêineres para serviços externos (WhatsApp, SMTP)
- **NodeJS** – Suporte a serviços complementares

---

## 🗄️ Configuração do Banco de Dados

> Requisito: PostgreSQL 14 ou superior

1. **Criar usuário no PgAdmin**:
   ```plaintext
   Nome de usuário: handmaxx_admin
   Senha: 123456
   ```

2. **Criar o banco de dados**:
   ```plaintext
   Nome da base de dados: handmaxx_db
   ```

3. **Atualizar o arquivo de configuração**:
   Localize e edite o arquivo:
   ```
   ./src/main/resources/application.properties
   ```
   Ajuste o endereço de conexão com o PostgreSQL conforme necessário.

---

## 🧩 Execução do Backend

> Requisito: JDK ou OpenJDK 17 instalado

1. **Verifique a versão do Java**:
   ```bash
   java --version
   ```

2. **Compile e execute o servidor Quarkus**:

   - No Windows:
     ```bash
     ./mvnw compile quarkus:dev
     ```

   - No Linux ou macOS:
     ```bash
     mvn compile quarkus:dev
     ```

---

## 💬 Integração com API do WhatsApp

> Requisito: Docker Desktop instalado

1. **Executar os comandos abaixo**:
   ```bash
   docker pull devlikeapro/waha
   docker run -it -p 3000:3000/tcp -e "WHATSAPP_DEFAULT_ENGINE=NOWEB" devlikeapro/waha
   ```

2. **Acessar o painel de conexão**:
   ```
   http://localhost:3000/dashboard
   ```

---

## 📧 Configuração de Envio de E-mails (Gmail)

> Requisito: Docker Desktop instalado

1. **Editar o arquivo `application.properties` com as credenciais do Gmail**:
   ```properties
   quarkus.mailer.from=seu_email@gmail.com
   quarkus.mailer.host=smtp.gmail.com
   quarkus.mailer.port=465
   quarkus.mailer.ssl=true
   quarkus.mailer.username=seu_email@gmail.com
   quarkus.mailer.password=sua_senha_de_aplicativo
   quarkus.mailer.mock=false
   ```

> ⚠️ A senha de aplicativo pode ser gerada nas configurações de segurança da sua conta Google.
