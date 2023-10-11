<script setup lang="ts">
import { ref } from 'vue';

defineProps(["board"]);
let cardTitle = ref("");
let columnName = ref("");
</script>

<template>
    <div v-if="board">
        <h3>{{ board.name }} <span id="estimative">{{ board.getEstimative() }}</span></h3>
        <div class="columns">
            <div class="column" v-for="column in board.columns">
                <h3>{{ column.name }} {{ column.getEstimative() }}</h3>
                <div class="card" v-for="card in column.cards">
                    {{ card.title }} {{ card.estimative }}
                    <br />
                    <button @click="board?.increaseEstimative(card)">+</button><button>-</button>
                </div>
                <div class="card new-card">
                    <input type="text" v-model="cardTitle" />
                    <button v-on:click="
                        board?.addCard(column.name, cardTitle, 0)
                        ">
                        Add
                    </button>
                </div>
            </div>
            <div class="column new-column">
                {{ columnName }}
                <input type="text" v-model="columnName" />
                <button v-on:click="board?.addColumn(columnName, true)">
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