<template>
    <form>
        <a-modal
            :visible="show"
            :title="title"
            @cancel="handleCancel"
            :mask-closable="false"
            width="1000px"
        >
            <div class="container">
                <a-tabs
                    v-model:activeKey="activeKey"
                    type="card"
                    class="card-container"
                >
                    <a-tab-pane key="1" tab="Thông tin chung">
                        <div class="container">
                            <div class="row mb-1">
                                <div class="col-md-4">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>
                                                <span>Mã DV</span>
                                                <span class="text-danger me-1"
                                                    >*</span
                                                >
                                            </label>
                                        </div>
                                        <div class="col-md-8">
                                            <a-input
                                                v-model:value="service.code"
                                                :disabled="loading"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <label>
                                                <span>Tên DV</span>
                                                <span class="text-danger me-1"
                                                    >*</span
                                                >
                                            </label>
                                        </div>
                                        <div class="col-md-10">
                                            <a-input
                                                v-model:value="service.name"
                                                :disabled="loading"
                                            />
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
                                                <span class="text-danger me-1"
                                                    >*</span
                                                >
                                            </label>
                                        </div>
                                        <div class="col-md-8">
                                            <a-input
                                                v-model:value="service.heInCode"
                                                :disabled="loading"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div class="row">
                                        <div class="col-md-2">
                                            <label>
                                                <span>Tên BH</span>
                                                <span class="text-danger me-1"
                                                    >*</span
                                                >
                                            </label>
                                        </div>
                                        <div class="col-md-10">
                                            <a-input
                                                v-model:value="service.heInName"
                                                :disabled="loading"
                                            />
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
                                                <span class="text-danger me-1"
                                                    >*</span
                                                >
                                            </label>
                                        </div>
                                        <div class="col-md-8">
                                            <a-select
                                                v-model:value="service.unitId"
                                                :options="units"
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
                                                        <span
                                                            class="text-danger me-1"
                                                            >*</span
                                                        >
                                                    </label>
                                                </div>
                                                <div class="col-md-8">
                                                    <a-select
                                                        v-model:value="
                                                            service.serviceGroupHeInId
                                                        "
                                                        :options="
                                                            serviceGroupHeIns
                                                        "
                                                        :field-names="fields"
                                                        :disabled="loading"
                                                        class="w-100"
                                                    >
                                                        <template
                                                            #option="{ name }"
                                                        >
                                                            <div class="row">
                                                                <span>{{
                                                                    name
                                                                }}</span>
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
                                                        <span
                                                            class="text-danger me-1"
                                                            >*</span
                                                        >
                                                    </label>
                                                </div>
                                                <div class="col-md-8">
                                                    <a-select
                                                        v-model:value="
                                                            service.serviceGroupId
                                                        "
                                                        :options="serviceGroups"
                                                        :field-names="fields"
                                                        :disabled="loading"
                                                        class="w-100"
                                                    >
                                                        <template
                                                            #option="{ name }"
                                                        >
                                                            <div class="row">
                                                                <span>{{
                                                                    name
                                                                }}</span>
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
                                                v-model:value="
                                                    service.surgicalProcedureTypeId
                                                "
                                                :options="
                                                    surgicalProcedureTypes
                                                "
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
                                                        v-model:value="
                                                            service.sortOrder
                                                        "
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
                                                        v-model:checked="
                                                            service.inactive
                                                        "
                                                        :disabled="loading"
                                                        >Ngừng sử
                                                        dụng</a-checkbox
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
                                        <template
                                            v-if="
                                                column.key === 'patientTypeCode'
                                            "
                                        >
                                            <a-input
                                                class="my-0 mx-0 w-100"
                                                v-model:value="
                                                    record.patientTypeCode
                                                "
                                                disabled
                                            />
                                        </template>
                                        <template
                                            v-else-if="
                                                column.key === 'patientTypeName'
                                            "
                                        >
                                            <a-input
                                                class="my-0 mx-0 w-100"
                                                v-model:value="
                                                    record.patientTypeName
                                                "
                                                disabled
                                            />
                                        </template>
                                        <template
                                            v-else-if="
                                                column.key === 'oldUnitPrice'
                                            "
                                        >
                                            <a-input-number
                                                class="my-0 mx-0 w-100 text-align-right"
                                                v-model:value="
                                                    record.oldUnitPrice
                                                "
                                                min="0"
                                            />
                                        </template>
                                        <template
                                            v-else-if="
                                                column.key === 'newUnitPrice'
                                            "
                                        >
                                            <a-input-number
                                                class="my-0 mx-0 w-100"
                                                v-model:value="
                                                    record.newUnitPrice
                                                "
                                                min="0"
                                            />
                                        </template>
                                        <template
                                            v-else-if="
                                                column.key === 'ceilingPrice'
                                            "
                                        >
                                            <a-input-number
                                                class="my-0 mx-0 w-100"
                                                v-model:value="
                                                    record.ceilingPrice
                                                "
                                                min="0"
                                                :disabled="!record.isHeIn"
                                            />
                                        </template>
                                        <template
                                            v-else-if="
                                                column.key === 'paymentRate'
                                            "
                                        >
                                            <a-input-number
                                                class="my-0 mx-0 w-100"
                                                v-model:value="
                                                    record.paymentRate
                                                "
                                                max="100"
                                                :disabled="!record.isHeIn"
                                            />
                                        </template>
                                        <template
                                            v-else-if="
                                                column.key === 'executionTime'
                                            "
                                        >
                                            <a-date-picker
                                                class="my-0 mx-0 w-100"
                                                placeholder="dd/MM/yyyy"
                                                format="DD/MM/YYYY"
                                                v-model:value="
                                                    record.executionTime
                                                "
                                            />
                                        </template>
                                    </template>
                                </a-table>
                            </div>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane
                        key="2"
                        tab="Phòng thực hiện"
                        v-if="isShowExecutionRooms"
                    >
                        <div class="container">
                            <div class="row">
                                <a-table
                                    class="ant-table-striped my-2"
                                    size="middle"
                                    :columns="columnRoows"
                                    :data-source="service.sExecutionRooms"
                                    bordered
                                    :pagination="false"
                                    :scroll="{ y: 600 }"
                                >
                                    <template #bodyCell="{ column, record }">
                                        <template
                                            v-if="column.key === 'isCheck'"
                                        >
                                            <a-checkbox
                                                class="my-0 mx-0 w-100 centered-checkbox"
                                                v-model:checked="record.isCheck"
                                            />
                                        </template>
                                        <template
                                            v-else-if="column.key === 'isMain'"
                                        >
                                            <a-checkbox
                                                class="my-0 mx-0 w-100 centered-checkbox"
                                                v-model:checked="record.isMain"
                                            />
                                        </template>
                                    </template>
                                </a-table>
                            </div>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="3" tab="Trị số kết quả">
                        <div class="container">
                            <div class="row">
                                <div class="flex-container-resultIndice">
                                    <a-button
                                        class="btn-item-resultIndice"
                                        type="primary"
                                        @click.prevent="handleAddResultIndice"
                                    >
                                        Thêm mới</a-button
                                    >
                                    <a-button
                                        class="btn-item-resultIndice"
                                        type="primary"
                                        @click.prevent="
                                            handleSaveResultIndice(
                                                resultIndiceSelected
                                            )
                                        "
                                    >
                                        Lưu KQ</a-button
                                    >
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label>Mã trị số</label>
                                        </div>
                                        <div class="col-md-9">
                                            <a-input
                                                :disabled="!visibleResultIndice"
                                                v-model:value="
                                                    resultIndiceSelected.code
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-md-3">
                                            <label>Tên trị số</label>
                                        </div>
                                        <div class="col-md-9">
                                            <a-input
                                                :disabled="!visibleResultIndice"
                                                v-model:value="
                                                    resultIndiceSelected.name
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-md-3">
                                            <label>Đơn vị</label>
                                        </div>
                                        <div class="col-md-9">
                                            <a-input
                                                :disabled="!visibleResultIndice"
                                                v-model:value="
                                                    resultIndiceSelected.unit
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-md-3">
                                            <label>Thứ tự</label>
                                        </div>
                                        <div class="col-md-9">
                                            <a-input-number
                                                class="w-100"
                                                :disabled="!visibleResultIndice"
                                                v-model:value="
                                                    resultIndiceSelected.sortOrder
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <label>Trị số nam từ</label>
                                        </div>
                                        <div class="col-md-8">
                                            <a-input-number
                                                class="w-100"
                                                :disabled="!visibleResultIndice"
                                                v-model:value="
                                                    resultIndiceSelected.maleFrom
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-md-4">
                                            <label>Trị số nam đến</label>
                                        </div>
                                        <div class="col-md-8">
                                            <a-input-number
                                                class="w-100"
                                                :disabled="!visibleResultIndice"
                                                v-model:value="
                                                    resultIndiceSelected.maleTo
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-md-4">
                                            <label>Trị số nữ từ</label>
                                        </div>
                                        <div class="col-md-8">
                                            <a-input-number
                                                class="w-100"
                                                min="0"
                                                :disabled="!visibleResultIndice"
                                                v-model:value="
                                                    resultIndiceSelected.femaleFrom
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div class="row mt-1">
                                        <div class="col-md-4">
                                            <label>Trị số nữ đến</label>
                                        </div>
                                        <div class="col-md-8">
                                            <a-input-number
                                                class="w-100"
                                                min="0"
                                                :disabled="!visibleResultIndice"
                                                v-model:value="
                                                    resultIndiceSelected.femaleTo
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <a-table
                                    class="ant-table-striped my-2"
                                    size="middle"
                                    bordered
                                    :customRow="handleRowClickResultIndice"
                                    :columns="columnResultIndices"
                                    :data-source="service.sServiceResultIndices"
                                    :pagination="false"
                                    :scroll="{ y: 600 }"
                                >
                                    <template #bodyCell="{ column, record }">
                                        <template
                                            v-if="column.key === 'inactive'"
                                        >
                                            <span>
                                                <a-tag
                                                    v-if="record.inactive"
                                                    color="error"
                                                >
                                                    <span>Ngừng hoạt động</span>
                                                </a-tag>
                                                <a-tag v-else color="success">
                                                    <span>Hoạt động</span>
                                                </a-tag>
                                            </span>
                                        </template>
                                        <template
                                            v-else-if="column.key === 'action'"
                                        >
                                            <span>
                                                <button
                                                    class="btn btn-outline-primary border-0 btn-sm me-2"
                                                    title="Sửa"
                                                    @click="
                                                        handleEditResultIndice(
                                                            record
                                                        )
                                                    "
                                                >
                                                    <i class="bi bi-pen"></i>
                                                </button>

                                                <button
                                                    class="btn btn-outline-danger border-0 btn-sm"
                                                    title="Xóa"
                                                    @click="
                                                        handleDeleteResultIndice(
                                                            record
                                                        )
                                                    "
                                                >
                                                    <i class="bi bi-x-lg"></i>
                                                </button>
                                            </span>
                                        </template>
                                    </template>
                                </a-table>
                            </div>
                        </div>
                    </a-tab-pane>
                </a-tabs>
            </div>

            <template #footer>
                <a-button
                    class="btn-save"
                    key="submit"
                    type="primary"
                    :loading="loading"
                    @click.prevent="handleSave"
                >
                    Lưu</a-button
                >
                <a-button
                    class="btn-save-new"
                    type="primary"
                    :loading="loading"
                    @click.prevent="handleSaveAndAddNew"
                >
                    Lưu và Thêm mới</a-button
                >
                <a-button class="btn-cancel" @click="handleCancel"
                    >Bỏ qua</a-button
                >
            </template>
        </a-modal>
    </form>
