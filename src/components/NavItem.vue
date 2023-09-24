<template>
    <div class="x-nav-item" :class="depth !== 0 ? 'sub' : ''">
        <span class="x-nav-item__label">{{ dataSource.label }}</span>
        
        <ul class="x-nav-item__dropdown" v-if="dataSource.children?.length">
            <li v-for="(item, index) in dataSource.children" :key="index">
                <x-nav-item :dataSource="item" :depth="depth + 1" />
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
        dataSource: {
            type: Object as PropType<XItemType>,
            required: true
        },
        depth: {
            type: Number,
            default: 0
        }
    },
    setup(props, { emit }) {
        const handleClick = (key: string) => {
            // emit('click', key)
            console.log(props.dataSource.path + ' ---- ' + props.depth)
        }

        return {
            handleClick
        }
    }
})
</script>