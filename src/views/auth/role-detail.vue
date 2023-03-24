<template>
    <div class="container mt-3">
        <form @submit.prevent="onSave()">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h3>Vai trò</h3>

                <div>
                    <button type="submit" class="btn btn-primary rounded-1 px-4 me-2">
                        <span>Lưu</span>
                    </button>
                    <button type="button" class="btn btn-outline-primary rounded-1 px-4" @click="onCancel()">
                        <span>Hủy</span>
                    </button>
                </div>
            </div>


            <div class="card mb-3">
                <div class="card-body">
                    <div class="row">
                        <h5 class="card-title">Vai trò</h5>
                    </div>

                    <div class="row">
                        <label class="col-md-2 col-form-label" for="code">Mã vai trò</label>
                        <div class="col-md-3">
                            <input type="text" id="code" class="form-control form-control-sm" />
                        </div>

                        <label class="col-md-2 col-form-label" for="name">Tên vai trò</label>
                        <div class="col-md-5">
                            <input type="text" id="name" class="form-control form-control-sm" />
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-md-2 col-form-label" for="name">Mô tả</label>
                        <div class="col-md-10">
                            <input type="text" id="name" class="form-control form-control-sm" />
                        </div>
                    </div>

                    <div class="row mt-4">
                        <h5 class="card-title">Quyền hạn</h5>
                    </div>

                    <div class="row mb-3">
                        <label class="col-md-2 col-form-label" for="name">Ghi chú</label>
                        <div class="col-md-10">
                            <input type="text" id="name" class="form-control form-control-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        onSave() {

        },
        onCancel() {
            this.$router.push({ name: 'role' })
        }
    },
}
</script>

<style>
</style>