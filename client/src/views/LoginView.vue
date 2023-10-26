<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/AuthStore'

const username = ref("");
const password = ref("");

const authStore = useAuthStore()

</script>

<template>
    <input type="text" placeholder="*user" v-model="username" />
    <input type="text" placeholder="*password" v-model="password">
    <button @click="authStore.login(username, password)">Login</button>
</template>