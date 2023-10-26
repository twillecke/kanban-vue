<script setup lang="ts">
import { ref } from 'vue';
defineProps(["board", "column"]);
let cardTitle = ref("");
</script>

<template>
	<div class="new-card">
		<input class="new-card-input" type="text" v-model="cardTitle" @keypress.enter="board?.addCard(column.name, cardTitle, 0)" placeholder="New Card"/>
	</div>
</template>

<style scoped>
.new-card {
	text-align: center;
	padding: 20px;
}

.new-card-input {
    padding: 0.35rem;
    border-radius: 5px;
    border: solid 2px #DDD;
    transition: border-color 0.3s; 
}
.new-card-input:focus {
    border-color: lightblue; 
	outline: none;
}
</style>