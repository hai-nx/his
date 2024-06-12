<script setup lang="ts">
import { ref } from 'vue';


const title = ref("Bàn làm việc")
</script>

<template>
    <x-layout :title="title" :show-header="true">
        <v-input placeholder="hihiiih"></v-input>
        <v-input disabled value="ádkjhgashdhasgdjhagsjhd"> asda sdas asd á</v-input>
        <v-button>huhuhuhuh</v-button>
        <v-button type="primary">huhuhuhuh</v-button>
        <v-button type="dashed">huhuhuhuh</v-button>
    </x-layout>
</template>