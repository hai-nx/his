    <template>
    <form>
        <a-modal
            :visible="show"
            :title="title"
            @cancel="handleCancel"
            width="1280px"
            :mask-closable="false"
        >
            <div class="container"></div>
        </a-modal>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from "vue";
import { DImpMestModel } from "@/models";

export default defineComponent({
    name: "PharmaceuticalImportFromAnotherStockView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        impExMestTypeId: {
            type: Number,
            required: true,
        },
        data: {
            type: Object as PropType<DImpMestModel>,
        },
    },
    setup(props, { emit }) {
        const title = ref<string>("Nhập từ kho khác");
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const fields = ref({ value: "id", label: "name" });
        const userColumns = ref({ value: "id", label: "userName" });

        const show = computed(() => props.visible);

        //#region Funtion
        const toggle = function () {
            emit("toggle", result);
        };
        //#endregion

        //#region Event
        const handleCancel = function () {
            toggle();
        };
        //#endregion

        return {
            show,
            title,
            handleCancel,
        };
    },
});
</script>

<style scoped>
</style>
