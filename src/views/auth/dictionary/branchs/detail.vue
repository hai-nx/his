<template>
    <div class="container mt-3">
        <form>
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h4>Chi nhánh</h4>
                <div class="flex-shrink-0">
                    <button type="button" class="btn btn-sm btn-outline-dark rounded-1 px-4 me-2" @click="onCancel()">
                        <span>Hủy</span>
                    </button>
                    <button type="submit" class="btn btn-sm btn-primary rounded-1 px-4">
                        <span>Lưu</span>
                    </button>
                </div>
            </div>

            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <label class="col-md-2 col-form-label" for="name">Mã chi nhánh</label>
                        <div class="col-md-4">
                            <input type="text" id="name" class="form-control form-control-sm"/>
                        </div>
                    </div>

                    <div class="row">
                        <label class="col-md-2 col-form-label" for="name">Tên chi nhánh</label>
                        <div class="col-md-10">
                            <input type="text" id="name" class="form-control form-control-sm"/>
                        </div>
                    </div>

                    <div class="row">
                        <label class="col-md-2 col-form-label" for="name">Địa chỉ</label>
                        <div class="col-md-10">
                            <input type="text" id="name" class="form-control form-control-sm"/>
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
    }
}
</script>

<style>
    
</style>