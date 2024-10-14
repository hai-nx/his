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
    <div class="d-data-table">
        <table role="table" class="d-table">
            <thead>
                <tr>
                    <th v-for="(col, index) in columns" :key="index" style="width: 200px">
                        <span>{{ col.label }}</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-if="itemCount > 0">
                    <tr v-for="(item, rowIndex) in items" :key="rowIndex" class="d-table-tr">
                        <td v-for="(col, columnIndex) in columns" :key="columnIndex" class="d-table-td">
                            <slot name="cell" :column="col" :row="item">
                                <span>{{ getObjectValue(item, col.key, "") }}</span>
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
    </div>
</template>

<style>
.d-data-table {
    overflow: auto;
    height: 100%;
    width: 100%;
    
}
.d-table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    table-layout: fixed;
}

.d-table td,
.d-table th {
    border: 1px solid #ddd;
    padding: 0px 8px;
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


.d-table-tr {
    height: 30px;
}
</style>