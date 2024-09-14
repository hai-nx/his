<script setup lang="ts">
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuth, useMenu } from "@/store";


const menu = useMenu();
const { items } = storeToRefs(menu);

const news = ref<string | undefined>('1')

function newsClose() {
    news.value = undefined
}

</script>

<template>
    <div class="main-layout-wrapper">
        <div v-if="news" class="layout-news">
            <div class="layout-news-content">
                {{ news }}
            </div>
            <div class="layout-news-close" @click="newsClose">
                <i class="bi bi-x-lg"></i>
            </div>
        </div>

        <div class="layout-topbar">
            <div class="layout-topbar-start">
                <div class="topbar-menu-toggle">
                    <i class="bi bi-list"></i>
                </div>
                <div class="topbar-icon">
                    <div class="logo">
                        <i class="bi bi-house-fill"></i>
                        <!-- <img class="layout-logo" src="../../assets//images//logo.png" /> -->
                    </div>
                </div>
            </div>
            <div class="layout-topbar-center">
                <d-menu :items="items"></d-menu>
            </div>
            <div class="layout-topbar-end">
                <div>
                    <i class="bi bi-person-circle"></i>
                </div>
                <div>
                    <i class="bi bi-person-circle"></i>
                </div>
                <div>
                    <i class="bi bi-person-circle"></i>
                </div>
                <button>sádasdashdkjh</button>
            </div>
        </div>

        <div class="layout-sidebar">
            <div class="layout-sidebar-start"></div>
            <div class="layout-sidebar-center"></div>
            <div class="layout-sidebar-end"></div>
        </div>

        <div class="layout-main-container">
            <slot></slot>
        </div>

        <div class="layout-mask"></div>
    </div>
</template>

<style>
.main-layout-wrapper {
    display: flex;
    flex-direction: column;
    background-color: var(---d-main-background-color);
    height: 100vh;
}

.layout-news {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    gap: .5rem;
    background-color: var(--d-primary-color);
    color: var(--d-primary-contrast-color);
    padding: .15rem 2rem;
}

.layout-news .layout-news-content {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    min-width: 0;
}

.layout-news .layout-news-close {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
}

.layout-news .layout-news-close:hover {
    background-color: var(--d-primary-hover-color);
}

.layout-topbar {
    display: flex;
    align-items: center;
    gap: 6px;
    background-color: var(--d-background-color);
    border-bottom: 1px solid red;
    padding: 0 1rem;
    height: 44px;
    /* line-height: 44px; */
    width: 100%;
    z-index: 997;
}

.layout-topbar-start {
    display: inline-flex;
    gap: 6px;
}

.layout-topbar-center {
    flex: 1;
    height: 100%;
}

.layout-topbar-end {
    display: inline-flex;
    gap: 6px;
}




.layout-sidebar {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 240px;
    max-width: 100%;
    background-color: red;
    color: white;

    transform: translateX(-100%);
    opacity: 0;
    transition: transform linear 0.2s, opacity linear 0.2s;
    z-index: 998;
}

.layout-main-container {
    flex: 1;
    padding: 8px;
}

.layout-mask {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    background-color: #00000020;
    animation: fadein .15 linear;
}


@media screen and (max-width: 720px) {
    .layout-topbar {
        padding: 0 .5rem;
    }

    .layout-topbar .topbar-menu-toggle {
        display: flex;
    }

    .layout-topbar .topbar-menu {
        display: none;
    }
}
</style>