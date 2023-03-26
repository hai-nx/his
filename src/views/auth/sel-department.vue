<template>
    <div class="container">
        <div class="card mx-auto mt-5 col-md-6">
            <div class="card-body">
                <div class="row">
                    <p class="h6">Chọn đơn vị làm việc</p>
                </div>
                
                <div class="row">
                    <label class="col-md-2 col-form-label" for="name">Khoa</label>
                    <div class="col-md-10">
                        <input type="text" id="name" class="form-control form-control-sm" />
                    </div>
                </div>
                    
                <div class="row mb-2">
                    <label class="col-md-2 col-form-label" for="name">Phòng</label>
                    <div class="col-md 10">
                        <input type="text" id="name" class="form-control form-control-sm" />
                    </div>
                </div>

                <div class="d-flex justify-content-end">
                    <button class="btn btn-primary" @click="selDepartment()">Chọn</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            departmentId: '',
            roomId: ''
        }
    },
    methods: {
        selDepartment() {
            // xử lý lưu khoa/ phòng được chọn

            // chuyển đến trang chủ
            this.$router.push({ name: 'dashboard' });
        }
    },
}
</script>

<style>
    
</style>