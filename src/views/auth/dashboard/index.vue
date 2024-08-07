<script setup lang="ts">
import { ref } from 'vue';


const title = ref("Bàn làm việc")
</script>

<template>
    <x-layout :title="title" :show-header="true">
        <div
            style="display: grid; row-gap: .2rem; column-gap: .2rem; grid-template-columns: repeat(4, minmax(160px, auto) 1fr); grid-template-rows: repeat(20, auto);">
            <v-text>Mã bệnh nhân</v-text>
            <v-input placeholder="hihiiih"></v-input>
            <v-text>Họ tên</v-text>
            <v-input placeholder="hihiiih"></v-input>
            <div></div>
            <v-input-number></v-input-number>
            <div></div>
            <v-input type="number" placeholder="hihiiih"></v-input>
            <label>Giưới tính</label>
            <v-input placeholder="hihiiih"></v-input>
            <label>Năm sinh</label>
            <v-input placeholder="hihiiih"></v-input>

            <v-button>huhuhuhuh</v-button>
            <v-input readonly placeholder="hihiiih"></v-input>
            <v-input disabled value="ádkjhgashdhasgdjhagsjhd"> asda sdas asd á</v-input>

            <v-button type="primary">huhuhuhuh</v-button>
            <v-button type="dashed">huhuhuhuh</v-button>


            <dv-button>huhuhuhuh</dv-button>
            <dv-button type="primary">huhu primary</dv-button>
        </div>


    </x-layout>
</template>