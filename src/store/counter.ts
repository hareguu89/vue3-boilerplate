import { defineStore } from 'pinia'

export type Item = { name: string; url: string }

export const useStore = defineStore({
    id: 'cart',
    state: () => ({
        items: [] as Item[],
    }),
    getters: {
        itemsCount() {
            return this.itemsCount.length
        },
    },
    actions: {
        addItem(item: Item) {
            this.items.push(item)
        },
        removeItem(item: Item) {
            const i = this.items.findIndex((s) => s.name === item.name)
            if (i > -1) this.items.splice(i, 1)
        },
    },
})
