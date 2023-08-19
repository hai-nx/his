<template>
    <form>
        <a-modal
            :visible="show"
            :title="title"
            @cancel="handleCancel"
            width="1280px"
            :mask-closable="false"
        >
            <div class="container">
                <a-tabs
                    class="medicine-card-body"
                    v-model:activeKey="activeKey"
                    type="card"
                >
                    <a-tab-pane key="1" tab="Thông tin chung">
                        <div class="container">
                            <div class="grid-genaral">
                                <label class="grid-column-1">
                                    <span>Kho nhập:</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-select
                                    class="grid-column-columnspan-2-5"
                                    :field-names="fields"
                                    :options="sStocks"
                                    showSearch
                                    v-model:value="source.impStockId"
                                    :disabled="isDisabled"
                                >
                                </a-select>
                                <label class="grid-column-5">
                                    <span>Ngày lập:</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <input
                                    class="datetime grid-column-6"
                                    type="date"
                                    v-model="source.impTime"
                                    :disabled="isDisabled"
                                />

                                <label class="grid-column-7">
                                    <span>Ngày HĐ:</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <input
                                    class="datetime rid-column-8"
                                    type="date"
                                    v-model="source.invTime"
                                    :disabled="isDisabled"
                                />

                                <label class="grid-column-9"> Số HĐ: </label>
                                <a-input
                                    class="grid-column-10"
                                    v-model:value="source.invNo"
                                    :disabled="isDisabled"
                                />
                                <label class="grid-column-11">
                                    Mã phiếu:
                                </label>
                                <a-input
                                    class="grid-column-12"
                                    v-model:value="source.code"
                                    :disabled="isDisabled"
                                />

                                <label class="grid-column-1">
                                    <span>Tên NCC:</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-select
                                    class="grid-column-columnspan-2-5"
                                    showSearch
                                    :options="sSuppliers"
                                    :field-names="fields"
                                    @change="handleSupplierChanged"
                                    v-model:value="source.supplierId"
                                    :disabled="isDisabled"
                                >
                                </a-select>
                                <label class="grid-column-5"> Địa chỉ: </label>
                                <a-input
                                    class="grid-column-columnspan-6-9"
                                    v-model:value="supplierSelected.address"
                                    disabled
                                />
                                <label class="grid-column-9">
                                    Mã số thuế:
                                </label>
                                <a-input
                                    class="grid-column-10"
                                    v-model:value="supplierSelected.taxtCode"
                                    disabled
                                />
                                <label class="grid-column-11">
                                    Nội dung:
                                </label>
                                <a-input
                                    class="grid-column-12"
                                    v-model:value="source.description"
                                    :disabled="isDisabled"
                                />

                                <label class="grid-column-1">
                                    Người lập:
                                </label>
                                <a-select
                                    class="grid-column-columnspan-2-5"
                                    :options="sUsers"
                                    :field-names="userColumns"
                                    show-search
                                    v-model:value="source.impUserId"
                                    :disabled="isDisabled"
                                >
                                </a-select>

                                <label class="grid-column-5">
                                    Người giao:
                                </label>
                                <a-input
                                    class="grid-column-columnspan-6-9"
                                    v-model:value="source.deliverer"
                                    :disabled="isDisabled"
                                />
                                <label class="grid-column-9">
                                    Người nhận:
                                </label>
                                <a-select
                                    class="grid-column-columnspan-10-13"
                                    :options="sUsers"
                                    :field-names="userColumns"
                                    show-search
                                    v-model:value="source.receiverUserId"
                                    :disabled="isDisabled"
                                >
                                </a-select>

                                <a-divider
                                    class="grid-column-columnspan-1-13"
                                    style="
                                        height: 1px;
                                        background-color: #f8f8f8;
                                    "
                                />

                                <label class="grid-column-1">
                                    <span>Tên hàng:</span>
                                    <span class="text-danger me-1">*</span>
                                </label>
                                <a-select
                                    class="grid-column-columnspan-2-7"
                                    showSearch
                                    :field-names="fields"
                                    :options="sMedicineTypes"
                                    @change="handleMedicineTypeChanged"
                                    v-model:value="
                                        dImpMestMedicineSelected.medicineTypeId
                                    "
                                    :disabled="isDisabled"
                                />
                                <label class="grid-column-7"> Mã hàng: </label>
                                <a-input
                                    class="grid-column-8"
                                    v-model:value="
                                        dImpMestMedicineSelected.code
                                    "
                                    :disabled="isDisabled"
                                />
                                <label class="grid-column-9"> Nồng độ: </label>
                                <a-input
                                    class="grid-column-10"
                                    v-model:value="
                                        dImpMestMedicineSelected.concentration
                                    "
                                    disabled
                                />
                                <label class="grid-column-11">
                                    Hàm lượng:
                                </label>
                                <a-input
                                    class="grid-column-12"
                                    v-model:value="
                                        dImpMestMedicineSelected.content
                                    "
                                    disabled
                                />

                                <label class="grid-column-1"> Nước SX: </label>
                                <a-select
                                    class="grid-column-2"
                                    :field-names="fields"
                                    :options="sCountries"
                                    showSearch
                                    v-model:value="
                                        dImpMestMedicineSelected.countryId
                                    "
                                    disabled
                                />

                                <label class="grid-column-3"> Hãng SX: </label>
                                <a-input
                                    class="grid-column-4"
                                    v-model:value="
                                        dImpMestMedicineSelected.manufacturer
                                    "
                                    disabled
                                />
                                <label class="grid-column-5">
                                    Đơn vị tính:
                                </label>
                                <a-select
                                    class="grid-column-6"
                                    :field-names="fields"
                                    :options="sUnits"
                                    :value="dImpMestMedicineSelected.unitId"
                                    disabled
                                />
                                <label class="grid-column-7">Giá nhập: </label>
                                <a-input-number
                                    @input="calculateTotalAmout"
                                    class="grid-column-8 w-100"
                                    v-model:value="
                                        dImpMestMedicineSelected.impPrice
                                    "
                                    :disabled="isDisabled"
                                    min="0"
                                />
                                <label class="grid-column-9"
                                    >VAT nhập (%):
                                </label>
                                <a-input-number
                                    @input="calculateTotalAmout"
                                    class="grid-column-10 w-100"
                                    v-model:value="
                                        dImpMestMedicineSelected.impVatRate
                                    "
                                    :disabled="isDisabled"
                                    min="0"
                                    max="100"
                                />

                                <label class="grid-column-11"
                                    >Thuế nhập (%):
                                </label>
                                <a-input-number
                                    @input="calculateTotalAmout"
                                    class="grid-column-12 w-100"
                                    v-model:value="
                                        dImpMestMedicineSelected.taxRate
                                    "
                                    :disabled="isDisabled"
                                    min="0"
                                    max="100"
                                />

                                <label class="grid-column-1">Số lượng: </label>
                                <a-input-number
                                    @input="calculateTotalAmout"
                                    class="grid-column-2 w-100"
                                    v-model:value="
                                        dImpMestMedicineSelected.impQuantity
                                    "
                                    :disabled="isDisabled"
                                    min="0"
                                />
                                <label class="grid-column-3"
                                    >Thành tiền:
                                </label>
                                <a-input-number
                                    class="grid-column-4 w-100"
                                    :formatter="formatNumber"
                                    v-model:value="
                                        dImpMestMedicineSelected.impAmount
                                    "
                                    :disabled="isDisabled"
                                    min="0"
                                />
                                <label class="grid-column-5">QĐ thầu: </label>
                                <a-input
                                    class="grid-column-6"
                                    v-model:value="
                                        dImpMestMedicineSelected.tenderDecision
                                    "
                                    :disabled="isDisabled"
                                />
                                <label class="grid-column-7">Gói thầu: </label>
                                <a-input
                                    class="grid-column-8"
                                    v-model:value="
                                        dImpMestMedicineSelected.tenderPackage
                                    "
                                    :disabled="isDisabled"
                                />
                                <label class="grid-column-9">Năm thầu: </label>
                                <a-input-number
                                    class="grid-column-10 w-100"
                                    v-model:value="
                                        dImpMestMedicineSelected.tenderYear
                                    "
                                    :disabled="isDisabled"
                                    min="0"
                                />
                                <label class="grid-column-11"
                                    >Số đăng ký:
                                </label>
                                <a-input
                                    class="grid-column-12"
                                    v-model:value="
                                        dImpMestMedicineSelected.registrationNumber
                                    "
                                    :disabled="isDisabled"
                                />

                                <label class="grid-column-1">Số Lô: </label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="dImpMestMedicineSelected.lot"
                                    :disabled="isDisabled"
                                />
                                <label class="grid-column-3">Hạn dùng: </label>
                                <input
                                    class="datetime grid-column-4"
                                    type="date"
                                    v-model="dImpMestMedicineSelected.dueDate"
                                    :disabled="isDisabled"
                                />

                                <a-button
                                    type="primary"
                                    class="grid-column-columnspan-11-13"
                                    @click="handleUpdateImMest()"
                                >
                                    Cập nhật (Ctl + A)
                                </a-button>

                                <a-table
                                    class="ant-table-striped grid-column-columnspan-1-13 table-overflow-x"
                                    size="middle"
                                    bordered
                                    :scroll="{ y: 200 }"
                                    :pagination="false"
                                    :columns="pricePolicyColumns"
                                    :data-source="
                                        dImpMestMedicineSelected.sMedicinePricePolicies
                                    "
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
                                                :disabled="isDisabled"
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
                                                :disabled="isDisabled"
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
                                                :disabled="
                                                    !record.isHeIn || isDisabled
                                                "
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
                                                :disabled="
                                                    !record.isHeIn || isDisabled
                                                "
                                            />
                                        </template>
                                        <template
                                            v-else-if="
                                                column.key === 'executionTime'
                                            "
                                        >
                                            <input
                                                :disabled="isDisabled"
                                                class="datetime my-0 mx-0 w-100"
                                                type="date"
                                                v-model="record.executionTime"
                                            />
                                        </template>
                                    </template>
                                </a-table>

                                <a-table
                                    class="ant-table-striped grid-column-columnspan-1-13 mt-3 table-overflow-x"
                                    size="middle"
                                    :customRow="handleRowClickImpMestMedicine"
                                    :columns="impMestMedicineColumns"
                                    :data-source="source.dImpMestMedicines"
                                    bordered
                                    :pagination="false"
                                >
                                    <template #bodyCell="{ column, record }">
                                        <template
                                            v-if="column.key === 'dueDate'"
                                        >
                                            <span>{{
                                                record.dueDate === null
                                                    ? record.dueDate
                                                    : new Date(
                                                          record.dueDate
                                                      ).toLocaleDateString()
                                            }}</span>
                                        </template>
                                        <template
                                            v-if="column.key === 'unitId'"
                                        >
                                            <a-select
                                                class="w-100"
                                                style="
                                                     {
                                                        padding: 0px;
                                                    }
                                                "
                                                v-model:value="record.unitId"
                                                :field-names="fields"
                                                :options="sUnits"
                                                disabled
                                            />
                                        </template>
                                        <template
                                            v-else-if="column.key === 'action'"
                                        >
                                            <span>
                                                <button
                                                    class="btn btn-outline-danger border-0 btn-sm"
                                                    title="Xóa"
                                                    :disabled="isDisabled"
                                                    @click="
                                                        handleDeleteImpMestMedicine(
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
                    <a-tab-pane key="2" tab="Hóa đơn"></a-tab-pane>
                </a-tabs>
            </div>
            <template #footer>
                <a-button
                    v-if="source.impMestStatus === 0"
                    class="btn-save"
                    :loading="loading"
                    @click.prevent="handleSave"
                    >Lưu tạm</a-button
                >
                <a-button
                    v-if="source.impMestStatus === 0"
                    class="btn-save"
                    :loading="loading"
                    @click.prevent="handleEdit"
                    >Sửa</a-button
                >
                <a-button
                    v-if="
                        source.impMestStatus !== 3 &&
                        source.impMestStatus !== 4 &&
                        source.impMestStatus !== 5
                    "
                    type="primary"
                    class="btn-save"
                    @click.prevent="handleStockIn"
                    >Nhận kho</a-button
                >
                <a-button
                    v-if="
                        source.impMestStatus === 3 || source.impMestStatus === 4
                    "
                    type="primary"
                    class="btn-save"
                    @click.prevent="handleCanceled"
                    >Hủy nhập</a-button
                >
            </template>
        </a-modal>
    </form>
</template>

<script lang="ts">
import { Modal } from "ant-design-vue";
import dayjs from "dayjs";
import { defineComponent, ref, computed, watch, reactive, PropType } from "vue";
import {
    DImpMestModel,
    DImpMestMedicineModel,
    SupplierModel,
    MedicineTypeModel,
    RoomModel,
    CountryModel,
    UnitModel,
    UserModel,
    MedicinePricePolicyModel,
} from "@/models";
import {
    medicineTypeService,
    roomService,
    supplierService,
    countryService,
    unitService,
    userService,
    impMestService,
    medicinePricePolicyService,
} from "@/services";

export default defineComponent({
    name: "PharmaceuticalProcureFromSupplierView",
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
        const isDisabled = ref<boolean>(false);

        const title = ref<string>("Nhập thuốc từ nhà cung cấp");
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const activeKey = ref<string>("1");
        const fields = ref({ value: "id", label: "name" });
        const userColumns = ref({ value: "id", label: "userName" });

        const sSuppliers = ref<SupplierModel[]>([]);
        const sMedicineTypes = ref<MedicineTypeModel[]>([]);
        const sStocks = ref<RoomModel[]>([]);
        const sCountries = ref<CountryModel[]>([]);
        const sUnits = ref<UnitModel[]>([]);
        const sUsers = ref<UserModel[]>([]);
        const sMedicinePricePolicies = ref<MedicinePricePolicyModel[]>([]);

        const source = ref<DImpMestModel>({
            id: null,
            /// Mã phiếu
            code: null,
            /// Trạng thái
            impMestStatus: 0,
            empMestStatus: 0,
            /// Kho nhập
            impStockId: null,
            /// Kho xuất
            expStockId: null,
            /// Loại phiếu nhập, xuất
            impExpMestTypeId: 0,
            /// Người nhận
            receiverUserId: null,
            /// Thời gian nhập
            impTime: null,
            /// Người lập
            impUserId: null,
            /// Ngày duyệt
            approverTime: null,
            /// NGười duyệt
            approverUserId: null,
            /// Nội dung
            description: null,
            /// Phòng yêu cầu
            reqRoomId: null,
            /// Khoa yêu cầu
            reqDepartmentId: null,
            /// Id điều trị
            treatmentId: null,
            /// Id Bệnh nhân
            patientId: null,
            /// Nhà cung cấp
            supplierId: null,
            /// Nhà cung cấp
            supplierAddress: null,
            /// Ngày hóa đơn
            invTime: null,
            /// Số hóa đơn
            invNo: null,
            /// Người giao
            deliverer: null,
            /// Ngày nhập kho
            stockImpTime: null,
            /// Người nhập kho
            stockImpUserId: null,
            dImpMestMedicines: [],
        });

        const dImpMestMedicineSelected = ref<DImpMestMedicineModel>({
            id: null,
            code: null,
            // Mã BH
            heInCode: null,
            // Tên
            name: null,
            // Đường dùng thuốc
            medicineLineId: null,
            // Nhóm thuốc
            medicineGroupId: null,
            // Nhóm thuốc
            medicineTypeId: null,
            // Thuốc
            medicineId: null,
            // Đơn vị tính
            unitId: null,
            // Hướng dẫn
            tutorial: null,
            // Nước sản xuất
            countryId: null,
            // Giá nhập
            impPrice: null,
            // Số lượng nhập
            impQuantity: null,
            // Phần trăm vat giá nhập
            impVatRate: null,
            // Phần trăm thuế
            taxRate: null,
            // Thanh tien
            impAmount: null,
            // Hoạt chất
            activeSubstance: null,
            // Nồng độ
            concentration: null,
            // Hàm lượng
            content: null,
            // Hãng sản xuất
            manufacturer: null,
            // Quy cách đóng gói
            packagingSpecifications: null,
            // Số ĐK
            registrationNumber: null,
            // Lô
            lot: null,
            // Hạn dùng
            dueDate: null,
            // Quyệt định thầu
            tenderDecision: null,
            // Gói thầu
            tenderPackage: null,
            // Nhóm thầu
            tenderGroup: null,
            // Năm thầu
            tenderYear: null,
            sMedicinePricePolicies: [],
        });
        const sMedicineTypeSelected = ref<MedicineTypeModel>();
        const supplierSelected = ref<SupplierModel>({
            id: undefined,
            code: null,
            name: null,
            inactive: false,
        });

        const impMestMedicineColumns = reactive([
            {
                title: "Mã thuốc",
                key: "code",
                dataIndex: "code",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Tên thuốc",
                key: "name",
                dataIndex: "name",
                width: 250,
                className: "column-header-center",
            },
            {
                title: "ĐVT",
                key: "unitId",
                dataIndex: "unitId",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Giá nhập",
                key: "impPrice",
                dataIndex: "impPrice",
                width: 150,
                className: "column-header-center",
                align: "right",
            },
            {
                title: "Số lượng",
                key: "impQuantity",
                dataIndex: "impQuantity",
                width: 100,
                className: "column-header-center",
                align: "right",
            },
            {
                title: "VAT(%)",
                key: "impVatRate",
                dataIndex: "impVatRate",
                width: 100,
                className: "column-header-center",
                align: "right",
            },
            {
                title: "Thành tiền",
                key: "impAmount",
                dataIndex: "impAmount",
                width: 150,
                className: "column-header-center",
                align: "right",
            },
            {
                title: "Số lô",
                key: "lot",
                dataIndex: "lot",
                width: 150,
                className: "column-header-center",
            },
            {
                title: "Hạn dùng",
                key: "dueDate",
                dataIndex: "dueDate",
                width: 120,
                className: "column-header-center",
            },
            {
                title: "#",
                key: "action",
                dataIndex: "action",
                width: 70,
                align: "center",
                className: "column-header-center",
            },
        ]);

        const pricePolicyColumns = reactive([
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

        const show = computed(() => props.visible);

        /* eslint-disable */
        watch(show, async (value) => {
            debugger;
            if (value) {
                reset();
                inItData();

                result.value = false;
                loading.value = true;
                isDisabled.value = true;

                if (
                    props.data !== null &&
                    props.data?.id !== null &&
                    props.data?.id !== undefined
                ) {
                    isDisabled.value = true;

                    var resultDto =
                        await impMestService.importFromSupplierGetById(
                            props.data.id
                        );
                    if (resultDto.data.isSuccessed) {
                        title.value = "Nhập thuốc từ nhà cung cấp";
                        source.value = resultDto.data.result;

                        if (source.value.impTime !== null) {
                            source.value.impTime =
                                source.value.impTime.split("T")[0];
                        }
                        if (source.value.invTime !== null) {
                            source.value.invTime =
                                source.value.invTime.split("T")[0];
                        }
                        if (source.value.approverTime !== null) {
                            source.value.approverTime =
                                source.value.approverTime.split("T")[0];
                        }
                        if (source.value.stockImpTime !== null) {
                            source.value.stockImpTime =
                                source.value.stockImpTime.split("T")[0];
                        }

                        if (
                            source.value.dImpMestMedicines !== null &&
                            source.value.dImpMestMedicines &&
                            source.value.dImpMestMedicines.length > 0
                        ) {
                            source.value.dImpMestMedicines.forEach(
                                (dImpMestMedicine) => {
                                    if (dImpMestMedicine.dueDate !== null) {
                                        dImpMestMedicine.dueDate =
                                            dImpMestMedicine.dueDate.split(
                                                "T"
                                            )[0];
                                    }

                                    if (
                                        dImpMestMedicine.sMedicinePricePolicies &&
                                        dImpMestMedicine.sMedicinePricePolicies !==
                                            null
                                    ) {
                                        dImpMestMedicine.sMedicinePricePolicies.forEach(
                                            (price) => {
                                                if (
                                                    price.executionTime !== null
                                                ) {
                                                    price.executionTime =
                                                        price.executionTime.split(
                                                            "T"
                                                        )[0];
                                                }
                                            }
                                        );
                                    }
                                }
                            );

                            dImpMestMedicineSelected.value = {
                                ...source.value.dImpMestMedicines[0],
                            };
                        }
                    } else {
                        Modal.error({
                            content: resultDto.data.message,
                            okText: "Đồng ý",
                        });
                        toggle();
                    }

                    loading.value = false;
                } else {
                    isDisabled.value = false;
                }

                loading.value = false;
            }
        });

        //#region Function
        async function inItData() {
            sSuppliers.value = await getSuppliers();
            sMedicineTypes.value = await getMedicineTypes();
            sStocks.value = await getStocks();
            sCountries.value = await getCountries();
            sUnits.value = await getUnits();
            sUsers.value = await getUsers();
            sMedicinePricePolicies.value = await getMedicinePricePolicies();
        }

        async function getSuppliers(): Promise<SupplierModel[]> {
            return (await supplierService.getAll()).data.result;
        }

        async function getMedicineTypes(): Promise<MedicineTypeModel[]> {
            return (await medicineTypeService.getAll()).data.result;
        }

        async function getStocks(): Promise<RoomModel[]> {
            return (await roomService.getByStocks()).data.result;
        }

        async function getCountries(): Promise<CountryModel[]> {
            return (await countryService.getAll()).data.result;
        }

        async function getUnits(): Promise<UnitModel[]> {
            return (await unitService.getAll()).data.result;
        }

        async function getUsers(): Promise<UserModel[]> {
            return (await userService.getAll()).data.result;
        }

        async function getMedicinePricePolicies(): Promise<
            MedicinePricePolicyModel[]
        > {
            return (await medicinePricePolicyService.getAll()).data.result;
        }

        const reset = () => {
            source.value = {
                id: null,
                /// Mã phiếu
                code: null,
                /// Trạng thái
                impMestStatus: 0,
                empMestStatus: 0,
                /// Kho nhập
                impStockId: null,
                /// Kho xuất
                expStockId: null,
                /// Loại phiếu nhập, xuất
                impExpMestTypeId: 0,
                /// Người nhận
                receiverUserId: null,
                /// Thời gian nhập
                impTime: null,
                /// Người lập
                impUserId: null,
                /// Ngày duyệt
                approverTime: null,
                /// NGười duyệt
                approverUserId: null,
                /// Nội dung
                description: null,
                /// Phòng yêu cầu
                reqRoomId: null,
                /// Khoa yêu cầu
                reqDepartmentId: null,
                /// Id điều trị
                treatmentId: null,
                /// Id Bệnh nhân
                patientId: null,
                /// Nhà cung cấp
                supplierId: null,
                /// Nhà cung cấp
                supplierAddress: null,
                /// Ngày hóa đơn
                invTime: null,
                /// Số hóa đơn
                invNo: null,
                /// Người giao
                deliverer: null,
                /// Ngày nhập kho
                stockImpTime: null,
                /// Người nhập kho
                stockImpUserId: null,
                dImpMestMedicines: [],
            };

            dImpMestMedicineSelected.value = {
                id: null,
                code: null,
                // Mã BH
                heInCode: null,
                // Tên
                name: null,
                // Đường dùng thuốc
                medicineLineId: null,
                // Nhóm thuốc
                medicineGroupId: null,
                // Nhóm thuốc
                medicineTypeId: null,
                // Thuốc
                medicineId: null,
                // Đơn vị tính
                unitId: null,
                // Hướng dẫn
                tutorial: null,
                // Nước sản xuất
                countryId: null,
                // Giá nhập
                impPrice: null,
                // Số lượng nhập
                impQuantity: null,
                // Phần trăm vat giá nhập
                impVatRate: null,
                // Phần trăm thuế
                taxRate: null,
                // Thanh tien
                impAmount: null,
                // Hoạt chất
                activeSubstance: null,
                // Nồng độ
                concentration: null,
                // Hàm lượng
                content: null,
                // Hãng sản xuất
                manufacturer: null,
                // Quy cách đóng gói
                packagingSpecifications: null,
                // Số ĐK
                registrationNumber: null,
                // Lô
                lot: null,
                // Hạn dùng
                dueDate: null,
                // Quyệt định thầu
                tenderDecision: null,
                // Gói thầu
                tenderPackage: null,
                // Nhóm thầu
                tenderGroup: null,
                // Năm thầu
                tenderYear: null,
                sMedicinePricePolicies: [],
            };
        };

        const setImpMestMedicine = (
            data: DImpMestMedicineModel | undefined
        ) => {
            if (data !== undefined) {
                const dataCopy = { ...data };
                dImpMestMedicineSelected.value = dataCopy;
            }
        };

        const calculateTotalAmout = () => {
            if (
                dImpMestMedicineSelected.value.impQuantity &&
                dImpMestMedicineSelected.value.impVatRate &&
                dImpMestMedicineSelected.value.impPrice &&
                dImpMestMedicineSelected.value.taxRate
            ) {
                let vatRate = dImpMestMedicineSelected.value.impVatRate / 100;
                let taxRate = dImpMestMedicineSelected.value.taxRate / 100;
                let impAmount =
                    dImpMestMedicineSelected.value.impQuantity *
                    dImpMestMedicineSelected.value.impPrice;

                dImpMestMedicineSelected.value.impAmount =
                    impAmount * (1 + vatRate + taxRate);
            }
        };

        //#endregion

        //#region Event
        const toggle = function () {
            emit("toggle", result);
        };

        const handleCancel = function () {
            toggle();
        };

        const handleRowClickImpMestMedicine = (
            record: DImpMestMedicineModel
        ) => {
            return {
                onClick: () => {
                    setImpMestMedicine(record);
                },
            };
        };

        const handleUpdateImMest = () => {
            let dImpMestMedicine = source.value.dImpMestMedicines.find(
                (f) => f.code == dImpMestMedicineSelected.value.code
            );
            if (dImpMestMedicine !== null && dImpMestMedicine != undefined) {
                const index =
                    source.value.dImpMestMedicines.indexOf(dImpMestMedicine);
                source.value.dImpMestMedicines[index] = {
                    ...dImpMestMedicineSelected.value,
                };
            } else if (dImpMestMedicineSelected.value.medicineTypeId !== null) {
                source.value.dImpMestMedicines.push({
                    ...dImpMestMedicineSelected.value,
                });
            }
        };

        const handleSupplierChanged = (value: string) => {
            if (value !== null) {
                let supplier = sSuppliers.value.find((f) => f.id === value);
                if (supplier !== undefined && supplier !== null) {
                    supplierSelected.value = { ...supplier };
                }
            }
        };

        const handleMedicineTypeChanged = (value: string) => {
            if (value !== null) {
                let sMedicineType = sMedicineTypes.value.find(
                    (f) => f.id === value
                );
                if (sMedicineType !== undefined && sMedicineType !== null) {
                    sMedicineTypeSelected.value = { ...sMedicineType };

                    if (dImpMestMedicineSelected.value !== undefined) {
                        dImpMestMedicineSelected.value.id = null;
                        dImpMestMedicineSelected.value.medicineId = null;
                        dImpMestMedicineSelected.value.code =
                            sMedicineTypeSelected.value.code;
                        dImpMestMedicineSelected.value.heInCode =
                            sMedicineTypeSelected.value.heInCode;
                        dImpMestMedicineSelected.value.name =
                            sMedicineTypeSelected.value.name;
                        dImpMestMedicineSelected.value.medicineLineId =
                            sMedicineTypeSelected.value.medicineLineId;
                        dImpMestMedicineSelected.value.medicineGroupId =
                            sMedicineTypeSelected.value.medicineGroupId;
                        dImpMestMedicineSelected.value.medicineTypeId =
                            sMedicineTypeSelected.value.id !== undefined
                                ? sMedicineTypeSelected.value.id
                                : null;
                        dImpMestMedicineSelected.value.unitId =
                            sMedicineTypeSelected.value.unitId;
                        dImpMestMedicineSelected.value.unitCode =
                            sMedicineTypeSelected.value.unitCode;
                        dImpMestMedicineSelected.value.unitName =
                            sMedicineTypeSelected.value.unitName;
                        dImpMestMedicineSelected.value.tutorial =
                            sMedicineTypeSelected.value.tutorial;
                        dImpMestMedicineSelected.value.countryId =
                            sMedicineTypeSelected.value.countryId;
                        dImpMestMedicineSelected.value.impPrice =
                            sMedicineTypeSelected.value.impPrice;
                        dImpMestMedicineSelected.value.activeSubstance =
                            sMedicineTypeSelected.value.activeSubstance;
                        dImpMestMedicineSelected.value.concentration =
                            sMedicineTypeSelected.value.concentration;
                        dImpMestMedicineSelected.value.impVatRate =
                            sMedicineTypeSelected.value.impVatRate;
                        dImpMestMedicineSelected.value.taxRate =
                            sMedicineTypeSelected.value.taxRate;
                        dImpMestMedicineSelected.value.activeSubstance =
                            sMedicineTypeSelected.value.activeSubstance;
                        dImpMestMedicineSelected.value.concentration =
                            sMedicineTypeSelected.value.concentration;
                        dImpMestMedicineSelected.value.content =
                            sMedicineTypeSelected.value.content;
                        dImpMestMedicineSelected.value.manufacturer =
                            sMedicineTypeSelected.value.manufacturer;
                        dImpMestMedicineSelected.value.packagingSpecifications =
                            sMedicineTypeSelected.value.packagingSpecifications;
                        dImpMestMedicineSelected.value.registrationNumber =
                            sMedicineTypeSelected.value.registrationNumber;
                        dImpMestMedicineSelected.value.sMedicinePricePolicies =
                            JSON.parse(
                                JSON.stringify(sMedicinePricePolicies.value)
                            );
                    }
                }
            }
        };

        const handleSave = async () => {
            loading.value = true;
            result.value = false;

            source.value.impExpMestTypeId = 1;

            var resultDto = await impMestService.importFromSupplierSaveAsDraft(
                source.value
            );
            if (!resultDto.data.isSuccessed) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                result.value = true;
                toggle();
            }

            loading.value = false;
        };

        const handleEdit = async () => {
            isDisabled.value = false;
        };

        const handleStockIn = async () => {
            result.value = false;
            loading.value = true;

            source.value.impExpMestTypeId = 1;

            let resultDto = await impMestService.importFromSupplierStockIn(
                source.value
            );
            if (!resultDto.data.isSuccessed) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                result.value = true;
                toggle();
            }

            loading.value = false;
        };

        const handleCanceled = async () => {
            loading.value = true;
            result.value = false;

            if (source.value !== undefined && source.value.id !== null) {
                let resultDto = await impMestService.importFromSupplierCanceled(
                    source.value.id
                );
                if (!resultDto.data.isSuccessed) {
                    Modal.error({
                        content: resultDto.data.message,
                        okText: "Đồng ý",
                    });
                } else {
                    result.value = true;
                    toggle();
                }
            }

            loading.value = false;
        };

        const formatNumber = (value: number | string) => {
            if (value === null || value === "") {
                return null;
            }
            return parseFloat(value.toString()).toFixed(2);
        };

        const handleDeleteImpMestMedicine = (record: DImpMestMedicineModel) => {
            let index = source.value.dImpMestMedicines.indexOf(record, 0);
            if (index !== -1) {
                source.value.dImpMestMedicines.splice(index, 1);
            }
        };

        //#endregion

        return {
            selectedDate: dayjs("2023-08-13T11:29:12.966"),
            isDisabled,
            title,
            loading,
            result,
            activeKey,
            show,
            fields,
            userColumns,
            source,
            sSuppliers,
            sMedicineTypes,
            sStocks,
            sCountries,
            sUnits,
            sUsers,
            impMestMedicineColumns,
            supplierSelected,
            dImpMestMedicineSelected,
            sMedicineTypeSelected,
            pricePolicyColumns,
            calculateTotalAmout,
            handleUpdateImMest,
            handleSupplierChanged,
            handleMedicineTypeChanged,
            handleRowClickImpMestMedicine,
            handleCancel,
            handleSave,
            handleEdit,
            handleStockIn,
            handleCanceled,
            formatNumber,
            handleDeleteImpMestMedicine,
        };
    },
});
</script>

