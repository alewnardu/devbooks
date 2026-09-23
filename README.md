# 🌐 Atividade Prática Avaliativa (A1) — Programação para Web II

> Repositório da **Atividade Prática Avaliativa (A1)** da disciplina **Programação para Web II**, do curso de **Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)** — 4º período, **UNITINS — Palmas/TO**.

Este projeto foi desenvolvido com o objetivo de aplicar, de forma prática, conceitos relacionados ao desenvolvimento de aplicações web, construção de APIs REST, persistência de dados, utilização de ORM e execução de aplicações em ambientes conteinerizados.

---

## 📚 Sobre o projeto

O **DevBooks** consiste em uma API REST desenvolvida com **Node.js** e **Express**, utilizando o **Prisma ORM** para gerenciamento da camada de persistência.

O banco de dados utilizado é o **SQLite**, integrado à aplicação por meio do adapter **`@prisma/adapter-better-sqlite3`**.

O ambiente de desenvolvimento é executado utilizando **Docker**, permitindo que a aplicação seja inicializada de maneira padronizada, sem a necessidade de instalar o Node.js diretamente na máquina hospedeira.

### Principais componentes

* 🌐 API REST desenvolvida com **Express**
* 🟩 Banco de dados **SQLite**
* 🔷 Mapeamento objeto-relacional com **Prisma ORM**
* 🔌 Integração com SQLite utilizando **`@prisma/adapter-better-sqlite3`**
* 🐳 Execução da aplicação em **Docker**
* 📦 Gerenciamento de dependências com **npm**

---

## 🛠️ Tecnologias utilizadas

| Tecnologia                              | Versão / Utilização                   |
| --------------------------------------- | ------------------------------------- |
| 🟢 **Node.js**                          | 24                                    |
| ⚡ **Express**                           | Framework para desenvolvimento da API |
| 🗃️ **SQLite**                          | Banco de dados relacional             |
| 🔷 **Prisma ORM**                       | 7.10.0                                |
| 🔌 **`@prisma/adapter-better-sqlite3`** | Adapter do Prisma para SQLite         |
| 🐳 **Docker**                           | Containerização da aplicação          |
| 🐳 **Docker Compose**                   | Orquestração do ambiente              |
| 📦 **npm**                              | Gerenciamento de dependências         |

---

## 📋 Pré-requisitos

Antes de iniciar o projeto, certifique-se de possuir:

