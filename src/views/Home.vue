<script setup lang="ts">
import AIcon from '@/components/atoms/aIcon.vue'
import AAddButton from '@/components/atoms/aAddButton.vue'
import ABaseModal from '@/components/atoms/aBaseModal.vue'
import { ref } from 'vue'

const baseModal = ref<InstanceType<typeof ABaseModal>>()
const test = () => {
    baseModal.value?.open()
}
</script>

<template>
    <a-icon name="Spinner" />
    <a-add-button />
    <a-base-modal ref="baseModal">
        <template #default>안녕하세요</template>
    </a-base-modal>
    <button @click="test">Press Me</button>
</template>

<style scoped>
.message {
    @apply font-bold;
}
</style>