<style scoped>
.medicine-card-body {
    margin: -24px;
    max-height: 650px;
    height: 650px;
    overflow-y: auto;
}

.grid-genaral {
    display: grid;
    grid-template-columns: repeat(6, auto minmax(50px, 1fr));
    grid-row-gap: 5px;
    grid-column-gap: 10px;
    align-items: center;
}

.grid-column-columnspan-1-13 {
    grid-column: 1/13;
}

.grid-column-columnspan-2-5 {
    grid-column: 2/5;
}

.grid-column-columnspan-2-7 {
    grid-column: 2/7;
}

.grid-column-columnspan-6-9 {
    grid-column: 6/9;
}

.grid-column-columnspan-10-13 {
    grid-column: 10/13;
}

.grid-column-columnspan-11-13 {
    grid-column: 11/13;
}

.grid-column-1 {
    grid-column: 1/2;
}

.grid-column-2 {
    grid-column: 2/3;
}

.grid-column-3 {
    grid-column: 3/4;
}

.grid-column-4 {
    grid-column: 4/5;
}

.grid-column-5 {
    grid-column: 5/6;
}

.grid-column-6 {
    grid-column: 6/7;
}

.grid-column-7 {
    grid-column: 7/8;
}

.grid-column-8 {
    grid-column: 8/9;
}

