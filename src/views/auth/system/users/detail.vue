<template>
    <div class="container mt-3">
        <form @submit.prevent="onSave()">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="flex-shrink-0">
                    <h3>Người dùng</h3>
                </div>

                <div class="flex-shrink-0">
                    <button type="button" class="btn btn-outline-dark rounded-1 px-4 me-2" @click="onCancel()">
                        <span>Hủy</span>
                    </button>
                    <button type="submit" class="btn btn-primary rounded-1 px-4">
                        <span>Lưu</span>
                    </button>
                    
                </div>
            </div>


            <div class="card rounded-1 mb-3">
                <div class="card-body">
                    <div class="row">
                        <label class="col-md-2 col-form-label" for="name">Tên đăng nhập</label>
                        <div class="col-md-10">
                            <input type="text" id="name" class="form-control form-control-sm" />
                        </div>
                    </div>

                    <div class="row">
                        <label class="col-md-2 col-form-label" for="name">Họ tên đệm</label>
                        <div class="col-md-4">
                            <input type="text" id="name" class="form-control form-control-sm" />
                        </div>

                        <label class="col-md-2 col-form-label" for="name">Tên</label>
                        <div class="col-md-4">
                            <input type="text" id="name" class="form-control form-control-sm" />
                        </div>
                    </div>

                    <div class="row">
                        <label class="col-md-2 col-form-label" for="name">Nhóm người dùng</label>
                        <div class="col-md-10">
                            <input type="text" id="name" class="form-control form-control-sm" />
                        </div>
                    </div>

                    <div class="row">
                        <label class="col-md-2 col-form-label" for="name">Nhân viên</label>
                        <div class="col-md-10">
                            <input type="combo" id="name" class="form-control form-control-sm" />
                        </div>
                    </div>

                    <div class="row">
                        <label class="col-md-2 col-form-label" for="name">Vai trò và quyền hạn</label>
                        <div class="col-md-10">
                            <input type="text" id="name" class="form-control form-control-sm" />
                        </div>
                    </div>

                    <div class="row">
                        <label class="col col-form-label" for="name"></label>
                        <div class="col-md-10">
                            <input id="inactive" type="checkbox" class="form-check-input me-2" :value="isRemember"/>
                            <label for="inactive" class="form-check-label">
                                Ngừng theo dõi
                            </label>
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
            this.$router.push({ name: 'users' })
        }
    },
}
</script>

<style>
</style>