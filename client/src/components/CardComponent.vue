<script setup lang="ts">

defineProps(["board", "column", "card"]);
</script>

<template>
    <div class="card">
        {{ card.title }} {{ card.estimative }}
        <br />
        <button @click="board?.increaseEstimative(card)">+</button><button>-</button>
    </div>
</template>

<style scoped>
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
</style>