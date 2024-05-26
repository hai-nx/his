<script setup lang="ts">

import { PropType, defineEmits, defineProps } from "vue";

const props = defineProps({
    dataSource: {
        type: Object,
    },
    columns: {
        type: Object,
    }
});

</script>

<template>
    <a-table :columns="columns" :data-source="dataSource" :pagination="false" bordered>
        <template #bodyCell="{ column, record }">
            <v-slot name="column" :column="column">
                {{ record[column.key] }}
            </v-slot>

            <!-- <template v-if="column.key === 'action'">
                            <span>
                                <a>Invite</a>
                                <a-divider type="vertical" />
                                <a>Delete</a>
                                <a-divider type="vertical" />
                                <a class="ant-dropdown-link">
                                    More actions
                                    <down-outlined />
                                </a>
                            </span>
                        </template> -->
        </template>
    </a-table>
</template>
