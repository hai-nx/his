<template>
    <nav class="x-nav">
        <div class="x-nav-brand">
            <a href="#">logo is here</a>
        </div>
        <ul class="x-nav-list">
            <li v-for="(item, index) in dataSource" :key="index">
                <x-nav-item :itemSource="item" :depth="0"/>
            </li>
        </ul>

        <div class="x-nav-right">
            <slot></slot>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { XItemType } from './'
import XNavItem from './NavItem.vue'

export default defineComponent({
    name: 'XNav',
    components: {
        XNavItem
    },
    props: {
        dataSource: {
            type: Object as PropType<Array<XItemType>>
        }
    },
    setup(props, { emit }) {
        const handleClick = (key: string) => {
            // emit('click', key)
            console.log(key)
        }

        return {
            handleClick
        }
    }
})
</script>