<script setup lang="ts">
import { AxiosResponse } from 'axios'
import AIcon from '@/components/atoms/aIcon.vue'
import ABaseModal from '@/components/atoms/aBaseModal.vue'
import { ref, reactive, onMounted } from 'vue'
import { fetchMessage } from '../services/fetchers'

interface Istate {
    isVisible: boolean
    message: AxiosResponse<string> | null
}

const state = reactive<Istate>({ isVisible: false, message: null })
const baseModal = ref<InstanceType<typeof ABaseModal> | null>(null)

const test = (): void => {
    state.isVisible = !state.isVisible
}
onMounted(async () => {
    let data = await fetchMessage()
    state.message = data
})
</script>

<template>
    <a-icon name="Spinner" />
    <a-base-modal ref="baseModal">
        <template #default>안녕하세요</template>
    </a-base-modal>
    <button @click="test">Press Me</button>
    <div>
        메세지 :
        {{ state.message }}
    </div>
</template>

<style scoped>
.message {
    @apply font-bold;
}
</style>
