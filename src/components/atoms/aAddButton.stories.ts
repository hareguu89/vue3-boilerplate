import AAddButton from './aAddButton.vue'

export default {
    title: 'AAddButton',
    component: AAddButton,
    argTypes: {},
}

const Template = (args) => ({
    components: { AAddButton },
    setup() {
        return { args }
    },
    template: '<a-add-button />',
})

export const Primary = Template.bind({})

Primary.args = {}
