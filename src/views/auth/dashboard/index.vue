<script setup lang="ts">
import { ref } from 'vue';


const title = ref("Bàn làm việc")


function hihi (payload: any) {
    console.log(payload)
}
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
            <d-input type="date" placeholder="dd/mm/yyyy"></d-input>

            <d-button>huhuhuhuh</d-button>
            <d-input readonly placeholder="hihiiih a"></d-input>
            <d-input disabled value="ádkjhgashdhasgdjhagsjhd"> asda sdas asd á</d-input>
            <d-button type="primary" size="large" rounded title="hi ha hi ha">
                <!-- primary #icon -->
                <template #icon>
                    <i class="bi bi-person-circle"></i>
                </template>
            </d-button>
            <d-divider></d-divider>
            <d-divider type="horizontal"></d-divider>
            <a-divider></a-divider>



            <a-button>a-button</a-button>
            <d-button type="primary" icon="bi bi-person-circle" @click="hihi">huhu hihihi hu uhyu h
                primary</d-button>

            <d-input maxlength="15"></d-input>

            <d-dropdown>
                <d-button>dropdown</d-button>
                <template #overlay>
                    <d-button-group type="vertical">
                        <d-button>1</d-button>
                        <d-button @click="hihi('hihihihi')">1123123123123</d-button>
                        <d-button>1</d-button>
                        <d-button>12312311</d-button>
                        <d-button>1123 12 31 231 23 123</d-button>
                        <d-button>1123123</d-button>
                        <d-button>11</d-button>
                    </d-button-group>
                </template>
            </d-dropdown>
            <d-dropdown-button :options="['go', 'python', 'rust', 'javascript']" :default="'go'" class="select">
            </d-dropdown-button>

        </div>


    </x-layout>
</template>