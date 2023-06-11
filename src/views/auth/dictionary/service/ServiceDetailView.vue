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
                  <a-select class="w-100" :value="service.serviceGroupId">
                    <a-select-option
                      v-for="option in serviceGroups"
                      :value="option.id"
                      :key="option.id"
                    >
                      <span>{{ option.name }}</span>
                    </a-select-option>
                  </a-select>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-4">
                  <label>Nhóm DV</label>
                </div>
                <div class="col-md-8">
                  <a-select class="w-100" :value="service.serviceGroupId">
                    <a-select-option
                      v-for="option in serviceGroups"
                      :value="option.id"
                      :key="option.id"
                    >
                      <span>{{ option.name }}</span>
                    </a-select-option>
                  </a-select>
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
              <a-select class="w-100" :value="service.surgicalProcedureTypeId">
                <a-select-option
                  v-for="option in surgicalProcedureTypes"
                  :value="option.id"
                  :key="option.id"
                >
                  <span>{{ option.name }}</span>
                </a-select-option>
              </a-select>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <a-table
          class="ant-table-striped my-2"
          size="middle"
          :columns="columns"
          :data-source="service.servicePricePolicies"
          bordered
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'patientTypeCode'">
              <a-input
                class="my-0 mx-0 w-100"
                v-model:value="record.patientTypeCode"
                disabled
              />
            </template>
            <template v-else-if="column.key === 'patientTypeName'">
              <a-input
                class="my-0 mx-0 w-100"
                v-model:value="record.patientTypeName"
                disabled
              />
            </template>
            <template v-else-if="column.key === 'oldUnitPrice'">
              <a-input-number
                style="text-align: right"
                class="my-0 mx-0 w-100"
                v-model:value="record.oldUnitPrice"
                min="0"
              />
            </template>
            <template v-else-if="column.key === 'newUnitPrice'">
              <a-input-number
                class="my-0 mx-0 w-100"
                v-model:value="record.newUnitPrice"
                min="0"
              />
            </template>
            <template v-else-if="column.key === 'ceilingPrice'">
              <a-input-number
                class="my-0 mx-0 w-100"
                v-model:value="record.ceilingPrice"
                min="0"
              />
            </template>
            <template v-else-if="column.key === 'executionTime'">
              <a-date-picker
                class="my-0 mx-0 w-100"
                v-model:value="record.executionTime"
                placeholder="dd/MM/yyyy"
                format="DD/MM/YYYY"
              />
            </template>
          </template>
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
import {
  ServiceModel,
  ServicePricePolicyModel,
  SurgicalProcedureTypeModel,
  ServiceGroupModel,
} from "@/models";
import { defineComponent, ref, computed, watch, PropType, reactive } from "vue";
import {
  serviceService,
  servicePricePolicyService,
  surgicalProcedureTypeService,
  serviceGroupService,
} from "@/services";
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
    let service = reactive<ServiceModel>({
      id: undefined,
      code: "",
      name: "",
      inactive: false,
      serviceTypeId: undefined,
      serviceUnitId: undefined,
      serviceGroupId: undefined,
      surgicalProcedureTypeId: undefined,
      serviceUnitName: "",
      serviceGroupName: "",
      servicePricePolicies: reactive([]),
    });

    const surgicalProcedureTypes = ref<SurgicalProcedureTypeModel[]>([]);
    const serviceGroups = ref<ServiceGroupModel[]>([]);

    const columns = reactive([
      {
        title: "Mã",
        key: "patientTypeCode",
        dataIndex: "patientTypeCode",
        width: 200,
      },
      {
        title: "Tên",
        key: "patientTypeName",
        dataIndex: "patientTypeName",
        width: 500,
      },
      {
        title: "Giá cũ",
        key: "oldUnitPrice",
        dataIndex: "oldUnitPrice",
        width: 200,
        isEditing: true,
      },
      {
        title: "Giá mới",
        key: "newUnitPrice",
        dataIndex: "newUnitPrice",
        width: 200,
        isEditing: true,
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

    //#region InitData
    //#endregion

    //#region Function

    async function InitData() {
      surgicalProcedureTypes.value = await getSurgicalProcedureTypes();
      serviceGroups.value = await getServiceGroups();
    }

    async function getServicePricePolicies() {
      var res = await servicePricePolicyService.getAll();
      return res.data.result;
    }

    async function getSurgicalProcedureTypes() {
      var res = await surgicalProcedureTypeService.getAll();
      return res.data.result;
    }

    async function getServiceGroups() {
      var res = await serviceGroupService.getAll();
      return res.data.result;
    }

    async function getServiceById(id: string | null) {
      reset();
      if (id !== undefined && id !== null) {
        serviceService
          .getById(id!)
          .then((res) => {
            service = res.data.result;
            title.value = "Sửa dịch vụ kỹ thuật";
            loading.value = false;
          })
          .catch((error) => {
            Modal.error({ content: error.message, okText: "Đồng ý" });
            toggle();
          });
      } else {
        service.servicePricePolicies = await getServicePricePolicies();
      }
    }

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
      service.id = undefined;
      (service.code = ""),
        (service.name = ""),
        (service.inactive = false),
        (service.serviceTypeId = undefined),
        (service.serviceUnitId = undefined),
        (service.serviceGroupId = undefined),
        (service.surgicalProcedureTypeId = undefined),
        (service.serviceUnitName = ""),
        (service.serviceGroupName = ""),
        (service.servicePricePolicies = []);
    };

    const toggle = () => {
      emit("toggle", result.value);
    };

    const show = computed(() => props.visible);

    watch(show, async (value) => {
      if (value) {
        loading.value = true;

        await InitData();

        let id = props && props.data ? props.data.id : null;
        await getServiceById(id as string | null);
        loading.value = false;
      }
    });

    return {
      title,
      service,
      columns,
      show,
      loading,
      fields,
      result,
      surgicalProcedureTypes,
      serviceGroups,
      handleSave,
      handleSaveAndAddNew,
      handleCancel,
    };
  },
});
</script>

<style>
/* .ant-table-cell {
  padding: 0;
  margin: 0;
} */
</style>