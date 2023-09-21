<template>
    <x-layout>
        <template #extra>
            <div>
                <a-button class="me-1">
                    <i class="bi bi-plus-lg me-2"></i>
                    Làm mới
                </a-button>
                <a-button class="me-1">
                    <i class="bi bi-plus-lg me-2"></i>
                    Thêm bênh nhân mới
                </a-button>
                <a-button class="me-1">
                    <i class="bi bi-check me-2"></i>
                    Kiểm tra thẻ BHYT
                </a-button>
            </div>
        </template>
        <template #action>
            <div class="row">
                <label class="col">Cửa số</label>
                <a-input class="x-input col"></a-input>
                <label class="col">Lấy số</label>
                <a-input class="x-input col"></a-input>
                <a-button class="col">
                    <i class="bi bi-check me-2"></i>
                    Gọi số tiếp theo
                </a-button>
            </div>
        </template>

        <div>
            <div>
                <label>Mã bệnh nhân</label>
            </div>
        </div>

    </x-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';



export default defineComponent({
    name: 'ReceptionDetailView',
    setup() {


        return {

        }
    }
})
</script>