.grid-column-9 {
    grid-column: 9/10;
}

.grid-column-10 {
    grid-column: 10/11;
}

.grid-column-11 {
    grid-column: 11/12;
}

.grid-column-12 {
    grid-column: 12/13;
}

.ant-divider-horizontal {
    margin: 5px 0;
}

@media (max-width: 768px) {
    .grid-genaral {
        grid-template-columns: 1fr;
    }
    .grid-column-columnspan-1-13 {
        grid-column: 1/1;
    }

    .grid-column-columnspan-2-5 {
        grid-column: 1/1;
    }

    .grid-column-columnspan-2-7 {
        grid-column: 1/1;
    }

    .grid-column-columnspan-6-9 {
        grid-column: 1/1;
    }

    .grid-column-columnspan-10-13 {
        grid-column: 1/1;
    }

    .grid-column-columnspan-11-13 {
        grid-column: 1/1;
    }

    .grid-column-1 {
        grid-column: 1/1;
    }

    .grid-column-2 {
        grid-column: 1/1;
    }

    .grid-column-3 {
        grid-column: 1/1;
    }

    .grid-column-4 {
        grid-column: 1/1;
    }

    .grid-column-5 {
        grid-column: 1/1;
    }

    .grid-column-6 {
        grid-column: 1/1;
    }

    .grid-column-7 {
        grid-column: 1/1;
    }

    .grid-column-8 {
        grid-column: 1/1;
    }

    .grid-column-9 {
        grid-column: 1/1;
    }

    .grid-column-10 {
        grid-column: 1/1;
    }

    .grid-column-11 {
        grid-column: 1/1;
    }

    .grid-column-12 {
        grid-column: 1/1;
    }
}

.table-overflow-x {
    width: 100%;
    overflow-x: auto;
}

.grid-pricePolicy {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto 1fr;
    grid-row-gap: 5px;
    align-items: top;
}
</style>
