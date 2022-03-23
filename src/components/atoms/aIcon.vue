<template>
    <div class="flex justify-center items-center">
        <component :is="computedName" :class="computedClasses" />
    </div>
</template>

<script lang="ts">
import Box from '../../assets/svg/icon-box.svg'
import PolyBag from '../../assets/svg/icon-polybag.svg'
import LnbSimply from '../../assets/svg/icon-lnb-simply.svg'
import LnbFold from '../../assets/svg/icon-lnb-fold.svg'
import GlobalTabItemClose from '../../assets/svg/icon-global-tab-item-close.svg'
import GlobalTabItemAdd from '../../assets/svg/icon-global-tab-item-add.svg'
import LogoGroup from '../../assets/svg/logo.svg'
import Receiving from '../../assets/svg/icon-lnb-receiving.svg'
import Shipping from '../../assets/svg/icon-lnb-shipping.svg'
import Return from '../../assets/svg/icon-lnb-return.svg'
import Stock from '../../assets/svg/icon-lnb-stock.svg'
import Report from '../../assets/svg/icon-lnb-report.svg'
import Mdm from '../../assets/svg/icon-lnb-mdm.svg'
import Manual from '../../assets/svg/icon-lnb-manual.svg'
import ko from '../../assets/svg/icon-kr.svg'
import en from '../../assets/svg/icon-en.svg'
import cn from '../../assets/svg/icon-cn.svg'
import ChevronDownUser from '../../assets/svg/icon-user-chevron-down.svg'
import Logo from '../../assets/svg/icon-logo.svg'
import YesbeeText from '../../assets/svg/icon-yesbee-text.svg'
import Hamburger from '../../assets/svg/icon-hamburger.svg'
import Search from '../../assets/svg/icon-search.svg'
import Barcode from '../../assets/svg/icon-barcode.svg'
import Print from '../../assets/svg/icon-print.svg'
import Calendar from '../../assets/svg/icon-calendar.svg'
import Download from '../../assets/svg/icon-download.svg'
import Order from '../../assets/svg/icon-order.svg'
import Refresh from '../../assets/svg/icon-refresh.svg'
import Cargo from '../../assets/svg/icon-cargo.svg'
import Won from '../../assets/svg/icon-won.svg'
import Dollar from '../../assets/svg/icon-dollar.svg'
import Yuan from '../../assets/svg/icon-yuan.svg'
import Percent from '../../assets/svg/icon-percent.svg'
import Plus from '../../assets/svg/icon-plus.svg'
import Add from '../../assets/svg/icon-add.svg'
import AddItem from '../../assets/svg/icon-add-item.svg'
import AddBlue from '../../assets/svg/icon-add-blue.svg'

import Pdf from '../../assets/svg/icon-pdf.svg'
import Excel from '../../assets/svg/icon-excel.svg'
import Warn from '../../assets/svg/icon-warn.svg'
import Tooltip from '../../assets/svg/icon-tooltip.svg'
import LeftArrow from '../../assets/svg/icon-left-arrow.svg'
import RadioOn from '../../assets/svg/button-radio-on.svg'
import RadioOff from '../../assets/svg/button-radio-off.svg'
import CheckOn from '../../assets/svg/button-check-on.svg'
import CheckOff from '../../assets/svg/button-check-off.svg'
import ChevronDown from '../../assets/svg/chevron-down.svg'
import ChevronDownDisabled from '../../assets/svg/chevron-down-disabled.svg'
import Delete from '../../assets/svg/icon-delete-on.svg'
import DeleteDisabled from '../../assets/svg/icon-delete-off.svg'
import Spinner from '../../assets/svg/icon-spinner.svg'
import Seperator from '../../assets/svg/icon-seperator.svg'
import SeperatorDark from '../../assets/svg/icon-seperator-dark.svg'
import ChevronDownSearchBox from '../../assets/svg/icon-chevron-down-searchbox.svg'
import AscArrow from '../../assets/svg/icon-asc-arrow.svg'
import DescArrow from '../../assets/svg/icon-desc-arrow.svg'
import Ea from '../../assets/svg/icon-ea.svg'

import { computed } from 'vue'

interface IconProps {
    name: string
    disabled: boolean
}

export default {
    name: 'AIcon',
    components: {
        Box,
        PolyBag,
        LnbSimply,
        LnbFold,
        GlobalTabItemAdd,
        GlobalTabItemClose,
        LogoGroup,
        Receiving,
        Shipping,
        Return,
        Stock,
        Report,
        Mdm,
        Manual,
        ko,
        en,
        cn,
        ChevronDownUser,
        Logo,
        YesbeeText,
        Hamburger,
        Add,
        AddItem,
        ChevronDownSearchBox,
        SeperatorDark,
        Seperator,
        Spinner,
        Delete,
        DeleteDisabled,
        ChevronDownDisabled,
        ChevronDown,
        Search,
        Barcode,
        Print,
        Calendar,
        Download,
        Order,
        Refresh,
        Cargo,
        Won,
        Dollar,
        Yuan,
        Percent,
        Plus,
        Warn,
        Tooltip,
        LeftArrow,
        RadioOn,
        RadioOff,
        CheckOn,
        CheckOff,
        Pdf,
        Excel,
        AscArrow,
        DescArrow,
        AddBlue,
        Ea,
    },
    props: {
        name: {
            type: String,
            required: true,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    setup(props: IconProps) {
        const computedClasses = computed((): string[] => {
            const isInclude = ['Search', 'Refresh', 'LeftArrow'].includes(
                props.name
            )
            const isClickable = isInclude && !props.disabled
            const result = isClickable
                ? 'cursor-pointer transform hover:scale-125 duration-300'
                : ''
            return [result]
        })

        const computedName = computed((): string => {
            const { disabled, name } = props
            const isDisable = disabled && name.includes('ChevronDown')
            const result = isDisable ? `${name}Disabled` : name
            return result
        })

        return {
            computedClasses,
            computedName,
        }
    },
}
</script>
