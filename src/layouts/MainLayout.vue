<script setup lang="ts">
import { defineProps } from "vue";
import XLayoutHeader from "../components/XLayoutHeader.vue";

</script>

<template>
    <div class="main-layout">
        <div>
            <x-layout-header></x-layout-header>
        </div>

        <div>
            <slot></slot>
        </div>
    </div>
</template>

<style>
.main-layout {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: #ECECEC;
    height: 100%;
    width: 100%;
}
</style>