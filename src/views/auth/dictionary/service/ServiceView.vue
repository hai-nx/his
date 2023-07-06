<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h3>Danh mục dịch vụ kỹ thuật</h3>

      <div>
        <a-button
          type="primary"
          style="margin-right: 10px"
          @click="handleImportExcel"
        >
          Nhập từ Excel
        </a-button>
        <input type="file" ref="fileInput" style="display: none" />

        <a-button type="primary" @click="handleAdd">
          <i class="bi bi-plus-lg me-2"></i>
          <span>Thêm dịch vụ kỹ thuật</span>
        </a-button>
      </div>
    </div>

    <a-table
      class="ant-table-striped"
      size="middle"
      :columns="columns"
      :data-source="items"
      bordered
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'inactive'">
          <span>
            <a-tag v-if="record.inactive" color="error">
              <span>Ngừng hoạt động</span>
            </a-tag>
            <a-tag v-else color="success">
              <span>Hoạt động</span>
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <button
              class="btn btn-outline-primary border-0 btn-sm me-2"
              title="Sửa"
              @click="handleEdit(record)"
            >
              <i class="bi bi-pen"></i>
            </button>

            <button
              class="btn btn-outline-danger border-0 btn-sm"
              title="Xóa"
              @click="handleDelete(record)"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </span>
        </template>
      </template>
    </a-table>

    <teleport to="body">
      <ServiceDetailView
        :visible="visible"
        :data="record"
        @toggle="handleToggle"
      />
      <ServiceDetailImportView
        :visible="visibleImportExcel"
        @toggle="handleToggleImportExcel"
      />
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Modal } from "ant-design-vue";
import { ServiceModel } from "@/models";
import { serviceService } from "@/services";
import ServiceDetailView from "./ServiceDetailView.vue";
import ServiceDetailImportView from "./ServiceDetailImportView.vue";
// import * as XLSX from "xlsx";

export default defineComponent({
  name: "BranchView",
  setup() {
    const columns = ref([
      { title: "Mã dịch vụ", key: "code", dataIndex: "code", width: 200 },
      { title: "Tên dịch vụ", key: "name", dataIndex: "name", width: 500 },
      {
        title: "Đơn vị tính",
        key: "serviceUnitName",
        dataIndex: "serviceUnitName",
        width: 500,
      },
      {
        title: "Nhóm dịch vụ",
        key: "serviceGroupName",
        dataIndex: "serviceGroupName",
        width: 500,
      },
      {
        title: "Trạng thái",
        key: "inactive",
        dataIndex: "inactive",
        width: 200,
      },
      { title: "Xử lý", key: "action", width: 100 },
    ]);
    const items = ref<ServiceModel[]>([]);
    const record = ref<ServiceModel>();
    const visible = ref<boolean>(false);
    const visibleImportExcel = ref<boolean>(false);

    // lấy dữ liệu
    const handleLoad = () => {
      items.value = [];
      serviceService.getAll().then((res) => {
        items.value = res.data.result;
      });
    };

    // thêm mới
    const handleAdd = () => {
      show(true, undefined);
    };

    // sửa
    const handleEdit = (item: ServiceModel) => {
      show(true, item);
    };

    // xóa
    const handleDelete = (item: ServiceModel) => {
      if (item.id !== undefined) {
        let id = item.id!;
        Modal.confirm({
          content:
            "Bạn có thực sự muốn dịch vụ kỹ thuật <" +
            item.code +
            "> đã chọn không?",
          okText: "Đồng ý",
          cancelText: "Bỏ qua",
          onOk() {
            serviceService
              .delete(id)
              .catch((error) => {
                Modal.error({ content: error.message, okText: "Đồng ý" });
              })
              .finally(() => {
                handleLoad();
              });
          },
          onCancel() {
            Modal.destroyAll();
          },
        });
      }
    };

    // ẩn / hiện chi tiết
    const handleToggle = (result: boolean) => {
      visible.value = !visible.value;
      if (result) {
        record.value = undefined;
        handleLoad();
      }
    };

    // ẩn / hiện import excel
    const handleToggleImportExcel = (result: boolean) => {
      visibleImportExcel.value = !visibleImportExcel.value;
      if (result) {
        record.value = undefined;
        handleLoad();
      }
    };

    const handleImportExcel = () => {
      showImportExcel(true);
    };

    const show = (v: boolean, r: ServiceModel | undefined) => {
      record.value = r;
      visible.value = v;
    };

    const showImportExcel = (v: boolean) => {
      visibleImportExcel.value = v;
      console.log(visibleImportExcel.value);
    };

    return {
      items,
      record,
      columns,
      visible,
      visibleImportExcel,
      handleAdd,
      handleDelete,
      handleEdit,
      handleLoad,
      handleToggle,
      handleImportExcel,
      handleToggleImportExcel,
    };
  },
  mounted() {
    this.handleLoad();
  },
  components: {
    ServiceDetailView,
    ServiceDetailImportView,
  },
});
</script>