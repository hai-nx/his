<template>
    <div class="table-responsive">
        <table class="table table-striped table-bordered table-sm table-hover" cellspacing="0" width="100%">
            <thead>
                <tr v-for="(column, index) in columns" :key="index">
                    <th scope="col">{{ column.header }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in items" :key="index">
                    <th>{{ item }}</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
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