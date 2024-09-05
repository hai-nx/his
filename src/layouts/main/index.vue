<script setup lang="ts">
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuth, useMenu } from "@/store";


const menu = useMenu();
const { items } = storeToRefs(menu);

</script>

<template>
    <div class="main-layout-wrapper">
        <div class="layout-news">

        </div>

        <div class="layout-topbar">
            <d-menu :items="items">
            </d-menu>
        </div>

        <div class="layout-sidebar">

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
    height: 100%;
}

.layout-topbar {
    display: flex;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #d9d9d9;
    height: 48px;
    line-height: 48px;
    width: 100%;
    z-index: 997;
}

.layout-sidebar {
    display: none;
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
</style>