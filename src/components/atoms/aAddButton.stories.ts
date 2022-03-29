import AAddButton from './aAddButton.vue'

export default {
    title: 'atoms/AAddButton',
    component: AAddButton,
    argTypes: {
        label: '',
    },
}

const Template = (args) => ({
    components: { AAddButton },
    setup() {
        return { args }
    },
    template: '<a-add-button :label="args.label" />',
})

export const Default = Template.bind({})

Default.args = {
    label: '상품 추가',
}
