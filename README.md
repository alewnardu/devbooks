# 🌐 Atividade Prática Avaliativa (A1) — Programação para Web II

> Repositório da **Atividade Prática Avaliativa (A1)** da disciplina **Programação para Web II**, do curso de **Tecnologia em Análise e Desenvolvimento de Sistemas (TADS)** — 4º período, **UNITINS — Palmas/TO**.

Este projeto foi desenvolvido com o objetivo de aplicar, de forma prática, conceitos relacionados ao desenvolvimento de aplicações web, construção de APIs, persistência de dados, ORM e utilização de ambientes conteinerizados.

---

## 📚 Sobre o projeto

A aplicação consiste em uma API desenvolvida com **Node.js** e **Express**, utilizando **Prisma ORM** para comunicação com o banco de dados.

O ambiente de desenvolvimento é executado por meio do **Docker Compose**, permitindo que as principais dependências do projeto sejam inicializadas de forma padronizada.

### Principais componentes

* API REST desenvolvida com **Express**
* Persistência de dados utilizando **SQLite**
* Mapeamento objeto-relacional com **Prisma ORM**
* Containerização da aplicação e do banco de dados
* Gerenciamento de dependências com **npm**

---

## 🛠️ Tecnologias utilizadas

| Tecnologia                       | Versão / Utilização           |
| -------------------------------- | ----------------------------- |
| 🟢 **Node.js**                   | 24                            |
| ⚡ **Express**                    | Framework para API            |
| 🐘 **PostgreSQL**                | 17                            |
| 🔷 **Prisma ORM**                | 7.10.0                        |
| 🔌 **Prisma PostgreSQL Adapter** | Integração com PostgreSQL     |
| 🐳 **Docker**                    | Containerização               |
| 🐳 **Docker Compose**            | Orquestração dos containers   |
| 📦 **npm**                       | Gerenciamento de dependências |

---

## 📋 Pré-requisitos

Antes de iniciar o projeto, certifique-se de possuir:

* [Docker](https://www.docker.com/)
* Docker Compose
* Git

> **Observação:** não é necessário instalar Node.js diretamente na máquina. Esses serviço será executado por meio do container definido no projeto.

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

### 3. Inicializar os containers

Execute:

```bash
docker compose up --build -d
```

O parâmetro `--build` garante que a imagem da aplicação seja construída novamente quando necessário.

O parâmetro `-d` executa os containers em segundo plano.

Para acompanhar os logs da aplicação:

```bash
docker compose logs -f
```

---

## 🔎 Verificando os containers

Para verificar se os containers estão em execução:

```bash
docker ps
```

O ambiente deverá apresentar os containers definidos no `docker-compose.yml`, que neste caso será a aplicação Node.

---

## 📦 Instalação das dependências

Caso as dependências ainda não tenham sido instaladas no container da aplicação, execute:

```bash
docker exec -it devbooks_app npm install
```

Para verificar as dependências instaladas:

```bash
docker exec -it devbooks_app npm list
```

---

## 🗄️ Banco de dados e Prisma

O projeto utiliza **SQLite** como banco de dados e **Prisma ORM** para gerenciamento da camada de persistência, por meio do Prisma SQLite Adapter.

### Executar as migrações

Após os containers estarem em execução, aplique as migrações:

```bash
docker exec -it devbooks_app npx prisma migrate dev
```

Esse comando cria ou atualiza a estrutura do banco de dados de acordo com o arquivo:

```text
prisma/schema.prisma
```

As migrações geradas ficam armazenadas em:

```text
prisma/migrations/
```

> **Importante:** este projeto utiliza **SQL**. Portanto, será gerado um arquivo `dev.db` na raiz do projeto, que é normalmente ignorado pelo Git.

### Gerar o Prisma Client

Depois de configurar o banco e aplicar as migrações:

```bash
docker exec -it devbooks_app npx prisma generate
```

Esse comando lê o `schema.prisma` e gera o **Prisma Client**, utilizado pela aplicação para realizar operações no banco de dados.

---

## ▶️ Ordem recomendada para executar o projeto

Para uma instalação limpa, a sequência recomendada é:

```bash
git clone https://github.com/alewnardu/devbooks.git
cd devbooks

docker compose up --build -d

docker exec -it devbooks_app npm install

docker exec -it devbooks_app npx prisma migrate dev

docker exec -it devbooks_app npx prisma generate
```

Após a execução desses comandos, a API estará disponível em:

**http://localhost:3000/api**

---

## 🌐 Acesso à API

Com o ambiente em execução, utilize:

```text
http://localhost:3000/api
```

Você pode testar os endpoints utilizando ferramentas como:

* [Plataforma Postman](https://www.postman.com/)

Disponibilização do arquivo JSON da coleção do Postman/Insomnia com todas as rotas configuradas para testes imediatos:
* [Coleção do Postman](devbooks.postman_collection)

---

## 📁 Estrutura do projeto

Uma visão simplificada da organização:

```text
devbooks/
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
|   ├── controllers/
|   |    ├── authors.controller.js
|   |    └── books.controller.js
|   ├── generated/
|   |    └── prisma/
|   |         ├── client.ts
|   |         └── ...
    ├── lib/
|   |    └── prisma.js
|   ├── routes/
|   |    ├── authors.routes.js
|   |    └── books.routes.js
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── dev.db
├── devbooks.postman_collection 
├── docker-compose.yml
├── Dockerfile
├── LICENSE
├── package-lock.json
├── package.json
├── prisma.config.ts
└── README.md
```

> A estrutura vai evoluir conforme a evolução do projeto, considerando os comandos a serem executados e as funcionalidades implementadas.

---

## 🧪 Comandos úteis

### Visualizar containers em execução

```bash
docker ps
```

### Visualizar logs

```bash
docker compose logs -f
```

### Visualizar apenas os logs da aplicação

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

### Parar os containers

```bash
docker compose down
```

### Parar os containers e remover os volumes

> ⚠️ Isso também remove os dados armazenados no volume do banco de dados.

```bash
docker compose down -v
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

Para contribuir:

1. Faça um **fork** do projeto.
2. Crie uma branch para sua alteração.
3. Realize as modificações.
4. Faça o commit das alterações.
5. Envie um **Pull Request**.

---

<p align="center">
  Desenvolvido como parte das atividades acadêmicas da disciplina
  <strong>Programação para Web II</strong> — UNITINS.
</p>
