# 🌐 Atividade Prática Avaliativa (A1) - Programação para Web II
 Repositório da atividade avaliativa A1 da disciplina Programação para Web II do curso de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) — 4º período, UNITINS — Palmas/TO

Este projeto tem como objetivo apoiar as atividades práticas da disciplina, utilizando tecnologias modernas para desenvolvimento de aplicações web, APIs, bancos de dados e ferramentas de desenvolvimento.

---

## 🚀 Tecnologias

* 🟢 **Node.js 24**
* 🟢 **Express**
* 🐘 **PostgreSQL 17**
* 🔷 **Prisma ORM 7.10.0**
* 🔌 **Prisma PostgreSQL Adapter**
* 🐳 **Docker / Docker Compose**
* 📦 **npm**

---

## 📦 Instalação

1. Clone o repositório
```bash
git clone https://github.com/alewnardu/devbooks.git
```

2. Entre na pasta do projeto
```bash
cd devbooks
```

3. Levantar o servidor Node.js via docker-compose
```bash
docker-compose up --build
```

4. Verificar se o container do servidor Node.js está em execução
```bash
docker ps
```

5. Instalar as dependências do projeto
```bash
docker exec -it devbooks_app npm install
```

6. Verificar as dependências instaladas para o projeto
```bash
docker exec -it devbooks_app npm list
```

7. Executar as migrações do projeto (Será gerado um arquivo de migração dev.db)
```bash
docker exec -it devbooks_app npx prisma migrate dev
```

10. A API do projeto estará disponível em `http://localhost:3000/api`

---

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📝 Autor

| [<img src="https://avatars.githubusercontent.com/u/175759609?v=4&size=64" width="100px;"/><br /><sub>Leonardo Araujo</sub>](https://github.com/alewnardu) 
| :---: | :---: |

---

## 📝 Contribuições

Contribuições, feedback e sugestões são sempre bem vindos.