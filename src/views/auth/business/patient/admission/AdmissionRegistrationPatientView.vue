<template>
    <a-modal width="100%" class="full-modal" :visible="show" @cancel="onCancel">
        <div>Đăng kysw khám</div>
    </a-modal>
</template>

<script lang="ts">
import { ref, watch } from 'vue';


export default  {
    name: "AdmissionRegistrationPatientView",
    props: {
        visible: {
            type: Boolean,
            default: true
        }
    },
    setup(props, { emit }) {
        // lấy từ prop để đảm bảo là nếu được tạo từ view khác sẽ không hiển thị luôn :D
        // mà khi set mặc định là true thì nếu được gọi trực tiếp từ roouter thì cũng hiển thị luôn
        const show = ref<boolean>(props.visible); 
            console.log(props.visible)
            console.log(show.value)

        watch(props, (value) => {
            if (value.visible) {
                show.value = true;
            }
            else {
                show.value = false;
            }
        })

        const onCancel = () => {
            show.value = false;
            emit("cancel");
        }

        return {
            onCancel,
            show
        }
    }
}
</script>

<style>
.full-modal {
    max-width: 100%;
    top: 0;
    padding-bottom: 0;
    margin: 0;
}
.full-modal .ant-modal-content {
    display: flex;
    flex-direction: column;
    height: calc(100vh);
  }

  .full-modal .ant-modal-body {
    flex: 1;
  }
</style>