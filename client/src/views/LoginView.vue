<script setup lang="ts">
import { ref } from 'vue';

const username = ref("");
const password = ref("");


function login(username: string, password: string) {
    console.log("login");
}

</script>

<template>
    <input type="text" v-model="username" />
    <input type="password" v-model="password">
    <button @click="login(username, password)">Login</button>
</template>