<template>
    <div class="x-nav-item" :class="depth !== 0 ? 'sub' : ''">
        <span class="x-nav-item-label">{{ dataSource.label }}</span>
        
        <ul class="x-nav-item-dropdown" v-if="dataSource.children?.length">
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

<style scoped>
.x-nav-item {
    display: block;
    position: relative;
    cursor: pointer;
    background-color: aqua;
    color: red;
}

.x-nav-item:hover {
    background-color: #333;
    color: #fff;
    transition: all linear 0.2s;
}

.x-nav-item:hover > .x-nav-item-dropdown {
    display: block;
}

.x-nav-item-label {
    padding-left: 12px;
    padding-right: 12px;
}

.x-nav-item-dropdown {
    display: none;
    position: absolute;
    padding-left: 0;
    list-style: none;
    top: 100%;
    left: 0;

    background-color: blue;
}

.x-nav-item-dropdown > li {
    min-width: 200px;
    height: 36px;
    line-height: 36px;
}

.sub > .x-nav-item-dropdown {
    top: 0;
    left: 100%;
}

/* .x-nav-item:hover {
    background-color: #333;
    color: #fff;
    transition: all linear 0.2s;
}
.x-nav-item:hover > .x-nav-item-dropdown {
    display: block;
    position: absolute;
    
} */
</style>