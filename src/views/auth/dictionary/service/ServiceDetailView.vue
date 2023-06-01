<template>
  <a-modal
    :visible="show"
    :title="title"
    @cancel="handleCancel"
    :mask-closable="false"
    width="960px"
  >
    <div class="container">
      <div class="row mb-1">
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-4">
              <label>Mã DV</label>
            </div>
            <div class="col-md-8">
              <a-input v-model:value="service.code" :disabled="loading" />
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-2">
              <label>Tên DV</label>
            </div>
            <div class="col-md-10">
              <a-input v-model:value="service.name" :disabled="loading" />
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-1">
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-4">
              <label>Mã BHYT</label>
            </div>
            <div class="col-md-8">
              <a-input v-model:value="service.code" :disabled="loading" />
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-2">
              <label>Tên BHYT</label>
            </div>
            <div class="col-md-10">
              <a-input v-model:value="service.name" :disabled="loading" />
            </div>
          </div>
        </div>
      </div>

      <div class="row mb-1">
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-4">
              <label>Đợn vị tính</label>
            </div>
            <div class="col-md-8">
              <a-select class="w-100" />
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-4">
                  <label>Nhóm BHYT</label>
                </div>
                <div class="col-md-8">
                  <a-select class="w-100" />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-4">
                  <label>Nhóm DV</label>
                </div>
                <div class="col-md-8">
                  <a-select class="w-100" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-4">
              <label>Loại PPTT</label>
            </div>
            <div class="col-md-8">
              <a-select class="w-100" />
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <a-table
          class="ant-table-striped my-2"
          size="middle"
          :columns="columns"
          :data-source="servicePricePolicies"
          bordered
        >
        </a-table>
      </div>
    </div>

    <template #footer>
      <a-button
        key="submit"
        type="primary"
        :loading="loading"
        @click.prevent="handleSave"
      >
        Lưu</a-button
      >
      <a-button
        type="primary"
        :loading="loading"
        @click.prevent="handleSaveAndAddNew"
      >
        Lưu và Thêm mới</a-button
      >
      <a-button @click="handleCancel">Bỏ qua</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
import { ServiceModel, ServicePricePolicyModel } from "@/models";
import { defineComponent, ref, computed, watch, PropType } from "vue";
import { serviceService, servicePricePolicyService } from "@/services";
import { Modal } from "ant-design-vue";

export default defineComponent({
  name: "ServiceDetailView",
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object as PropType<ServiceModel>,
    },
  },
  setup(props, { emit }) {
    //#region Khai báo biến

    const loading = ref<boolean>(false);
    const fields = ref({ value: "id", label: "name" });

    const result = ref<boolean>(false);
    const title = ref<string>("Thêm mới dịch vụ ký thuật");
    const servicePricePolicies = ref<ServicePricePolicyModel[]>([]);
    const service = ref<ServiceModel>();
    const columns = ref([
      // { title: 'Id', key: 'id', dataIndex: 'id', width: 0, show: false },
      { title: "Mã", key: "patientTypeCode", dataIndex: "patientTypeCode", width: 200 },
      { title: "Tên", key: "patientTypeName", dataIndex: "patientTypeName", width: 500 },
      {
        title: "Giá cũ",
        key: "oldUnitPrice",
        dataIndex: "oldUnitPrice",
        width: 200,
      },
      {
        title: "Giá mới",
        key: "newUnitPrice",
        dataIndex: "newUnitPrice",
        width: 200,
      },
      {
        title: "Trần BH",
        key: "ceilingPrice",
        dataIndex: "ceilingPrice",
        width: 200,
      },
      {
        title: "Ngày áp dụng",
        key: "executionTime",
        dataIndex: "executionTime",
        width: 200,
      },
    ]);

    //#endregion

    //#region InitDate
    const getServicePricePolicies = async () => {
      var res = await servicePricePolicyService.getAll();
      servicePricePolicies.value = res.data.result;
    };

    const getServiceById = (id: string) => {
      serviceService
        .getById(id!)
        .then((res) => {
          service.value = res.data.result;
          title.value = "Sửa dịch vụ kỹ thuật";
          loading.value = false;
        })
        .catch((error) => {
          Modal.error({ content: error.message, okText: "Đồng ý" });
          toggle();
        });
    };

    // getServicePricePolicies();
    //#endregion

    const handleSave = () => {
      loading.value = true;
    };

    const handleSaveAndAddNew = () => {
      loading.value = true;
      result.value = true;

      reset();
    };

    const handleCancel = () => {
      toggle();
    };

    const reset = () => {
      service.value = {
        id: undefined,
        code: "",
        name: "",
        serviceTypeId: undefined,
        serviceUnitId: undefined,
        serviceGroupId: undefined,
        serviceUnitName: "",
        serviceGroupName: "",
        inactive: false,
        servicePricePolicies: servicePricePolicies.value,
      };
    };

    const toggle = () => {
      emit("toggle", result.value);
    };

    const show = computed(() => props.visible);

    watch(show, (value) => {
      if (value) {
        loading.value = true;

        if (props.data !== undefined && props.data !== null && props.data?.id !== undefined ) {
          let data = props.data!;
          getServiceById(data.id!);
        } else {
          getServicePricePolicies();
          reset();

          loading.value = false;
        }
      }
    });

    return {
      title,
      service,
      servicePricePolicies,
      columns,
      show,
      loading,
      fields,
      result,
      //   roomTypes,
      //   departments,
      handleSave,
      handleSaveAndAddNew,
      handleCancel,
    };
  },
});
</script>

<style>
</style>