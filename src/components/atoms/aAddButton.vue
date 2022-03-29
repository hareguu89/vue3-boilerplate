<script setup lang="ts">
import aIcon from './aIcon.vue'
import { computed, reactive } from 'vue'

defineEmits(['add-click'])
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: '상품 추가',
    },
})

const state = reactive({
    computedClasses: computed(() => {
        const disabled = props.disabled ? 'disabled' : ''
        return ['button', disabled]
    }),
})
</script>

<template>
    <button
        :class="state.computedClasses"
        :disabled="props.disabled"
        type="button"
        @click="$emit('add-click')"
    >
        <div class="label">{{ props.label }}</div>
        <a-icon name="Add-item" />
    </button>
</template>

<style lang="scss" scoped>
.button {
    @apply flex items-center justify-center bg-hive-bluegray-300 h-45 w-full rounded-smd cursor-pointer gap-12 text-hive-navy-200;
}
.label {
    @apply h6 text-hive-navy-200;
}
</style>
