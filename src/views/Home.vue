<script setup lang="ts">
import { ref, reactive } from 'vue'

const state = reactive({
    testText: 'test',
})
const count = ref(0)
</script>

<template>
    <div>helllllllllllllllllllllllo</div>
</template>

<style scoped>
.message {
    @apply font-bold;
}
</style>