* [Docker](https://www.docker.com/)
* Docker Compose
* Git

> **Observação:** não é necessário instalar o Node.js diretamente na máquina. A aplicação é executada dentro do container definido no projeto.

---

## 🚀 Instalação e execução

### 1. Clonar o repositório

```bash
git clone https://github.com/alewnardu/devbooks.git
```

### 2. Acessar o diretório do projeto

```bash
cd devbooks
```

### 3. Inicializar a aplicação

Execute:

```bash
docker compose up --build -d
```

O parâmetro `--build` solicita a reconstrução da imagem da aplicação.

O parâmetro `-d` executa os containers em segundo plano.

Para acompanhar os logs:

```bash
docker compose logs -f
```

---

## 🔎 Verificando o ambiente

Para verificar os containers em execução:

```bash
docker ps
```

A aplicação deverá estar sendo executada no container:

```text
devbooks_app
```

Como o projeto utiliza **SQLite**, não existe um container separado para banco de dados. O banco é armazenado em um arquivo SQLite utilizado pela aplicação.

---

## 📦 Instalação das dependências

Caso as dependências ainda não estejam instaladas no container da aplicação, execute:

```bash
docker exec -it devbooks_app npm install
```

Para verificar as dependências instaladas:

```bash
docker exec -it devbooks_app npm list
```

> **Observação:** dependendo da configuração do `Dockerfile` e dos volumes definidos no `docker-compose.yml`, o `npm install` pode ser executado durante a construção da imagem. Nesse caso, não será necessário executá-lo manualmente após cada inicialização.

---

## 🗄️ Banco de dados e Prisma

O projeto utiliza **SQLite** como banco de dados e **Prisma ORM** como ferramenta de mapeamento objeto-relacional.

A comunicação entre o Prisma e o SQLite é realizada utilizando o adapter:

```text
@prisma/adapter-better-sqlite3
```

O modelo de dados da aplicação está definido em:

```text
prisma/schema.prisma
```

### 🗂️ Banco SQLite

O banco de dados SQLite é armazenado em um arquivo:

```text
dev.db
```

Esse arquivo é gerado localmente a partir das migrações do Prisma e, normalmente, deve ser incluído no `.gitignore` para evitar versionar dados locais do banco.

### 🔄 Executar as migrações

Após iniciar o container da aplicação, execute:

```bash
docker exec -it devbooks_app npx prisma migrate dev
```

Esse comando utiliza o arquivo:

```text
prisma/schema.prisma
```

para criar ou atualizar a estrutura do banco de dados.

As migrações ficam armazenadas em:

```text
prisma/migrations/
```

### ⚙️ Gerar o Prisma Client

Após aplicar as migrações, execute:

```bash
docker exec -it devbooks_app npx prisma generate
```

Esse comando gera o **Prisma Client** de acordo com a estrutura definida no `schema.prisma`.

O código gerado pelo Prisma é utilizado pela aplicação para executar operações de leitura e escrita no banco de dados.

---

## ▶️ Execução completa

Para executar o projeto a partir de um clone novo:

```bash
git clone https://github.com/alewnardu/devbooks.git

cd devbooks

docker compose up --build -d

docker exec -it devbooks_app npm install

docker exec -it devbooks_app npx prisma migrate dev

docker exec -it devbooks_app npx prisma generate
```

Após a execução dos comandos, a API estará disponível em:

```text
http://localhost:3000/api
```

---

## 🌐 Acesso à API

A API pode ser acessada através do endereço:

**http://localhost:3000/api**

Os endpoints podem ser testados utilizando ferramentas de desenvolvimento de APIs, como o [Postman](https://www.postman.com/).

### 📮 Coleção do Postman

Para facilitar os testes, o projeto disponibiliza uma coleção do Postman contendo as requisições configuradas para a API.

**[📥 Importar coleção do Postman](devbooks.postman_collection.json)**

Para utilizá-la:

1. Abra o **Postman**.
2. Selecione **Import**.
3. Selecione o arquivo `devbooks.postman_collection.json`.
4. A coleção será adicionada ao ambiente do Postman.
5. Execute as requisições disponíveis para testar os endpoints.

---

## 📁 Estrutura do projeto

A estrutura principal do projeto está organizada da seguinte forma:

```text
devbooks/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── controllers/
│   │   ├── authors.controller.js
│   │   └── books.controller.js
│   │
│   ├── generated/
│   │   └── prisma/
│   │       ├── client.ts
│   │       └── ...
│   │
│   ├── lib/
│   │   └── prisma.js
│   │
│   ├── routes/
│   │   ├── authors.routes.js
│   │   └── books.routes.js
│   │
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── LICENSE
├── package-lock.json
├── package.json
├── prisma.config.ts
├── devbooks.postman_collection.json
└── README.md
```

> **Observação:** o arquivo `dev.db` é gerado localmente pelo SQLite e pode não aparecer no repositório caso esteja incluído no `.gitignore`.

---

## 🧪 Comandos úteis

### Verificar containers em execução

```bash
docker ps
```

### Visualizar logs da aplicação

```bash
docker compose logs -f
```

### Visualizar logs de um serviço específico

```bash
docker compose logs -f app
```

### Acessar o container da aplicação

```bash
docker exec -it devbooks_app sh
```

### Executar o Prisma Studio

```bash
docker exec -it devbooks_app npx prisma studio
```

O Prisma Studio permite visualizar e manipular os dados armazenados no banco SQLite através de uma interface web.

### Executar novamente as migrações

```bash
docker exec -it devbooks_app npx prisma migrate dev
```

### Gerar novamente o Prisma Client

```bash
docker exec -it devbooks_app npx prisma generate
```

### Parar a aplicação

```bash
docker compose down
```

> Como o banco utilizado é **SQLite**, os dados não são armazenados em um volume de um container PostgreSQL. Eles ficam no arquivo `dev.db`. Portanto, `docker compose down -v` não deve ser apresentado como o mecanismo principal para apagar o banco SQLite.

Para recriar o banco local a partir das migrações, caso o arquivo `dev.db` seja removido:

```bash
docker exec -it devbooks_app npx prisma migrate dev
```

---

## 📄 Licença

Este projeto está disponibilizado sob a licença **MIT**.

Consulte o arquivo [`LICENSE`](LICENSE) para obter os termos completos da licença.

---

## 👨‍💻 Autor

**Leonardo Araujo**

[![GitHub](https://img.shields.io/badge/GitHub-alewnardu-181717?style=for-the-badge\&logo=github)](https://github.com/alewnardu)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Leonardo%20Araujo-0A66C2?style=for-the-badge\&logo=linkedin)](https://www.linkedin.com/in/leonardo-araujo-8b8637247/)

---

## 🤝 Contribuições

Contribuições, sugestões e feedbacks são bem-vindos.

Para contribuir com o projeto:

1. Faça um **fork** do repositório.

2. Crie uma branch para sua alteração:

   ```bash
   git checkout -b minha-alteracao
   ```

3. Realize as modificações necessárias.

4. Faça o commit:

   ```bash
   git commit -m "feat: descrição da alteração"
   ```

5. Envie a branch para o repositório remoto:

   ```bash
   git push origin minha-alteracao
   ```

6. Abra um **Pull Request**.

---

<p align="center">
  Desenvolvido como parte das atividades acadêmicas da disciplina
  <strong>Programação para Web II</strong> — UNITINS.
</p>
