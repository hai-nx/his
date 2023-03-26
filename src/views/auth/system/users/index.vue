<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <router-link :to="{ name: 'system' }">
                    Hệ thống
                </router-link>
                <h1>Người dùng</h1>
            </div>

            <div>
                <button class="btn btn-primary rounded-1 px-4" @click="onAddNew()">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm người dùng</span>
                </button>
            </div>
        </div>

        <div class="card">
            <div class="card-body p-0">
                <div class="table-responsive text-nowrap">
                    <table class="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th scope="col" width="50px">#</th>
                            <th scope="col" width="150px">Mã người dùng</th>
                            <th scope="col" min-width="300px">Họ tên</th>
                            <th scope="col" width="150px">Chức danh</th>
                            <th scope="col" width="100px">Trạng thái</th>
                            <th scope="col" width="100px"> </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(user, index) in users" :key="user.id" @dblclick="onEdit(user.id)">
                            <th>{{ index + 1 }}</th>
                            <td>{{ user.username }}</td>
                            <td>{{ user.fullname }}</td>
                            <td>{{ user.role }}</td>
                            <td>{{ user.inactive }}</td>
                            <td>
                                <button class="btn btn-outline-primary border-0 btn-sm me-2" title="Sửa">
                                    <i class="bi bi-pen"></i>
                                </button>

                                <button class="btn btn-outline-danger border-0 btn-sm" title="Xóa" @click.stop="onDelete(role.id)">
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
    name: 'UserPage',
    data() {
        return {
            users: []
        }
    },
    created() {
        this.getAll();
    },
    methods: {
        getAll() {
            this.users = [
                { id:1, username: 'username1', fullname: 'fullname1', role: 'admin', inactive:1 },
                { id:2, username: 'username2', fullname: 'fullname2', role: 'admin', inactive:1 },
                { id:3, username: 'username3', fullname: 'fullname3', role: 'admin', inactive:1 },
                { id:4, username: 'username4', fullname: 'fullname4', role: 'admin', inactive:1 },
            ]
        },
        onAddNew() {
            this.$router.push({ name: 'user-detail' });
        },
        onEdit(id) {
            this.$router.push({ name: 'user-detail-edit', params: { id: id }});
        },
        onDelete(id) {
            console.log(id)
        }
    },
}
</script>

<style>
    
</style>