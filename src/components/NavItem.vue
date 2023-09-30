<template>
    <div class="x-nav-item" :class="depth !== 0 ? 'sub' : ''">
        <div class="x-nav-item-label" @click.stop="handleClick">
            <span href="#">{{ dataSource.label }}</span>

            <i v-if="dataSource.children?.length" class="bi bi-chevron-down ms-2"></i>
        </div>
        
        <ul class="x-nav-item-dropdown" v-if="allowShowChildren && dataSource.children?.length">
            <li v-for="(item, index) in dataSource.children" :key="index">
                <x-nav-item :dataSource="item" :depth="depth + 1" @click="handleChildrenClick"/>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent, ref } from 'vue'
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
        const allowShowChildren = ref(true);

        const handleClick = () => {
            emit('click', props.dataSource);
            // console.log('handleClick' + props.dataSource.key + ' ---- ' + props.depth)
        }

        const handleChildrenClick = (item: XItemType) => {
            if (props.depth === 0) {
                try {
                    allowShowChildren.value = false
                    emit('click', item)
                } catch (error) {
                    console.log(error)
                }
                finally {
                    // delay 1s để có thời gian đóng các item con.
                    setTimeout(() => allowShowChildren.value = true, 1000)
                }
            } else {
                emit('click', item);
            }
            // console.log('handleChildenClick: ' + item.key + ' ---- ' + props.depth)
        }

        return {
            handleClick,
            handleChildrenClick,
            allowShowChildren
        }
    }
})
</script>

<style scoped>
.x-nav-item {
    background-color: var(--x-nav-background-color);
    color: var(--x-nav-color);
    font-size: var(--x-nav-font-size);
    /* height: var(--x-nav-height); */
    display: block;
    position: relative;
    cursor: pointer;
}

.x-nav-item:hover {
    background-color: var(--x-nav-background-color-active);
    color: var(--x-nav-color-active);
    transition: all linear 0.2s;
}

.x-nav-item:hover > .x-nav-item-dropdown {
    display: block;
}

.x-nav-item-label {
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
}

.x-nav-item-label > span {
    font-size: var(--x-nav-font-size);
    white-space: nowrap;
}

.sub .x-nav-item-label > i {
    transform: rotate(-90deg);
    margin-right: -0.5rem;
}

.x-nav-item-dropdown {
    display: none;
    min-width: 200px;
    position: absolute;
    padding-left: 0;
    padding-top: 4px;
    list-style: none;
    top: 100%;
    left: 0;
}

.x-nav-item-dropdown > li {
    height: 36px;
    line-height: 36px;
    width: 100%;
}

.sub > .x-nav-item-dropdown {
    top: 0;
    left: 100%;
    padding-left: 4px;
    padding-top: 0;
}
</style>