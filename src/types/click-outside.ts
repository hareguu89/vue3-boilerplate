import { DirectiveBinding } from '@vue/runtime-core'

interface ClickOutsideElement extends HTMLElement {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __vueClickEventHandler__: any
}

export default {
    beforeMount: function (el: ClickOutsideElement, binding: DirectiveBinding) {
        const ourClickEventHandler = (event: MouseEvent) => {
            if (
                !el.contains(event.target as HTMLElement) &&
                el !== event.target
            ) {
                binding.value(event)
            }
        }

        el.__vueClickEventHandler__ = ourClickEventHandler

        document.addEventListener('click', ourClickEventHandler)
    },
    unmounted: function (el: ClickOutsideElement) {
        document.removeEventListener('click', el.__vueClickEventHandler__)
    },
}
