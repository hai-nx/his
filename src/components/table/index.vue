<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'
import { ColumnType } from '.';

const props = defineProps({
    items: {
        type: Array
    },
    columns: {
        type: Array as () => any
    },
    tableClass: { type: String },
    rowClass: { type: String }
})

const itemCount = computed(() => props.items?.length ?? 0)
const columnCount = computed(() => props.items?.length ?? 0)

function getObjectValue(object: any, path: string, defaultValue: any) {
    defaultValue = (typeof defaultValue == 'undefined') ? null : defaultValue

    var obj = object
    if (path.trim() != '') {
        var keys = path.split('.')
        keys.forEach(function (key) {
            if (obj !== null && typeof obj[key] != 'undefined' && obj[key] !== null) {
                obj = obj[key]
            } else {
                obj = defaultValue
                return
            }
        })
    }
    return obj
}

</script>

<template>
    <table role="table" class="d-table">
        <thead>
            <tr>
                <th v-for="(col, index) in columns" :key="index">
                    <span>{{ col.label }}</span>
                </th>
            </tr>
        </thead>
        <tbody>
            <template v-if="itemCount > 0">
                <tr v-for="(item, rowIndex) in items" :key="rowIndex">
                    <td v-for="(col, columnIndex) in columns" :key="columnIndex">
                        <slot name="cell" :column="col" :row="item">
                            {{ getObjectValue(item, col.key, "") }}
                        </slot>
                    </td>
                </tr>
            </template>
            <template v-else>
                <tr>
                    <td :colspan="columnCount">
                        <slot name="no-data"></slot>
                    </td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<style>
.d-table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

.d-table td,
.d-table th {
    border: 1px solid #ddd;
    padding: 8px;
}

.d-table tr:nth-child(even) {
    background-color: #f2f2f2;
}

.d-table tr:hover {
    background-color: #ddd;
}

.d-table th {
    padding-top: 4px;
    padding-bottom: 4px;
    text-align: left;
    background-color: #04AA6D;
    color: white;
}
</style>