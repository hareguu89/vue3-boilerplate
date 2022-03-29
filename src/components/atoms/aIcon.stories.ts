import AIcon from './aIcon.vue'

/* argTypes는 컴포넌트에 필요한 인수와 타입을 작성하는 것이다. 여기서 text 혹은 size 같이 글자로 작성해야하는 타입 혹은 다른 타입을 control키에서 변경이 가능하다. */
export default {
    title: 'atoms/AIcon',
    component: AIcon,
    argTypes: {
        name: {
            options: [
                'Box',
                'PolyBag',
                'LnbSimply',
                'LnbFold',
                'GlobalTabItemAdd',
                'GlobalTabItemClose',
                'LogoGroup',
                'Receiving',
                'Shipping',
                'Return',
                'Stock',
                'Report',
                'Mdm',
                'Manual',
                'ko',
                'en',
                'cn',
                'ChevronDownUser',
                'Logo',
                'YesbeeText',
                'Hamburger',
                'Add',
                'AddItem',
                'ChevronDownSearchBox',
                'SeperatorDark',
                'Seperator',
                'Spinner',
                'Delete',
                'DeleteDisabled',
                'ChevronDownDisabled',
                'ChevronDown',
                'Search',
                'Barcode',
                'Print',
                'Calendar',
                'Download',
                'Order',
                'Refresh',
                'Cargo',
                'Won',
                'Dollar',
                'Yuan',
                'Percent',
                'Plus',
                'Warn',
                'Tooltip',
                'LeftArrow',
                'RadioOn',
                'RadioOff',
                'CheckOn',
                'CheckOff',
                'Pdf',
                'Excel',
                'AscArrow',
                'DescArrow',
                'AddBlue',
                'Ea',
            ],
            control: { type: 'select' },
        },
        disabled: {
            controls: { type: 'radio' },
        },
    },
}

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { AIcon },
    setup() {
        return { args }
    },
    template: '<a-icon :name="args.name" :disalbed="args.diabled" />',
})

export const Basic = Template.bind({})

Basic.args = {
    name: 'Spinner',
    disabled: false,
}
