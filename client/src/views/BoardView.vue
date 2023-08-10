<script setup lang="ts">
import axios from "axios";
import { computed, onMounted, reactive, ref } from "vue";
import Board from "../entities/Board";

const data: { board: Board | undefined } = reactive({ board: undefined });
let cardTitle = ref("");
let columnName = ref("");

onMounted(async () => {
	const response = await axios({
		url: "http://localhost:3000/boards/1",
		method: "get",
	});
	const boardData = response.data;
	const board = new Board(boardData.name);
	for (const columnData of boardData.columns) {
		board.addColumn(columnData.name, columnData.estimative);
		for (const cardData of columnData.cards) {
			board.addCard(
				columnData.name,
				cardData.cardTitle,
				cardData.estimative
			);
		}
	}
	data.board = board;
});
</script>

<template>
	<div v-if="data.board">
		<h3>{{ data.board.name }} {{ data.board.getEstimative() }}</h3>
		<div class="columns">
			<div class="column" v-for="column in data.board.columns">
				<h3>{{ column.name }} {{ column.getEstimative() }}</h3>
				<div class="card" v-for="card in column.cards">
					{{ card.title }} {{ card.estimative }}
					<br />
					<button @click="data.board?.increaseEstimative(card)">+</button><button>-</button>
				</div>
				<div class="card new-card">
					<input type="text" v-model="cardTitle" />
					<button v-on:click="
						data.board?.addCard(column.name, cardTitle, 0)
						">
						Add
					</button>
				</div>
			</div>
			<div class="column new-column">
				{{ columnName }}
				<input type="text" v-model="columnName" />
				<button v-on:click="data.board?.addColumn(columnName, true)">
					Add
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.columns {
	display: flex;
	flex-direction: row;
}

.column {
	width: 200px;
	text-align: center;
	background-color: #ccc;
	margin-right: 5px;
	padding: 10px;
	border: 1px solid #000;
}

.new-column {
	background-color: #eee;
	border: 1px dashed #ccc;
	display: block;
}

.card {
	text-align: center;
	width: 100%;
	height: 80px;
	background-color: #f3e779;
	border: 1px solid #000;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.new-card {
	background-color: #eee;
	border: 1px dashed #ccc;
	display: block;
}
</style>
