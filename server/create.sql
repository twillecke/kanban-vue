DROP TABLE thiago.card;
DROP TABLE thiago.column;
DROP TABLE thiago.board;

CREATE SCHEMA IF NOT EXISTS thiago;

CREATE TABLE IF NOT EXISTS thiago.board (
    id_board serial primary key,
    name text
);

CREATE TABLE IF NOT EXISTS thiago.column (
    id_column serial primary key,
    id_board integer references thiago.board (id_board),
    name text,
    has_estimative boolean
);

CREATE TABLE IF NOT EXISTS thiago.card (
    id_card serial primary key,
    id_column integer references thiago.column (id_column),
    title text,
    estimative integer
);

INSERT INTO thiago.board (name) VALUES ('Projeto 1');

INSERT INTO thiago.column (id_column, id_board, name, has_estimative) VALUES (1, 1, 'Coluna A', true);
INSERT INTO thiago.column (id_column, id_board, name, has_estimative) VALUES (2, 1, 'Coluna B', true);
INSERT INTO thiago.column (id_column, id_board, name, has_estimative) VALUES (3, 1, 'Coluna C', true);

INSERT INTO thiago.card (id_card, id_column, title, estimative) VALUES (1, 1, 'Atividade 1', 3);
INSERT INTO thiago.card (id_card, id_column, title, estimative) VALUES (2, 1, 'Atividade 2', 2);
INSERT INTO thiago.card (id_card, id_column, title, estimative) VALUES (3, 1, 'Atividade 3', 1);
