<template>
    <div class="x-nav-item" :class="depth !== 0 ? 'sub' : ''">
        <span class="x-nav-item__label">{{ itemSource.label }}</span>
        
        <ul class="x-nav-item__dropdown" v-if="itemSource.children?.length">
            <li v-for="(item, index) in itemSource.children" :key="index">
                <x-nav-item :itemSource="item" :depth="depth + 1" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { XItemType } from './'

export default defineComponent({
    name: 'XNavItem',
    props: {
        itemSource: {
            type: Object as PropType<XItemType>,
            required: true
        },
        depth: {
            type: Number,
            required: true
        }
    },
    setup(props, { emit }) {
        const handleClick = (key: string) => {
            // emit('click', key)
            console.log(props.itemSource.path + ' ---- ' + props.depth)
        }

        return {
            handleClick
        }
    }
})
</script>