</template>

<script lang="ts">
import {
    ServiceModel,
    SurgicalProcedureTypeModel,
    ServiceGroupModel,
    ServiceGroupHeInModel,
    UnitModel,
    ServiceResultIndiceModel,
} from "@/models";
import { defineComponent, ref, computed, watch, PropType, reactive } from "vue";
import {
    serviceService,
    surgicalProcedureTypeService,
    serviceGroupService,
    serviceGroupHeInService,
    unitService,
} from "@/services";
import { Modal } from "ant-design-vue";
import dayjs from "dayjs";
import guidHelper from "@/utils/guidHelper";

export default defineComponent({
    name: "ServiceDetailViews",
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
        const activeKey = ref<string>("1");

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
            unitId: undefined,
            serviceGroupId: undefined,
            serviceGroupHeInId: undefined,
            surgicalProcedureTypeId: undefined,
            unitName: "",
            serviceGroupName: "",
            sServicePricePolicies: [],
            sExecutionRooms: [],
            sServiceResultIndices: [],
        });

        const erro = ref<string>();

        const surgicalProcedureTypes = ref<SurgicalProcedureTypeModel[]>([]);
        const serviceGroups = ref<ServiceGroupModel[]>([]);
        const serviceGroupHeIns = ref<ServiceGroupHeInModel[]>([]);
        const units = ref<UnitModel[]>([]);
        const visibleResultIndice = ref<boolean>(false);
        let resultIndiceSelected = reactive<ServiceResultIndiceModel>({
            id: undefined,
            code: "",
            name: "",
            unit: "",
            maleFrom: null,
            maleTo: null,
            femaleFrom: null,
            femaleTo: null,
            serviceId: undefined,
            serviceCode: null,
            inactive: false,
        });

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

        const columnResultIndices = reactive([
            {
                title: "Xử lý",
                key: "action",
                width: 100,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "Mã chỉ số",
                key: "code",
                dataIndex: "code",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Tên chỉ số",
                key: "name",
                dataIndex: "name",
                width: 250,
                className: "column-header-center",
            },
            {
                title: "Đơn vị",
                key: "unit",
                dataIndex: "unit",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "TS nam từ",
                key: "maleFrom",
                dataIndex: "maleFrom",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "TS nam đến",
                key: "maleTo",
                dataIndex: "maleTo",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "TS nữ từ",
                key: "femaleFrom",
                dataIndex: "femaleFrom",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "TS nữ đến",
                key: "femaleTo",
                dataIndex: "femaleTo",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Thứ tự",
                key: "sortOrder",
                dataIndex: "sortOrder",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Trạng thái",
                key: "inactive",
                dataIndex: "inactive",
                width: 100,
                className: "column-header-center",
                align: "center",
            },
        ]);

        //#endregion

        //#region Function

        async function initData() {
            surgicalProcedureTypes.value = await getSurgicalProcedureTypes();
            serviceGroups.value = await getServiceGroups();
            serviceGroupHeIns.value = await getServiceGroupHeIns();
            units.value = await getServiceUnits();
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

        async function getServiceUnits(): Promise<UnitModel[]> {
            var res = await unitService.getAll();
            return res.data.result;
        }

        async function getServiceGroupHeIns(): Promise<
            ServiceGroupHeInModel[]
        > {
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
                service.unitId = resultDto.data.result.unitId;
                service.serviceGroupHeInId =
                    resultDto.data.result.serviceGroupHeInId;
                service.serviceGroupId = resultDto.data.result.serviceGroupId;
                service.surgicalProcedureTypeId =
                    resultDto.data.result.surgicalProcedureTypeId;
                service.unitName = resultDto.data.result.unitName;
                service.serviceGroupName =
                    resultDto.data.result.serviceGroupName;

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
                    resultDto.data.result.sServicePricePolicies.forEach(
                        (element) => {
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
                        }
                    );
                }

                title.value = "Sửa dịch vụ kỹ thuật";
                loading.value = false;
            } else {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
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
            if (service.unitId === null || service.unitId === undefined) {
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

            // Ktra phòng thực hiện
            const serviceGroupHeIn = serviceGroupHeIns.value.find(
                (f) => f.id == service.serviceGroupId
            );
            if (
                serviceGroupHeIn !== undefined &&
                serviceGroupHeIn !== null &&
                (serviceGroupHeIn.code === "XN" ||
                    serviceGroupHeIn.code === "CDHA" ||
                    serviceGroupHeIn.code === "TDCN")
            ) {
                const length = service.sExecutionRooms.filter(
                    (f) => f.isMain === true
                ).length;
                if (length > 1) {
                    strArr.push(
                        "Chỉ được phép chọn một Phòng thực hiện chính!"
                    );
                }
            }

            // Ktra trị số
            if (
                service.sServiceResultIndices !== undefined &&
                service.sServiceResultIndices !== null
            ) {
                service.sServiceResultIndices.forEach((element, index) => {
                    if (
                        element.maleFrom !== null &&
                        element.maleTo !== null &&
                        element.maleFrom > element.maleTo
                    ) {
                        strArr.push(
                            "[TS nam từ] phải nhỏ hơn [TS nam đến] tại dòng [" +
                                index +
                                1 +
                                "]!"
                        );
                    }

                    if (
                        element.femaleFrom !== null &&
                        element.femaleTo !== null &&
                        element.femaleFrom > element.femaleTo
                    ) {
                        strArr.push(
                            "[TS nữ từ] phải nhỏ hơn [TS nữ đến] tại dòng [" +
                                index +
                                1 +
                                "]! "
                        );
                    }
                });
            }

            if (strArr.length > 0) {
                erro.value = strArr.join("\n");
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
                Modal.error({
                    content: resultSave.data.message,
                    okText: "Đồng ý",
                });
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
            service.unitId = undefined;
            service.serviceGroupHeInId = undefined;
            service.serviceGroupId = undefined;
            service.surgicalProcedureTypeId = undefined;
            service.unitName = "";
            service.serviceGroupName = "";
            service.sortOrder = 0;
            service.sServicePricePolicies = [];
            service.sExecutionRooms = [];
            service.sServiceResultIndices = [];

            resetResultIndice();
        };

        const handleRowClickResultIndice = (
            record: ServiceResultIndiceModel
        ) => {
            return {
                onClick: () => {
                    setDataResultIndice(record);
                },
            };
        };

        const handleAddResultIndice = () => {
            visibleResultIndice.value = true;
            setDataResultIndice(undefined);
        };

        const handleEditResultIndice = (record: ServiceResultIndiceModel) => {
            visibleResultIndice.value = true;
            setDataResultIndice(record);
        };

        const handleSaveResultIndice = (record: ServiceResultIndiceModel) => {
            const resultIndice = service.sServiceResultIndices.find(
                (f) => f.id == record.id
            );

            if (resultIndice !== null && resultIndice != undefined) {
                const index =
                    service.sServiceResultIndices.indexOf(resultIndice);
                service.sServiceResultIndices[index] = { ...record };
            } else {
                service.sServiceResultIndices.push({ ...record });
            }
            service.sServiceResultIndices = service.sServiceResultIndices.sort(
                (a, b) => {
                    if (a.sortOrder && b.sortOrder) {
                        return a.sortOrder - b.sortOrder;
                    }
                    return 0;
                }
            );

            visibleResultIndice.value = false;
        };

        const resetResultIndice = () => {
            resultIndiceSelected.id = guidHelper.generateGUID();
            resultIndiceSelected.code = "";
            resultIndiceSelected.name = "";
            resultIndiceSelected.unit = "";
            resultIndiceSelected.maleFrom = null;
            resultIndiceSelected.maleTo = null;
            resultIndiceSelected.femaleFrom = null;
            resultIndiceSelected.femaleTo = null;
            resultIndiceSelected.serviceId = undefined;
            resultIndiceSelected.serviceCode = null;
            resultIndiceSelected.sortOrder = undefined;
            resultIndiceSelected.inactive = false;
        };

        const setDataResultIndice = (
            data: ServiceResultIndiceModel | undefined
        ) => {
            resetResultIndice();
            if (data !== undefined) {
                const dataCopy = { ...data };

                resultIndiceSelected.id = dataCopy.id;
                resultIndiceSelected.code = dataCopy.code;
                resultIndiceSelected.name = dataCopy.name;
                resultIndiceSelected.unit = dataCopy.unit;
                resultIndiceSelected.maleFrom = dataCopy.maleFrom;
                resultIndiceSelected.maleTo = dataCopy.maleTo;
                resultIndiceSelected.femaleFrom = dataCopy.femaleFrom;
                resultIndiceSelected.femaleTo = dataCopy.femaleTo;
                resultIndiceSelected.serviceId = dataCopy.serviceId;
                resultIndiceSelected.serviceCode = dataCopy.serviceCode;
                resultIndiceSelected.sortOrder = dataCopy.sortOrder;
                resultIndiceSelected.inactive = dataCopy.inactive;
            }
        };

        const handleDeleteResultIndice = (record: ServiceResultIndiceModel) => {
            Modal.confirm({
                content:
                    "Bạn có thực sự muốn xóa trị số [" +
                    record.code +
                    "] đã chọn không?",
                okText: "Đồng ý",
                cancelText: "Bỏ qua",
                onOk() {
                    service.sServiceResultIndices =
                        service.sServiceResultIndices.filter(
                            (f) => f.id != record.id
                        );
                },
                onCancel() {
                    Modal.destroyAll();
                },
            });
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
            activeKey,
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
            units,
            isShowExecutionRooms,
            erro,
            columnResultIndices,
            handleSave,
            handleSaveAndAddNew,
            handleCancel,
            resultIndiceSelected,
            visibleResultIndice,
            handleRowClickResultIndice,
            handleEditResultIndice,
            handleDeleteResultIndice,
            handleAddResultIndice,
            handleSaveResultIndice,
        };
    },
});
</script>

<style>
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

.ant-modal-body {
    padding: 0px;
}

.custom-modal-body {
    padding: 0px;
}

.card-container {
    margin: -24px;
    height: 650px;
    max-height: 650px;
    height: 650px;
    overflow-y: auto;
}

.flex-container-resultIndice {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.btn-item-resultIndice {
    margin: 0px 0px 10px 10px;
    width: 100px;
}
</style>
