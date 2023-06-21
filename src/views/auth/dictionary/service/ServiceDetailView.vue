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
              <a-input v-model:value="service.heInCode" :disabled="loading" />
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-2">
              <label>Tên BHYT</label>
            </div>
            <div class="col-md-10">
              <a-input v-model:value="service.heInName" :disabled="loading" />
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
              <a-select
                v-model:value="service.serviceUnitId"
                :options="serviceUnits"
                :field-names="fields"
                :disabled="loading"
                class="w-100"
              >
                <template #option="{ name }">
                  <div class="row">
                    <span>{{ name }}</span>
                  </div>
                </template>
              </a-select>
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
                  <a-select
                    v-model:value="service.serviceGroupHeInId"
                    :options="serviceGroupHeIns"
                    :field-names="fields"
                    :disabled="loading"
                    class="w-100"
                  >
                    <template #option="{ name }">
                      <div class="row">
                        <span>{{ name }}</span>
                      </div>
                    </template>
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
                  <a-select
                    v-model:value="service.serviceGroupId"
                    :options="serviceGroups"
                    :field-names="fields"
                    :disabled="loading"
                    class="w-100"
                  >
                    <template #option="{ name }">
                      <div class="row">
                        <span>{{ name }}</span>
                      </div>
                    </template>
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
              <a-select
                v-model:value="service.surgicalProcedureTypeId"
                :options="surgicalProcedureTypes"
                :field-names="fields"
                :disabled="loading"
                class="w-100"
              >
                <template #option="{ name }">
                  <div class="row">
                    <span>{{ name }}</span>
                  </div>
                </template>
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
              <!-- <a-date-picker
                class="my-0 mx-0 w-100"
                v-model:value="record.executionTime"
                placeholder="dd/MM/yyyy"
                format="DD/MM/YYYY"
                locale="en_US"
              /> -->
              <input
                class="my-0 mx-0 w-100"
                type="date"
                placeholder="dd/MM/yyyy"
                format="dd/MM/yyyy"
                DataFormatString
                :value="record.executionTime"
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
  SurgicalProcedureTypeModel,
  ServiceGroupModel,
  ServiceGroupHeInModel,
  ServiceUnitModel,
  ServicePricePolicyModel,
} from "@/models";
import { defineComponent, ref, computed, watch, PropType, reactive } from "vue";
import {
  serviceService,
  servicePricePolicyService,
  surgicalProcedureTypeService,
  serviceGroupService,
  serviceGroupHeInService,
  serviceUnitService,
} from "@/services";
import { Modal } from "ant-design-vue";
// import moment from "moment";

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
      heInCode: "",
      heInName: "",
      inactive: false,
      serviceTypeId: undefined,
      serviceUnitId: undefined,
      serviceGroupId: undefined,
      serviceGroupHeInId: undefined,
      surgicalProcedureTypeId: undefined,
      serviceUnitName: "",
      serviceGroupName: "",
      servicePricePolicies: reactive([]),
    });

    const surgicalProcedureTypes = ref<SurgicalProcedureTypeModel[]>([]);
    const serviceGroups = ref<ServiceGroupModel[]>([]);
    const serviceGroupHeIns = ref<ServiceGroupHeInModel[]>([]);
    const serviceUnits = ref<ServiceUnitModel[]>([]);

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

    //#region Function

    async function initData() {
      surgicalProcedureTypes.value = await getSurgicalProcedureTypes();
      serviceGroups.value = await getServiceGroups();
      serviceGroupHeIns.value = await getServiceGroupHeIns();
      serviceUnits.value = await getServiceUnits();
    }

    async function getServicePricePolicies(): Promise<
      ServicePricePolicyModel[]
    > {
      var res = await servicePricePolicyService.getAll();
      return res.data.result;
    }

    async function getSurgicalProcedureTypes(): Promise<
      SurgicalProcedureTypeModel[]
    > {
      var res = await surgicalProcedureTypeService.getAll();
      return res.data.result;
    }

    async function getServiceGroups(): Promise<ServiceGroupModel[]> {
      var res = await serviceGroupService.getAll();
      return res.data.result;
    }

    async function getServiceUnits(): Promise<ServiceUnitModel[]> {
      var res = await serviceUnitService.getAll();
      return res.data.result;
    }

    async function getServiceGroupHeIns(): Promise<ServiceGroupHeInModel[]> {
      var res = await serviceGroupHeInService.getAll();
      return res.data.result;
    }

    async function getServiceById(id: string | null) {
      reset();
      if (id !== undefined && id !== null) {
        var resultDto = await serviceService.getById(id!);
        if (resultDto.data.isSuccessed == true) {
          service.id = resultDto.data.result.id;
          service.code = resultDto.data.result.code;
          service.name = resultDto.data.result.name;
          service.heInCode = resultDto.data.result.heInCode;
          service.heInName = resultDto.data.result.heInName;
          service.inactive = resultDto.data.result.inactive;
          service.serviceTypeId = resultDto.data.result.serviceTypeId;
          service.serviceUnitId = resultDto.data.result.serviceUnitId;
          service.serviceGroupHeInId = resultDto.data.result.serviceGroupHeInId;
          service.serviceGroupId = resultDto.data.result.serviceGroupId;
          service.surgicalProcedureTypeId =
            resultDto.data.result.surgicalProcedureTypeId;
          service.serviceUnitName = resultDto.data.result.serviceUnitName;
          service.serviceGroupName = resultDto.data.result.serviceGroupName;
          service.servicePricePolicies =
            resultDto.data.result.servicePricePolicies;

          // resultDto.data.result.servicePricePolicies.forEach((element) => {
          //   element.executionTime = moment(
          //     moment(element.executionTime.toString()).format("DD/MM/YYYY"),
          //     "DD/MM/YYYY"
          //   ).toDate();
          // });

          service.servicePricePolicies =
            resultDto.data.result.servicePricePolicies;

          title.value = "Sửa dịch vụ kỹ thuật";
          loading.value = false;
        } else {
          Modal.error({ content: resultDto.data.message, okText: "Đồng ý" });
          toggle();
        }
      } else {
        service.servicePricePolicies = await getServicePricePolicies();
      }
    }

    //#endregion

    const handleSave = async () => {
      loading.value = true;

      let resultSave = await serviceService.createOrEdit(service);
      if (resultSave.data.isSuccessed) {
        result.value = true;
        toggle();
      } else {
        Modal.error({ content: resultSave.data.message, okText: "Đồng ý" });
      }
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
        (service.heInCode = ""),
        (service.heInName = ""),
        (service.inactive = false),
        (service.serviceTypeId = undefined),
        (service.serviceUnitId = undefined),
        (service.serviceGroupHeInId = undefined),
        (service.serviceGroupId = undefined),
        (service.surgicalProcedureTypeId = undefined),
        (service.serviceUnitName = ""),
        (service.serviceGroupName = ""),
        (service.servicePricePolicies = reactive([]));
    };

    const toggle = () => {
      emit("toggle", result.value);
    };

    const show = computed(() => props.visible);

    watch(show, async (value) => {
      if (value) {
        loading.value = true;

        await initData();

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
      serviceGroupHeIns,
      serviceUnits,
      handleSave,
      handleSaveAndAddNew,
      handleCancel,
    };
  },
});
</script>

<style>
/* .ant-table.ant-table-middle .ant-table-title,
.ant-table.ant-table-middle .ant-table-footer,
.ant-table.ant-table-middle .ant-table-thead > tr > th,
.ant-table.ant-table-middle .ant-table-tbody > tr > td,
.ant-table.ant-table-middle tfoot > tr > th,
.ant-table.ant-table-middle tfoot > tr > td {
  padding: 3px 3px;
} */
</style>