<template>
  <a-modal
    :visible="show"
    :title="title"
    @cancel="handleCancel"
    :mask-closable="false"
    width="1200px"
    height="720px"
    class="modal_container"
  >
    <div class="container">
      <div class="row mb-1">
        <div class="col-md-4">
          <div class="row">
            <div class="col-md-4">
              <label>
                <span>Mã DV</span>
                <span class="text-danger me-1">*</span>
              </label>
            </div>
            <div class="col-md-8">
              <a-input v-model:value="service.code" :disabled="loading" />
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-2">
              <label>
                <span>Tên DV</span>
                <span class="text-danger me-1">*</span>
              </label>
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
              <label>
                <span>Mã BH</span>
                <span class="text-danger me-1">*</span>
              </label>
            </div>
            <div class="col-md-8">
              <a-input v-model:value="service.heInCode" :disabled="loading" />
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-2">
              <label>
                <span>Tên BH</span>
                <span class="text-danger me-1">*</span>
              </label>
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
              <label>
                <span>Đợn vị tính</span>
                <span class="text-danger me-1">*</span>
              </label>
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
                  <label>
                    <span>Nhóm BH</span>
                    <span class="text-danger me-1">*</span>
                  </label>
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
                  <label>
                    <span>Nhóm DV</span>
                    <span class="text-danger me-1">*</span>
                  </label>
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
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-4">
                  <label>
                    <span>Số thứ tự</span>
                  </label>
                </div>
                <div class="col-md-8">
                  <a-input-number
                    class="my-0 mx-0 w-100"
                    v-model:value="service.sortOrder"
                    min="0"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-8">
                  <a-checkbox
                    v-model:checked="service.inactive"
                    :disabled="loading"
                    >Ngừng theo dõi</a-checkbox
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <a-table
          class="ant-table-striped my-2"
          size="middle"
          bordered
          :pagination="false"
          :columns="columns"
          :data-source="service.sServicePricePolicies"
          :scroll="{ y: 130 }"
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
                class="my-0 mx-0 w-100 text-align-right"
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
                :disabled="!record.isHeIn"
              />
            </template>
            <template v-else-if="column.key === 'paymentRate'">
              <a-input-number
                class="my-0 mx-0 w-100"
                v-model:value="record.paymentRate"
                max="100"
                :disabled="!record.isHeIn"
              />
            </template>
            <template v-else-if="column.key === 'executionTime'">
              <a-date-picker
                class="my-0 mx-0 w-100"
                placeholder="dd/MM/yyyy"
                format="DD/MM/YYYY"
                v-model:value="record.executionTime"
              />
            </template>
          </template>
        </a-table>
      </div>

      <div class="row" v-if="isShowExecutionRooms">
        <a-table
          class="ant-table-striped my-2"
          size="middle"
          :columns="columnRoows"
          :data-source="service.sExecutionRooms"
          bordered
          :pagination="false"
          :scroll="{ y: 100 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'isCheck'">
              <a-checkbox
                class="my-0 mx-0 w-100 centered-checkbox"
                v-model:checked="record.isCheck"
              />
            </template>
            <template v-else-if="column.key === 'isMain'">
              <a-checkbox
                class="my-0 mx-0 w-100 centered-checkbox"
                v-model:checked="record.isMain"
              />
            </template>
          </template>
        </a-table>
      </div>

      <div class="row" v-if="isShowExecutionRooms">
        <a-table
          class="ant-table-striped my-2"
          size="middle"
          :columns="columnRoows"
          :data-source="service.sExecutionRooms"
          bordered
          :pagination="false"
          :scroll="{ y: 100 }"
        >
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'isCheck'">
              <a-checkbox
                class="my-0 mx-0 w-100 centered-checkbox"
                v-model:checked="record.isCheck"
              />
            </template>
            <template v-else-if="column.key === 'isMain'">
              <a-checkbox
                class="my-0 mx-0 w-100 centered-checkbox"
                v-model:checked="record.isMain"
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
} from "@/models";
import { defineComponent, ref, computed, watch, PropType, reactive } from "vue";
import {
  serviceService,
  surgicalProcedureTypeService,
  serviceGroupService,
  serviceGroupHeInService,
  serviceUnitService,
} from "@/services";
import { Modal } from "ant-design-vue";
// import moment from "moment";
import dayjs from "dayjs";
// import "dayjs/locale/vi";

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
      serviceUnitId: undefined,
      serviceGroupId: undefined,
      serviceGroupHeInId: undefined,
      surgicalProcedureTypeId: undefined,
      serviceUnitName: "",
      serviceGroupName: "",
      sServicePricePolicies: reactive([]),
      sExecutionRooms: reactive([]),
      sServiceResultIndices: reactive([]),
    });

    const erro = ref<string>();

    const surgicalProcedureTypes = ref<SurgicalProcedureTypeModel[]>([]);
    const serviceGroups = ref<ServiceGroupModel[]>([]);
    var serviceGroupHeIns = ref<ServiceGroupHeInModel[]>([]);
    const serviceUnits = ref<ServiceUnitModel[]>([]);

    const columns = reactive([
      {
        title: "Tên",
        key: "patientTypeName",
        dataIndex: "patientTypeName",
        width: 200,
        className: "column-header-center",
      },
      {
        title: "Giá cũ",
        key: "oldUnitPrice",
        dataIndex: "oldUnitPrice",
        width: 120,
        isEditing: true,
        className: "column-header-center",
      },
      {
        title: "Giá mới",
        key: "newUnitPrice",
        dataIndex: "newUnitPrice",
        width: 120,
        isEditing: true,
        className: "column-header-center",
      },
      {
        title: "Tỷ lệ TT",
        key: "paymentRate",
        dataIndex: "paymentRate",
        width: 120,
        isEditing: true,
        className: "column-header-center",
      },
      {
        title: "Trần BH",
        key: "ceilingPrice",
        dataIndex: "ceilingPrice",
        width: 120,
        className: "column-header-center",
      },
      {
        title: "Ngày áp dụng",
        key: "executionTime",
        dataIndex: "executionTime",
        width: 120,
        className: "column-header-center",
      },
    ]);

    const columnRoows = reactive([
      {
        title: "Chọn",
        key: "isCheck",
        dataIndex: "isCheck",
        className: "column-header-center",
        width: 70,
      },
      {
        title: "Mã phòng thực hiện",
        key: "roomCode",
        dataIndex: "roomCode",
        width: 120,
        className: "column-header-center",
      },
      {
        title: "Tên phòng thực hiện",
        key: "roomName",
        dataIndex: "roomName",
        width: 250,
        className: "column-header-center",
      },
      {
        title: "Phòng thực hiện chính",
        key: "isMain",
        dataIndex: "isMain",
        width: 100,
        isEditing: true,
        className: "column-header-center",
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
      var resultDto = await serviceService.getById(id!);
      if (resultDto.data.isSuccessed == true) {
        service.id = resultDto.data.result.id;
        service.code = resultDto.data.result.code;
        service.name = resultDto.data.result.name;
        service.heInCode = resultDto.data.result.heInCode;
        service.heInName = resultDto.data.result.heInName;
        service.inactive = resultDto.data.result.inactive;
        service.sortOrder = resultDto.data.result.sortOrder;
        service.serviceUnitId = resultDto.data.result.serviceUnitId;
        service.serviceGroupHeInId = resultDto.data.result.serviceGroupHeInId;
        service.serviceGroupId = resultDto.data.result.serviceGroupId;
        service.surgicalProcedureTypeId =
          resultDto.data.result.surgicalProcedureTypeId;
        service.serviceUnitName = resultDto.data.result.serviceUnitName;
        service.serviceGroupName = resultDto.data.result.serviceGroupName;

        service.sServicePricePolicies =
          resultDto.data.result.sServicePricePolicies;
        service.sExecutionRooms = resultDto.data.result.sExecutionRooms;
        service.sServiceResultIndices =
          resultDto.data.result.sServiceResultIndices;

        if (
          resultDto.data.result.sServicePricePolicies &&
          resultDto.data.result.sServicePricePolicies !== undefined &&
          resultDto.data.result.sServicePricePolicies.length > 0
        ) {
          resultDto.data.result.sServicePricePolicies.forEach((element) => {
            if (
              element.executionTimeString !== null &&
              element.executionTimeString !== ""
            ) {
              element.executionTime = dayjs(
                element.executionTimeString,
                "DD-MM-YYYY"
              );
            } else {
              element.executionTime = null;
            }
          });
        }

        title.value = "Sửa dịch vụ kỹ thuật";
        loading.value = false;
      } else {
        Modal.error({ content: resultDto.data.message, okText: "Đồng ý" });
        toggle();
      }
    }

    async function Validata(): Promise<boolean> {
      let isValid = true;
      let strArr = [];
      erro.value = "";

      if (service.code === null || service.code === "") {
        strArr.push("Mã DV");
      }
      if (service.name === null || service.name === "") {
        strArr.push("Tên DV");
      }
      if (service.heInCode === null || service.heInCode === "") {
        strArr.push("Mã BH");
      }
      if (service.heInName === null || service.heInName === "") {
        strArr.push("Tên BH");
      }
      if (
        service.serviceUnitId === null ||
        service.serviceUnitId === undefined
      ) {
        strArr.push("Đơn vị tính");
      }
      if (
        service.serviceGroupId === null ||
        service.serviceGroupId === undefined
      ) {
        strArr.push("Nhóm DV");
      }
      if (
        service.serviceGroupHeInId === null ||
        service.serviceGroupHeInId === undefined
      ) {
        strArr.push("Nhóm BH");
      }

      if (strArr.length > 0) {
        erro.value = "- " + strArr.join(", ") + " không được để trống!";
        isValid = false;

        Modal.error({
          content: erro.value,
          title: "Thông báo",
          okText: "Đồng ý",
        });
        return isValid;
      }

      return isValid;
    }

    const isShowExecutionRooms = computed(() => {
      let serviceGroupHeIn = serviceGroupHeIns.value.find(
        (f) => f.id === service.serviceGroupHeInId
      );

      if (
        serviceGroupHeIn !== null &&
        (serviceGroupHeIn?.code === "XN" ||
          serviceGroupHeIn?.code === "CDHA" ||
          serviceGroupHeIn?.code === "TDCN")
      ) {
        return true;
      } else return false;
    });

    //#endregion

    const handleSave = async () => {
      loading.value = true;

      const isValid = await Validata();
      if (!isValid) {
        loading.value = false;
        return;
      }

      service.sServicePricePolicies.forEach((element) => {
        if (element.executionTime !== null) {
          element.executionTimeString =
            element.executionTime.format("DD/MM/YYYY");
        }
      });

      let resultSave = await serviceService.createOrEdit(service);
      if (resultSave.data.isSuccessed) {
        result.value = true;
        toggle();
      } else {
        Modal.error({ content: resultSave.data.message, okText: "Đồng ý" });
        loading.value = false;
      }
    };

    const handleSaveAndAddNew = async () => {
      loading.value = true;
      result.value = true;

      const isValid = await Validata();
      if (!isValid) {
        loading.value = false;
        return;
      }

      reset();
    };

    const handleCancel = () => {
      toggle();
    };

    const reset = () => {
      service.id = undefined;
      service.code = "";
      service.name = "";
      service.heInCode = "";
      service.heInName = "";
      service.inactive = false;
      service.serviceUnitId = undefined;
      service.serviceGroupHeInId = undefined;
      service.serviceGroupId = undefined;
      service.surgicalProcedureTypeId = undefined;
      service.serviceUnitName = "";
      service.serviceGroupName = "";
      service.sortOrder = 0;
      service.sServicePricePolicies = reactive([]);
      service.sExecutionRooms = reactive([]);
      service.sServiceResultIndices = reactive([]);
    };

    const toggle = () => {
      emit("toggle", result.value);
    };

    const show = computed(() => props.visible);

    watch(show, async (value) => {
      if (value) {
        loading.value = true;
        await initData();

        let id =
          props && props.data
            ? props.data.id
            : "00000000-0000-0000-0000-000000000000";

        await getServiceById(id as string | null);
        loading.value = false;
      }
    });

    return {
      title,
      service,
      columns,
      columnRoows,
      show,
      loading,
      fields,
      result,
      surgicalProcedureTypes,
      serviceGroups,
      serviceGroupHeIns,
      serviceUnits,
      isShowExecutionRooms,
      erro,
      handleSave,
      handleSaveAndAddNew,
      handleCancel,
    };
  },
});
</script>

<style>
/* .ant-table.ant-table-middle .ant-table-tbody > tr > td {
  padding: 5px 5px !important;
} */
td.column-center,
th.column-header-center {
  text-align: center !important;
}
</style>

<style scoped>
.centered-checkbox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal_container {
  width: 1200px;
  height: 650px;
  position: relative;
  overflow: auto;
}
</style>