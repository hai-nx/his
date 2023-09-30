<template>
    <div class="x-nav">
        <nav class="x-nav-top">
            <div class="x-nav-top-left">
                <label class="x-nav-top-toggle" for="x-nav-sidebar-check">
                    <i class="bi bi-list"></i>
                </label>

                <a href="#" class="x-nav-brand">
                    <img src="../assets//logo.png" alt="logo">
                </a>

                <ul class="x-nav-list">
                    <li class="x-nav-list-item" v-for="(item, index) in dataSource" :key="index">
                        <x-nav-item :data-source="item" @click="handleClick"></x-nav-item>
                    </li>
                </ul>
            </div>

            <div class="x-nav-right">
                <slot></slot>
            </div>
        </nav>

        <input type="checkbox" hidden id="x-nav-sidebar-check" class="x-nav-sidebar-check">

        <label for="x-nav-sidebar-check" class="x-nav-overlay"></label>

        <nav class="x-nav-sidebar">
            <div class="x-nav-sidebar-header">
                <label class="x-nav-sidebar-toggle" for="x-nav-sidebar-check">
                    <i class="bi bi-list"></i>
                </label>
                <a href="#" class="x-nav-brand">
                    <img src="../assets//logo.png" alt="logo">
                </a>

            </div>
            <ul class="x-nav-sidebar-list">
                <li class="x-nav-sidebar-list-item" v-for="(item, index) in dataSource" :key="index">
                    <!-- <x-nav-item :data-source="item"></x-nav-item> --> {{ item.label }}
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import { XItemType } from './'

export default defineComponent({
    name: 'XNav',
    props: {
        dataSource: {
            type: Object as PropType<Array<XItemType>>
        }
    },
    setup(props, { emit }) {
        const handleClick = (item: XItemType) => {
            emit('click', item)
        }

        return {
            handleClick
        }
    }
})
</script>

<style>
.x-nav-top {
    background-color: var(--x-nav-background-color);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    color: var(--x-nav-color);
    display: flex;
    height: var(--x-nav-height);
    line-height: var(--x-nav-height);
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    z-index: 9;
}

.x-nav-top-toggle {
    display: none;
    cursor: pointer;
    float: left;
    height: var(--x-nav-height);
    line-height: var(--x-nav-height);
    padding: 0 12px;
}

.x-nav-top-toggle:hover {
    background-color: var(--x-nav-background-color-active);
}

.x-nav-top-toggle i {
    font-size: 20px;
}

.x-nav-brand {
    float: left;
    text-align: center;
    display: flex;
    align-items: center;
    height: var(--x-nav-height);
    line-height: var(--x-nav-height);
    margin: 0 12px;
}

.x-nav-brand img {
    max-height: 32px;
}

.x-nav-list {
    float: left;
    list-style: none;
    padding-left: 0;
}

.x-nav-list > li {
    display: inline-block;
    vertical-align: top;
}

.x-nav-right {
    float: right;
    height: 40px;
    line-height: 40px;
}

/* nav sidebar */
.x-nav-overlay {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);

    animation: fadein linear 0.2s;
    z-index: 9;
}

.x-nav-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 320px;
    max-width: 100%;
    background-color: #fff;

    transform: translateX(-100%);
    opacity: 0;
    transition: transform linear 0.2s, opacity linear 0.2s;
    z-index: 9;
}

.x-nav-sidebar-check:checked~.x-nav-overlay {
    display: block;
}

.x-nav-sidebar-check:checked~.x-nav-sidebar {
    transform: translateX(0%);
    opacity: 1;
}

.x-nav-sidebar-header {
    height: 40px;
    line-height: 40px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.x-nav-sidebar-toggle {
    cursor: pointer;
    float: left;
    margin-left: .5rem;
    margin-right: .5rem;
    padding-left: 12px;
    padding-right: 12px;
}

.x-nav-sidebar-toggle:hover {
    background-color: red;
}

.x-nav-sidebar-list {
    margin-top: 40px;
}

/* .x-nav-sidebar-list-item {
    text-decoration: none;
    color: #333;
    display: block;
    padding: 8px;
} */

@media (max-width: 1023px) {
    .x-nav-top .x-nav-top-toggle {
        display: block;
    }

    .x-nav-list {
        display: none;
    }
}

@keyframes fadein {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>