<script setup lang="ts">
import { inject, onMounted, reactive } from "vue";
import Board from "../entities/Board";
import BoardService from "../services/BoardService";
import BoardComponent from "../components/BoardComponent.vue";
import DomainEvent from "../events/DomainEvent";
import { useRoute } from "vue-router";

const data: { board: Board | undefined } = reactive({ board: undefined });

const route = useRoute();
const idBoard = parseInt(route.params.idBoard as string);

onMounted(async () => {
	const boardService = inject("boardService") as BoardService;
	const board = await boardService.getBoard(idBoard);
	data.board = board;
	board.on("updatePositionMap", async function (event: DomainEvent) {
		await boardService.updatePositionMap(event.data);
	})

	board.on("addColumn", async function (event: DomainEvent) {
		const idColumn = await boardService.saveColumn(event.data);
		event.data.column.idColumn = idColumn;
	});
	board.on("addCard", async function (event: DomainEvent) {
		const idCard = await boardService.saveCard(event.data);
		event.data.card.idCard = idCard;
	});
	board.on("deleteColumn", async function (event: DomainEvent) {
		await boardService.deleteColumn(event.data.idBoard, event.data.idColumn);
	});
	board.on("deleteCard", async function (event: DomainEvent) {
		await boardService.deleteCard(event.data.idBoard, event.data.idColumn, event.data.idCard);
	});
	board.on("increaseEstimative", async function (event: DomainEvent) {
		await boardService.updateCard(event.data);
	});
	board.on("decreaseEstimative", async function (event: DomainEvent) {
		await boardService.updateCard(event.data);
	});
});
</script>

<template>
	<RouterLink to="/boards">Boards</RouterLink>
	<hr />
	<BoardComponent :board="data.board"></BoardComponent>
</template>

<style scoped></style>
