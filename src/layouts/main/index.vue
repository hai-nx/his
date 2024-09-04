<script setup lang="ts">
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/store";

</script>

<template>
    <div class="layout-wrapper layout-main">
        <d-navbar></d-navbar>
        <div class="layout-content">
            <slot></slot>
        </div>
    </div>
</template>

<style>
.layout-main {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>