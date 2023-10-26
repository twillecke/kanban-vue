<script setup lang="ts">
defineProps(["board", "column", "card"]);
</script>

<template>
	<div :style="{'background-color': card.color }" class="card" draggable="true" @dragstart="board.selectCard(column, card)"
		@dragend="board.resetCard()" @dragover="board.swap(card)">
		<div class="card-title">
			{{ card.title }} (<span class="card-estimative">{{ card.estimative }}</span>)
		</div>
		<div>
			<button class="card-increase-estimative" @click="board?.increaseEstimative(column, card)">+</button>
			<button class="card-increase-estimative" @click="board?.decreaseEstimative(column, card)">-</button>
			<button @click="board.deleteCard(column, card.idCard)">delete</button>
		</div>
	</div>
</template>

<style scoped>
.card {
    text-align: center;
    width: 100%;
    height: 80px;
    background-color: #F3E779;
    border: 1px solid #CCC;
    margin-bottom: 10px;
    padding-bottom: 0.5rem;
    border-radius: 5px;
    transition: border-color 0.3s; /* Add a smooth transition effect on border-color */
}

.card:hover {
    border-color: #999; /* Change the border color on hover */
}

.card-title {
	padding: 15px;
}

button{
	margin: 2px;
	border-radius: 5px;
	border: solid 1px #AAA;
}
</style>