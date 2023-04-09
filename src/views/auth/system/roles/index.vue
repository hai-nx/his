<template>
    <div class="container-fluid">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <h1>Vai trò</h1>
            </div>

            <div>
                <button class="btn btn-primary rounded-1 px-4" @click="onAddNew()">
                    <i class="bi bi-plus-lg me-2"></i>
                    <span>Thêm vai trò</span>
                </button>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <table>
                    <thead>
                        <tr>
                            <th scope="col" width="50px">#</th>
                            <th scope="col" width="150px">Mã vai trò</th>
                            <th scope="col" width="300px">Tên vai trò</th>
                            <th scope="col" min-width="100px">Mô tả</th>
                            <th scope="col" width="100px"> </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr v-for="(role, index) in roles" :key="role.id" @click="handleEdit(role.id)">
                            <th>{{ index + 1 }}</th>
                            <td>{{ role.code }}</td>
                            <td>{{ role.name }}</td>
                            <td>{{ role.description }}</td>
                            <td>
                                <button class="btn btn-outline-primary border-0 btn-sm me-2">
                                    <i class="bi bi-pen"></i>
                                </button>

                                <button class="btn btn-outline-danger border-0 btn-sm" @click.stop="handleDelete(role.id)">
                                    <i class="bi bi-x-lg"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            datasource: []
        }
    },
    created() {
        this.getAll();
    },
    methods: {
        getAll() {
            
        },
        onAddNew() {
            this.$router.push({ name: 'role-detail' })
        },
        onEdit() {

        },
        onDelete() {
            
        }
    },
}
</script>

<style>
    
</style>