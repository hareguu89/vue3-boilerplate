<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
    <h1 class="message">{{ count }}</h1>
    <div>이것이 홈!</div>
</template>

<style scoped>
.message {
    @apply font-bold;
}
</style>
