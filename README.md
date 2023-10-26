# Kanban Fullstack

[![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-14-brightgreen?style=flat-square&logo=node.js)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey?style=flat-square&logo=express)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-13-336791?style=flat-square&logo=postgresql)](https://www.postgresql.org/)
[![Jest](https://img.shields.io/badge/Jest-27.0.5-C21325?style=flat-square&logo=jest)](https://jestjs.io/)
## Sobre o projeto
Este é um projeto de desenvolvimento full stack utilizando as tecnologias
TypeScript, Node.js, Vue.js e banco de dados PostgreSQL. Foram
utilizadas boas práticas de Clean Code Architecture, princípios SOLID e Test Driven 
Development tantos no backend quanto no frontend.

O tema central deste projeto é a implementação de um quadro de gestão de atividades, 
semelhante ao Trello. Você implementará a criação, organização e gerenciamento de
cartões e colunas de atividades, além de ter suporte para recursos avançados como "drag
and drop". Tudo isso implementado com testes unitários e de integração, 
usando arquitetura REST e GraphQL para APIs robustas e seguras.

## Instalação e Execução
1. Clone o Repositório: `git clone https://github.com/seu-usuario/nome-do-repositorio.git`

2. Crie um banco de dados PostgreSQL o projeto e o popule com o script: `create.sql`

3. Instale as dependências do servidor:
`cd server`
`npm install`

3. Instale as dependências do cliente:
`cd ../client`
`npm install`

4. Suba o servidor do express.js:
`npx nodemon main.ts`

6. Suba o cliente do Vue:
`npm run dev`

7. Acesse o aplicativo em:
`http://localhost:5173/`

## Execução de testes
Foram implementados testes unitários e de integração no frontend e no backend
com Jest.js

- Testes de frontend: `yarn test`
- Testes de backend: `npx jest --runInBand`


