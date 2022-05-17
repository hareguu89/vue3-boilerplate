<script setup lang="ts">
import AIcon from '@/components/atoms/aIcon.vue'
import AAddButton from '@/components/atoms/aAddButton.vue'
import ABaseModal from '@/components/atoms/aBaseModal.vue'
import { ref, reactive, toRefs } from 'vue'

const baseModal = ref<InstanceType<typeof ABaseModal> | null>(null)

const test = (): void => {
    // baseModal.value.open()
    state.isVisible = !state.isVisible
}

const state = reactive({ isVisible: false })

const { isVisible } = toRefs(state)

console.log(typeof ABaseModal)
</script>

<template>
    <a-icon name="Spinner" />
    <a-add-button />
    <a-base-modal ref="baseModal">
        <template #default>안녕하세요</template>
    </a-base-modal>
    <button @click="test">Press Me</button>
    {{ isVisible }}
</template>

<style scoped>
.message {
    @apply font-bold;
}
</style>
