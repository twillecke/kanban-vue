drop table if exists thiago.card;
drop table if exists thiago.column;
drop table if exists thiago.board;

create table thiago.board (
	id_board serial primary key,
	name text
);

create table thiago.column (
	id_column serial primary key,
	id_board integer references thiago.board (id_board),
	name text,
	has_estimative boolean
);

create table thiago.card (
	id_card serial primary key,
	id_column integer references thiago.column (id_column),
	title text,
	estimative integer,
	color text,
	index integer
);

insert into thiago.board (name) values ('Projeto 1');
insert into thiago.column (id_board, name, has_estimative) values (1, 'Coluna A', true);
insert into thiago.column (id_board, name, has_estimative) values (1, 'Coluna B', true);
insert into thiago.column (id_board, name, has_estimative) values (1, 'Coluna C', true);
insert into thiago.card (id_column, title, color, estimative) values (1, 'Atividade 1', 'lightblue', 3);
insert into thiago.card (id_column, title, color, estimative) values (1, 'Atividade 2', 'yellow', 2);
insert into thiago.card (id_column, title, color, estimative) values (1, 'Atividade 3', 'red', 1);
insert into thiago.card (id_column, title, color, estimative) values (1, 'Atividade 4', 'lightgreen', 2);
insert into thiago.card (id_column, title, color, estimative) values (1, 'Atividade 5', 'orange', 5);
insert into thiago.card (id_column, title, color, estimative) values (1, 'Atividade 6', 'white', 6);
insert into thiago.board (name) values ('Projeto 2');
insert into thiago.column (id_board, name, has_estimative) values (2, 'Coluna A', true);