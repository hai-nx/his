<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <router-link :to="{ name: 'system' }">
                    Danh mục
                </router-link>
                <h2>Chi nhánh</h2>
            </div>

            <div>
                <button class="btn btn-sm btn-primary rounded-1 px-4" @click="onAddNew()">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm chi nhánh</span>
                </button>
            </div>
        </div>

        <div class="card">
            <div class="card-body p-0">
                <div class="table-responsive text-nowrap">
                    <his-table :items="items" :columns="columns">
                        <template #table-row="{ item }">
                            <td width="1px">
                                <button class="btn btn-outline-primary border-0 btn-sm me-2" title="{{ item.first_name }}" @click.stop="onEdit(item)">
                                    <i class="bi bi-pen"></i>
                                </button>

                                <button class="btn btn-outline-danger border-0 btn-sm" title="Xóa" @click.stop="onDelete(item)">
                                    <i class="bi bi-x-lg"></i>
                                </button>
                            </td>
                        </template>
                    </his-table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
// import HisTable from '@/components/his-table'
import { HisTable } from '@/components'

export default {
    data() {
        return {
            items: [
                { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
                { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
                { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
                { age: 38, first_name: 'Jami', last_name: 'Carney' }
            ],
            columns: [
                { header: 'Mã chi nhánh', field: 'first_name', width: '200' },
                { header: 'Tên chi nhánh', field: 'last_name', width: '400', display: 'bg-primary' },
                { header: 'Địa chỉ', field: 'address', width: '400' },
                { header: 'Trạng thái', field: 'age', width: '50' },
            ]
        }
    },
    methods: {
        onAddNew() {
            this.$router.push({ name: 'branch-detail' })
        },
        onEdit(id) {
            console.log(id)
        },
        onDelete(id) {
            console.log(id)
        }
    },
    components: {
        HisTable
    }
}
</script>

<style scoped>
    
</style>