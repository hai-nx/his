<template>
    <div class="table-responsive">
        <table class="table table-striped table-bordered table-sm table-hover" cellspacing="0" width="100%">
            <thead>
                <tr>
                    <th scope="col" 
                        v-for="(column, index) in columns" 
                        :key="index" 
                        width="{{ column.width }}">
                        {{ column.header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, rowindex) in items" :key="rowindex">
                    <td v-for="(column, columnindex) in columns" :key="columnindex" :class="column.display">
                        {{ item[column.field] }}
                    </td>
                    <slot name="table-row" :item="item"></slot>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'HisTable',
    props: {
        items: {
            type: Array,
            required: true
        },
        columns: {
            type: Array,
            required: true
        }
    },
    data() {
        return {}
    }
}
</script>

<style>
    
</style>