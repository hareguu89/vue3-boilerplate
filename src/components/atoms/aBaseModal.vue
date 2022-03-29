<template>
    <teleport to="body">
        <div v-if="isVisible" :class="backdrop">
            <div v-click-outside="outsideClick" class="modal-container">
                <slot name="default"></slot>
            </div>
        </div>
    </teleport>
</template>

<script setup lang="ts">
// import { vClickOutside } from 'v-click-outside'
import { computed, ref } from 'vue'

interface Props {
    direction?: string
    isOutsideClick?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    direction: 'center',
    isOutsideClick: true,
})

const isVisible = ref(false)

const backdrop = computed(() => {
    const containerCenter =
        props.direction === 'center'
            ? 'items-center justify-center'
            : 'justify-start'
    return ['backdrop', containerCenter]
})

// 부모 컴포넌트에서 접근하기 위한 함수.
const open = (): void => {
    console.log('open')
    isVisible.value = true
}

const close = (): void => {
    isVisible.value = false
}

const outsideClick = () => {
    if (props.isOutsideClick) {
        isVisible.value = false
    }
}

// defineExpose 해줘야 부모함수에서 접근 가능
defineExpose(
    // <{
    //     open(): void
    //     close(): void
    // }>
    {
        open,
        close,
    }
)
</script>

<style lang="scss" scoped>
.backdrop {
    @apply flex fixed bg-black bg-opacity-80 z-10 w-screen h-screen left-0 top-0;
}
</style>
