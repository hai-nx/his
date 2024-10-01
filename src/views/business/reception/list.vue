<script setup lang="ts">
import { MenuItem } from '@/components/menuitem';
import { ref } from 'vue'

const title = ref("Danh sách bệnh nhân")
const breadcrumbs = ref<Array<MenuItem>>([
    { key: '1', label: 'Đón tiếp', icon: '', path: '' },
    { key: '2', label: 'Danh sách bệnh nhân', icon: '', path: '' }
]);
const extras = ref<Array<MenuItem>>([
    { key: '1', icon: 'bi bi-question-circle-fill', path: '' },
    { key: '2', icon: 'bi bi-chat-left-dots', path: '' }
]);

</script>

<template>
    <d-page-container :fluid="true" :title="title" :breadcrumb="breadcrumbs" :extra="extras">
        <template #actions>
            <d-button>
                Tieeps don
            </d-button>
        </template>

        <table>
            <tr>
                <th>1</th>
                <th>3</th>
                <th>2</th>
                <th>4</th>
            </tr>
            <tr>
                <td>hihihihihihihi</td>
                <td>hihihihihihihi</td>
                <td>hihihihihihihi</td>
                <td>hihihihihihihi</td>
            </tr>
            <tr>
                <td>hihihihihihihi</td>
            </tr>
            <tr>
                <td>hihihihihihihi</td>
            </tr>
        </table>
    </d-page-container>
</template>

<style scoped>
table,
th,
td {
    border: 1px solid;
}
</style>