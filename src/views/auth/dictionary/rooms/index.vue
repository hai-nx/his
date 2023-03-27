<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <router-link :to="{ name: 'system' }">
                    Danh mục
                </router-link>
                <h2>Phòng</h2>
            </div>

            <div>
                <button class="btn btn-sm btn-primary rounded-1 px-4" @click="onAddNew()">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm phòng</span>
                </button>
            </div>
        </div>

        <div class="card">
            <div class="card-body p-0">
                <div class="table-responsive text-nowrap">
                    <table class="table table-striped table-bordered table-sm table-hover" cellspacing="0" width="100%">
                    <thead>
                        <tr>
                            <th scope="col" width="50px">#</th>
                            <th scope="col" width="150px">Mã chi nhánh</th>
                            <th scope="col" min-width="300px">Tên chi nhánh</th>
                            <th scope="col" width="150px">Địa chỉ</th>
                            <th scope="col" width="100px">Trạng thái</th>
                            <th scope="col" width="100px"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(item, index) in items" :key="item.id" @dblclick="onEdit(item.id)">
                            <th>{{ index + 1 }}</th>
                            <td>{{ item.code }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.address }}</td>
                            <td>{{ item.status }}</td>
                            <td>
                                <button class="btn btn-outline-primary border-0 btn-sm me-2" title="Sửa" @click.stop="onEdit(item.id)">
                                    <i class="bi bi-pen"></i>
                                </button>

                                <button class="btn btn-outline-danger border-0 btn-sm" title="Xóa" @click.stop="onDelete(item.id)">
                                    <i class="bi bi-x-lg"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [

            ]
        }
    },
    methods: {
        onAddNew() {
            this.$router.push({ name: 'room-detail' })
        },
        onEdit(id) {
            console.log(id)
        },
        onDelete(id) {
            console.log(id)
        }
    },
}
</script>

<style scoped>
    
</style>