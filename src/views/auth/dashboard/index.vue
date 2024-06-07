<script setup lang="ts">
import { ref } from 'vue';


const title = ref("Bàn làm việc")
</script>

<template>
    <x-layout :title="title" :show-header="true">

    </x-layout>
</template>