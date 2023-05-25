import express from "express";
import pgp from "pg-promise";
import Board from "./entity/Board";
import Column from "./entity/Column";
import Card from "./entity/Card";
const app = express();
const connection = pgp()('postgres://postgres:137716@localhost:5432/app')
app.get("/boards", async function(req, res) {
    const boardsData = await connection.query("select name from thiago.board", []);
    const boards: Board[] = [];
    for (const boardData of boardsData) {
        boards.push(new Board(boardData.name));
    }
    res.json(boards);
});
app.get("/boards/:idBoard/columns", async function(req, res) {
    const columnsData = await connection.query("select name, has_estimative from thiago.column where id_board = $1", [req.params.idBoard]);
    const columns: Column[] = [];
    for (const columnData of columnsData) {
        columns.push(new Column(columnData.name, columnData.has_estimative));
    }
    res.json(columns);
});
app.get("/boards/:idBoard/columns/:idColumn/cards", async function(req, res) {
    const cardsData = await connection.query("select title, estimative from thiago.card where id_column = $1", [req.params.idColumn]);
    const cards: Card[] = [];
    for (const cardData of cardsData) {
        cards.push(new Card(cardData.title, cardData.estimative));
    }
    res.json(cards);
});
app.listen(3000);  