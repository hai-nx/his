<template>
    <div class="d-flex flex-column me-2 x-nav-item" :class="depth !== 0 ? 'sub' : ''">
        <span class="px-2">{{ label }}</span>
        <ul class="x-nav-item__dropdown">
            <li v-for="child in children" :key="child.key">
                <x-menu-item :label="child.label" 
                            :path="child.path" 
                            :children="child.children"
                            :icon="child.icon"
                            :index="depth + 1">
                </x-menu-item>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { XItemType } from "./data";

export default defineComponent({
    name: "XMenuItem",
    props: {
        label: {
            type: String,
            required: true
        },
        icon: {
            type: String
        },
        path: {
            type: String
        },
        children: {
            type: Object as PropType<Array<XItemType>>
        },
        type: {
            type: String
        },
        depth: {
            type: Number,
            required: true
        }
    },
    setup() {
        return {

        }
    },
});
</script>

<style scoped>
.x-nav-item {
    display: block;
    cursor: pointer;
    position: relative;
    background-color: #333;
}

.x-nav-item__dropdown {
    line-height: 32px;
    list-style: none;
    display: none;
    margin: 0;
	padding: 0px;
	min-width: 10em;

    transition: all .3s ease;

    opacity: 1;
}

.x-nav-item:hover {
    background-color: red;

    transition: all .3s ease;
}

.x-nav-item:hover>.x-nav-item__dropdown {
    display: block;
    position: absolute;
    top: 100%;

    transition: opacity  5s linear;
}

.x-nav-item:hover .sub > ul {
    top: 0;
    left: 100%;
}

</style>