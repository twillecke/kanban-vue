<script setup lang="ts">
import { ref } from 'vue';
defineProps(["board"]);
let columnName = ref("");
</script>

<template>
	<div class="new-column">
		<input class="new-column-input" type="text" v-model="columnName" @keypress.enter="board?.addColumn(columnName, true)" placeholder="New Column"/>
	</div>
</template>

<style scoped>
.new-column {
	text-align: center;
}

.new-column-input {
    padding: 0.35rem;
    border-radius: 5px;
    border: solid 2px #DDD;
    transition: border-color 0.3s; 
}
.new-column-input:focus {
    border-color: lightblue; 
	outline: none;
}
</style>