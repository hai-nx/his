<template>
    <form>
        <a-modal
            :visible="show"
            :title="title"
            @cancel="handleCancel"
            width="1280px"
            :mask-closable="false"
        >
            <div class="container card-body">
                <div class="container card-container">
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
                    />
                    <label class="grid-column-5">
                        <span>Ngày lập:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <input
                        class="datetime grid-column-6"
                        type="date"
                        v-model="source.reqTime"
                        :disabled="isDisabled"
                    />
                    <label class="grid-column-7">
                        <span>Người lập:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-select
                        class="grid-column-columnspan-8-11"
                        :options="sUsers"
                        :field-names="userColumns"
                        show-search
                        v-model:value="source.creationUserId"
                        :disabled="isDisabled"
                    />

                    <label class="grid-column-1">
                        <span>Kho xuất:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-select
                        class="grid-column-columnspan-2-5"
                        :field-names="fields"
                        :options="sStocks"
                        showSearch
                        v-model:value="source.expStockId"
                        :disabled="isDisabled"
                    />
                    <label class="grid-column-5"> Mã phiếu: </label>
                    <a-input
                        class="grid-column-6"
                        v-model:value="source.code"
                        :disabled="isDisabled"
                    />

                    <label class="grid-column-7"> Nội dung: </label>
                    <a-input
                        class="grid-column-columnspan-8-13"
                        v-model:value="source.description"
                        :disabled="isDisabled"
                    />

                    <a-divider
                        class="grid-column-columnspan-1-13"
                        style="height: 1px; background-color: #f8f8f8"
                    />

                    <label class="grid-column-1">
                        <span>Tên thuốc:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-select
                        class="grid-column-columnspan-2-7"
                        showSearch
                        @change="handleMedicineStockChanged"
                        v-model:value="inOutStockMedicineSelected.medicineId"
                        :field-names="fieldMedistocks"
                        :options="dMedicineStocks"
                        :disabled="isDisabled"
                    >
                        <template #option="{ medicineCode, medicineName }">
                            <div class="row">
                                <div class="col-md-3">
                                    <span>{{ medicineCode }}</span>
                                </div>
                                <div class="col-md-9">
                                    <span>{{ medicineName }}</span>
                                </div>
                            </div>
                        </template>
                    </a-select>
                    <label class="grid-column-7">
                        <span>Mã thuốc:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-input
                        class="grid-column-8"
                        v-model:value="inOutStockMedicineSelected.code"
                        disabled
                    />

                    <label class="grid-column-9"> ĐVT: </label>
                    <a-select
                        class="grid-column-610"
                        :field-names="fields"
                        :options="sUnits"
                        v-model:value="inOutStockMedicineSelected.unitId"
                        disabled
                    />
                    <label class="grid-column-11"> Nồng độ: </label>
                    <a-input
                        class="grid-column-12"
                        disabled
                        v-model:value="inOutStockMedicineSelected.concentration"
                    />

                    <label class="grid-column-1"> Hàm lượng: </label>
                    <a-input
                        class="grid-column-2"
                        disabled
                        v-model:value="inOutStockMedicineSelected.content"
                    />

                    <label class="grid-column-3"> Hoạt chất: </label>
                    <a-input
                        class="grid-column-4"
                        disabled
                        v-model:value="
                            inOutStockMedicineSelected.activeSubstance
                        "
                    />

                    <label class="grid-column-5"> Nước SX: </label>
                    <a-select
                        class="grid-column-6"
                        :field-names="fields"
                        :options="sCountries"
                        showSearch
                        v-model:value="inOutStockMedicineSelected.countryId"
                        disabled
                    />

                    <label class="grid-column-7"> Hãng SX: </label>
                    <a-input
                        class="grid-column-columnspan-8-13"
                        disabled
                        v-model:value="inOutStockMedicineSelected.manufacturer"
                    />

                    <label class="grid-column-1">Số lượng: </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-2 w-100"
                        :disabled="isDisabled"
                        min="0"
                        v-model:value="
                            inOutStockMedicineSelected.requestQuantity
                        "
                    />

                    <label class="grid-column-3">Giá nhập: </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-4 w-100"
                        disabled
                        min="0"
                        v-model:value="inOutStockMedicineSelected.impPrice"
                    />

                    <label class="grid-column-5">VAT (%): </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-6 w-100"
                        disabled
                        min="0"
                        max="100"
                        v-model:value="inOutStockMedicineSelected.impVatRate"
                    />

                    <label class="grid-column-7">Thuế (%): </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-8 w-100"
                        disabled
                        min="0"
                        max="100"
                        v-model:value="inOutStockMedicineSelected.impTaxRate"
                    />

                    <label class="grid-column-9">Thành tiền: </label>
                    <a-input-number
                        class="grid-column-columnspan-10-13 w-100"
                        disabled
                        min="0"
                        :formatter="formatNumber"
                        v-model:value="inOutStockMedicineSelected.impAmount"
                    />

                    <!-- <label class="grid-column-1"> Số ĐK: </label>
                    <a-input
                        class="grid-column-2"
                        disabled
                        v-model:value="
                            inOutStockMedicineSelected.registrationNumber
                        "
                    /> -->

                    <label class="grid-column-1"> Số lô: </label>
                    <a-input
                        class="grid-column-2"
                        disabled
                        v-model:value="inOutStockMedicineSelected.lot"
                    />

                    <label class="grid-column-3">Hạn dùng: </label>
                    <input
                        class="datetime grid-column-4"
                        type="date"
                        disabled
                        v-model="inOutStockMedicineSelected.dueDate"
                    />

                    <label class="grid-column-5">SL tồn: </label>
                    <a-input-number
                        class="grid-column-6 w-100"
                        disabled
                        min="0"
                        v-model:value="dMedicineStockSelected.availableQuantity"
                    />

                    <a-button
                        type="primary"
                        class="grid-column-columnspan-11-13"
                        :disabled="isDisabled"
                        @click="handleUpdateImMest()"
                    >
                        Cập nhật (Ctl + A)
                    </a-button>

                    <a-table
                        class="ant-table-striped grid-column-columnspan-1-13 mt-3 table-overflow-x"
                        size="middle"
                        :customRow="handleRowClickImpMestMedicine"
                        :columns="impMestMedicineColumns"
                        :data-source="source.inOutStockMedicines"
                        bordered
                        :pagination="false"
                    >
                        <template #bodyCell="{ column, record }">
                            <template v-if="column.key === 'dueDate'">
                                <span>{{
                                    record.dueDate === null
                                        ? record.dueDate
                                        : new Date(
                                              record.dueDate
                                          ).toLocaleDateString()
                                }}</span>
                            </template>
                            <template v-if="column.key === 'unitId'">
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
                            <template v-else-if="column.key === 'action'">
                                <span>
                                    <button
                                        class="btn btn-outline-danger border-0 btn-sm"
                                        title="Xóa"
                                        :disabled="isDisabled"
                                    >
                                        <i class="bi bi-x-lg"></i>
                                    </button>
                                </span>
                            </template>
                        </template>
                    </a-table>
                </div>
            </div>

            <template #footer>
                <a-button
                    v-if="source.status === 0 && isImport"
                    class="btn-save"
                    :loading="loading"
                    @click.prevent="handleSave"
                    >Lưu tạm</a-button
                >
                <a-button
                    v-if="source.status === 0 && isImport && source.id !== null"
                    class="btn-save"
                    :loading="loading"
                    @click.prevent="handleEdit"
                    >Sửa</a-button
                >
                <a-button
                    v-if="source.status === 0 && isImport"
                    type="primary"
                    class="btn-save"
                    @click.prevent="handleSendRequest"
                    >Gửi yêu cầu</a-button
                >
                <a-button
                    v-if="source.status === 1 && isImport"
                    class="btn-save"
                    @click.prevent="handleCanceledRequest"
                    >Hủy yêu cầu</a-button
                >
                <a-button
                    v-if="source.status === 3 && isImport"
                    type="primary"
                    class="btn-save"
                    @click.prevent="handleStockIn"
                    >Nhập kho</a-button
                >
                <a-button
                    v-if="source.status === 4 && isImport"
                    class="btn-save"
                    @click.prevent="handleCancelStockIn"
                    >Hủy nhập</a-button
                >

                <a-button
                    v-if="source.status === 1 && !isImport"
                    class="btn-save"
                    @click.prevent="handleApproved"
                    >Duyệt</a-button
                >
                <a-button
                    v-if="source.status === 2 && !isImport"
                    class="btn-save"
                    @click.prevent="handleCancelApproved"
                    >Hủy duyệt</a-button
                >
                <a-button
                    v-if="source.status === 2 && !isImport"
                    class="btn-save"
                    @click.prevent="handleStockOut"
                    >Xuất kho</a-button
                >
                <a-button
                    v-if="source.status === 3 && !isImport"
                    class="btn-save"
                    @click.prevent="handleCancelStockOut"
                    >Hủy xuất</a-button
                >

                <a-button
                    v-if="source.status === 0 && isImport && source.id !== null"
                    class="btn-save"
                    >Hủy phiếu</a-button
                >
            </template>
        </a-modal>
    </form>
</template>

<script lang="ts">
import { Modal } from "ant-design-vue";
import {
    defineComponent,
    ref,
    reactive,
    computed,
    PropType,
    watch,
    watchEffect,
} from "vue";
import {
    InOutStockModel,
    MedicineStockModel,
    RoomModel,
    UnitModel,
    UserModel,
    CountryModel,
    InOutStockMedicineModel,
} from "@/models";
import {
    roomService,
    userService,
    unitService,
    countryService,
    medicineStockService,
    inOutStockService,
} from "@/services";

export default defineComponent({
    name: "ImportFromAnotherStockView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        isImport: {
            type: Boolean,
            required: true,
        },
        data: {
            type: Object as PropType<InOutStockModel>,
        },
    },
    setup(props, { emit }) {
        const isDisabled = ref<boolean>(false);
        const title = ref<string>("Nhập từ kho khác");
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const fields = ref({ value: "id", label: "name" });
        const userColumns = ref({ value: "id", label: "userName" });
        const fieldMedistocks = ref({
            value: "medicineId",
            label: "medicineName",
        });

        const activeKey = ref<string>("1");
        const isOK = ref<boolean>(false);
        const isImport = computed(
            () => props.isImport || source.value.id === null
        );

        const sStocks = ref<RoomModel[]>([]);
        const sUnits = ref<UnitModel[]>([]);
        const sUsers = ref<UserModel[]>([]);
        const sCountries = ref<CountryModel[]>([]);
        const dMedicineStocks = ref<MedicineStockModel[]>([]);

        const show = computed(() => props.visible);
        const source = ref<InOutStockModel>({
            id: null,
            // Mã phiếu
            code: null,
            // Trạng thái phiếu
            status: 0,
            // Loại phiếu: 0 - Nhập, 1 - xuất
            type: 0,
            // Kho nhập
            impStockId: null,
            // Kho xuất
            expStockId: null,
            // Loại phiếu nhập, xuất
            inOutStockTypeId: null,
            /// Người nhận
            receiverUserId: null,
            // Người duyệt
            approverUserId: null,
            // Ngày duyệt
            approverTime: null,
            // Ngày tạo phiếu, yêu cầu
            reqTime: null,
            // Người tạo phiếu nhập
            creationUserId: null,
            // Ngày nhập kho
            stockImpTime: null,
            // Người nhập kho
            stockImpUserId: null,
            description: null,
            // Phòng yêu cầu
            reqRoomId: null,
            // Khoa yêu cầu
            reqDepartmentId: null,
            // Id Bệnh nhân
            patientId: null,
            // Id điều trị
            patientRecordId: null,
            // Nhà cung cấp
            supplierId: null,
            // Ngày hóa đơn
            invTime: null,
            // Số hóa đơn
            invNo: null,
            // NGười giao
            deliverer: null,
            // Ngày xuất kho
            stockExpTime: null,
            // Người xuất kho
            stockExpUserId: null,
            inOutStockMedicines: [],
        });

        const inOutStockMedicineSelected = ref<InOutStockMedicineModel>({
            id: null,
            // Mã thuốc
            code: null,
            // Mã BH
            heInCode: null,
            // Tên thuốc
            name: null,
            // Thứ tự sắp xếp
            sortOrder: null,
            // Đường dùng thuốc
            medicineLineId: null,
            // Nhóm thuốc
            medicineGroupId: null,
            // Nhóm thuốc
            medicineTypeId: null,
            // Đơn vị tính
            unitId: null,
            // Hướng dẫn
            tutorial: null,
            // Nước sản xuất
            countryId: null,
            // Giá nhập
            impPrice: null,
            // Số lượng YC
            requestQuantity: null,
            // Số lượng duyệt
            approvedQuantity: null,
            // Phần trăm vat giá nhập
            impVatRate: null,
            // Phần trăm thuế
            impTaxRate: null,
            // Thành tiền
            impAmount: null,
            // Diễn giải
            description: null,
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
            // Liều dùng
            dosage: null,
            // Lô
            lot: null,
            // Hạn dùng
            dueDate: null,
            // Số đăng ký
            registrationNumber: null,
            // Quyệt định thầu,
            tenderDecision: null,
            // Gói thầu
            tenderPackage: null,
            // Nhóm thầu
            tenderGroup: null,
            // Năm thầu
            tenderYear: null,
            // Id lô thuốc
            medicineId: null,
            inOutStockId: null,
            medicinePricePolicies: [],
        });

        const dMedicineStockSelected = ref<MedicineStockModel>({
            id: null,
            stockId: null,
            medicineId: null,
            quantity: null,
            availableQuantity: null,
            medicine: null,
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
                key: "requestQuantity",
                dataIndex: "requestQuantity",
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
                customRender: (text: any) => {
                    /* eslint-disable */
                    if (
                        text === null ||
                        text === undefined ||
                        text.value === undefined
                    ) {
                        return 0;
                    } else {
                        return new Intl.NumberFormat(navigator.language, {
                            style: "decimal",
                            minimumFractionDigits: 2,
                        }).format(text.value);
                    }
                },
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

        //#region Funtion
        const toggle = function () {
            emit("toggle", result);
        };

        watch(show, async (value) => {
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
                        await inOutStockService.importFromAnotherStockGetById(
                            props.data.id
                        );
                    if (resultDto.data.isSuccessed) {
                        title.value = "Nhập thuốc từ nhà cung cấp";
                        source.value = resultDto.data.result;

                        if (source.value.reqTime !== null) {
                            source.value.reqTime =
                                source.value.reqTime.split("T")[0];
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
                            source.value.inOutStockMedicines !== null &&
                            source.value.inOutStockMedicines &&
                            source.value.inOutStockMedicines.length > 0
                        ) {
                            source.value.inOutStockMedicines.forEach(
                                (inOutStockMedicine) => {
                                    if (inOutStockMedicine.dueDate !== null) {
                                        inOutStockMedicine.dueDate =
                                            inOutStockMedicine.dueDate.split(
                                                "T"
                                            )[0];
                                    }
                                }
                            );

                            inOutStockMedicineSelected.value = {
                                ...source.value.inOutStockMedicines[0],
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

        watchEffect(async () => {
            // Theo dõi expStockId thay đổi
            if (
                source.value.expStockId !== null &&
                source.value.expStockId !== undefined
            ) {
                dMedicineStocks.value = await getMedicineByStocks(
                    source.value.expStockId
                );
            } else {
                dMedicineStocks.value = [];
            }

            // Theo dõi thuốc thay đổi
            if (inOutStockMedicineSelected.value.medicineId != null) {
                let dMedicineStock = dMedicineStocks.value.find(
                    (f) =>
                        f.medicineId ==
                        inOutStockMedicineSelected.value.medicineId
                );
                if (dMedicineStock != null) {
                    dMedicineStockSelected.value = { ...dMedicineStock };
                } else {
                    dMedicineStockSelected.value = {
                        id: null,
                        stockId: null,
                        medicineId: null,
                        quantity: null,
                        availableQuantity: null,
                        medicine: null,
                    };
                }
            }
        });

        async function inItData() {
            sStocks.value = await getStocks();
            sUnits.value = await getUnits();
            sUsers.value = await getUsers();
            sCountries.value = await getCountries();
        }

        const reset = () => {
            source.value = {
                id: null,
                // Mã phiếu
                code: null,
                // Trạng thái phiếu
                status: 0,
                // Loại phiếu: 0 - Nhập, 1 - xuất
                type: 0,
                // Kho nhập
                impStockId: null,
                // Kho xuất
                expStockId: null,
                // Loại phiếu nhập, xuất
                inOutStockTypeId: null,
                /// Người nhận
                receiverUserId: null,
                // Người duyệt
                approverUserId: null,
                // Ngày duyệt
                approverTime: null,
                // Ngày tạo phiếu, yêu cầu
                reqTime: null,
                // Người tạo phiếu nhập
                creationUserId: null,
                // Ngày nhập kho
                stockImpTime: null,
                // Người nhập kho
                stockImpUserId: null,
                description: null,
                // Phòng yêu cầu
                reqRoomId: null,
                // Khoa yêu cầu
                reqDepartmentId: null,
                // Id Bệnh nhân
                patientId: null,
                // Id điều trị
                patientRecordId: null,
                // Nhà cung cấp
                supplierId: null,
                // Ngày hóa đơn
                invTime: null,
                // Số hóa đơn
                invNo: null,
                // NGười giao
                deliverer: null,
                // Ngày xuất kho
                stockExpTime: null,
                // Người xuất kho
                stockExpUserId: null,
                inOutStockMedicines: [],
            };

            inOutStockMedicineSelected.value = {
                id: null,
                // Mã thuốc
                code: null,
                // Mã BH
                heInCode: null,
                // Tên thuốc
                name: null,
                // Thứ tự sắp xếp
                sortOrder: null,
                // Đường dùng thuốc
                medicineLineId: null,
                // Nhóm thuốc
                medicineGroupId: null,
                // Nhóm thuốc
                medicineTypeId: null,
                // Đơn vị tính
                unitId: null,
                // Hướng dẫn
                tutorial: null,
                // Nước sản xuất
                countryId: null,
                // Giá nhập
                impPrice: null,
                // Số lượng YC
                requestQuantity: null,
                // Số lượng duyệt
                approvedQuantity: null,
                // Phần trăm vat giá nhập
                impVatRate: null,
                // Phần trăm thuế
                impTaxRate: null,
                // Thành tiền
                impAmount: null,
                // Diễn giải
                description: null,
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
                // Liều dùng
                dosage: null,
                // Lô
                lot: null,
                // Hạn dùng
                dueDate: null,
                // Số đăng ký
                registrationNumber: null,
                // Quyệt định thầu,
                tenderDecision: null,
                // Gói thầu
                tenderPackage: null,
                // Nhóm thầu
                tenderGroup: null,
                // Năm thầu
                tenderYear: null,
                // Id lô thuốc
                medicineId: null,
                inOutStockId: null,
                medicinePricePolicies: [],
            };
        };

        async function getMedicineByStocks(
            stockId: string
        ): Promise<MedicineStockModel[]> {
            return (await medicineStockService.getMedicineByStocks(stockId))
                .data.result;
        }

        async function getStocks(): Promise<RoomModel[]> {
            return (await roomService.getByStocks()).data.result;
        }

        async function getUnits(): Promise<UnitModel[]> {
            return (await unitService.getAll()).data.result;
        }

        async function getUsers(): Promise<UserModel[]> {
            return (await userService.getAll()).data.result;
        }

        async function getCountries(): Promise<CountryModel[]> {
            return (await countryService.getAll()).data.result;
        }
        //#endregion

        //#region Event
        const handleCancel = function () {
            toggle();
        };

        const handleMedicineStockChanged = (medicineId: string) => {
            if (medicineId !== null) {
                let dMedicineStock = dMedicineStocks.value.find(
                    (f) => f.medicineId === medicineId
                );
                if (dMedicineStock !== undefined && dMedicineStock !== null) {
                    dMedicineStockSelected.value = { ...dMedicineStock };

                    if (inOutStockMedicineSelected.value !== undefined) {
                        inOutStockMedicineSelected.value.id = null;
                        inOutStockMedicineSelected.value.medicineId =
                            dMedicineStockSelected.value.medicineId;

                        if (dMedicineStockSelected.value.medicine !== null) {
                            inOutStockMedicineSelected.value.code =
                                dMedicineStockSelected.value.medicine.code;
                            inOutStockMedicineSelected.value.heInCode =
                                dMedicineStockSelected.value.medicine.heInCode;
                            inOutStockMedicineSelected.value.name =
                                dMedicineStockSelected.value.medicine.name;
                            inOutStockMedicineSelected.value.medicineLineId =
                                dMedicineStockSelected.value.medicine.medicineLineId;
                            inOutStockMedicineSelected.value.medicineGroupId =
                                dMedicineStockSelected.value.medicine.medicineGroupId;
                            inOutStockMedicineSelected.value.medicineTypeId =
                                dMedicineStockSelected.value.medicine.medicineTypeId;
                            inOutStockMedicineSelected.value.unitId =
                                dMedicineStockSelected.value.medicine.unitId;
                            inOutStockMedicineSelected.value.tutorial =
                                dMedicineStockSelected.value.medicine.tutorial;
                            inOutStockMedicineSelected.value.countryId =
                                dMedicineStockSelected.value.medicine.countryId;
                            inOutStockMedicineSelected.value.impPrice =
                                dMedicineStockSelected.value.medicine.impPrice;
                            inOutStockMedicineSelected.value.activeSubstance =
                                dMedicineStockSelected.value.medicine.activeSubstance;
                            inOutStockMedicineSelected.value.concentration =
                                dMedicineStockSelected.value.medicine.concentration;
                            inOutStockMedicineSelected.value.impVatRate =
                                dMedicineStockSelected.value.medicine.impVatRate;
                            inOutStockMedicineSelected.value.impTaxRate =
                                dMedicineStockSelected.value.medicine.impTaxRate;
                            inOutStockMedicineSelected.value.activeSubstance =
                                dMedicineStockSelected.value.medicine.activeSubstance;
                            inOutStockMedicineSelected.value.concentration =
                                dMedicineStockSelected.value.medicine.concentration;
                            inOutStockMedicineSelected.value.content =
                                dMedicineStockSelected.value.medicine.content;
                            inOutStockMedicineSelected.value.manufacturer =
                                dMedicineStockSelected.value.medicine.manufacturer;
                            inOutStockMedicineSelected.value.packagingSpecifications =
                                dMedicineStockSelected.value.medicine.packagingSpecifications;
                            inOutStockMedicineSelected.value.registrationNumber =
                                dMedicineStockSelected.value.medicine.registrationNumber;
                            inOutStockMedicineSelected.value.lot =
                                dMedicineStockSelected.value.medicine.lot;
                            if (
                                dMedicineStockSelected.value.medicine
                                    .dueDate !== null
                            ) {
                                inOutStockMedicineSelected.value.dueDate =
                                    dMedicineStockSelected.value.medicine.dueDate.split(
                                        "T"
                                    )[0];
                            }
                        }
                    }
                }
            }
        };

        const handleUpdateImMest = () => {
            let dImpMestMedicine = source.value.inOutStockMedicines.find(
                (f) =>
                    f.medicineId == inOutStockMedicineSelected.value.medicineId
            );

            if (dImpMestMedicine !== null && dImpMestMedicine != undefined) {
                Modal.warning({
                    content:
                        "Thuốc đã tồn tại trong danh sách chọn. Bạn có muốn cập nhật vào số lượng không?",
                    okText: "Đồng ý",
                    cancelText: "Bỏ qua",
                });

                if (isOK) {
                    let dImpMestMedicineCopy = {
                        ...inOutStockMedicineSelected.value,
                    };

                    if (
                        dImpMestMedicine.requestQuantity !== null &&
                        dImpMestMedicineCopy.requestQuantity
                    ) {
                        dImpMestMedicine.requestQuantity +=
                            dImpMestMedicineCopy.requestQuantity;
                    }

                    if (
                        dImpMestMedicine.requestQuantity &&
                        dImpMestMedicine.impVatRate &&
                        dImpMestMedicine.impPrice &&
                        dImpMestMedicine.impTaxRate
                    ) {
                        let vatRate = dImpMestMedicine.impVatRate / 100;
                        let taxRate = dImpMestMedicine.impTaxRate / 100;
                        let impAmount =
                            dImpMestMedicine.requestQuantity *
                            dImpMestMedicine.impPrice;

                        dImpMestMedicine.impAmount =
                            impAmount * (1 + vatRate + taxRate);
                    }
                }
            } else if (
                inOutStockMedicineSelected.value.medicineTypeId !== null
            ) {
                source.value.inOutStockMedicines.push({
                    ...inOutStockMedicineSelected.value,
                });
            }
        };

        const calculateTotalAmout = () => {
            if (
                inOutStockMedicineSelected.value.requestQuantity &&
                inOutStockMedicineSelected.value.impVatRate &&
                inOutStockMedicineSelected.value.impPrice &&
                inOutStockMedicineSelected.value.impTaxRate
            ) {
                let vatRate = inOutStockMedicineSelected.value.impVatRate / 100;
                let taxRate = inOutStockMedicineSelected.value.impTaxRate / 100;
                let impAmount =
                    inOutStockMedicineSelected.value.requestQuantity *
                    inOutStockMedicineSelected.value.impPrice;

                inOutStockMedicineSelected.value.impAmount =
                    impAmount * (1 + vatRate + taxRate);
            }
        };

        const formatNumber = (value: number | string) => {
            if (value === null || value === "") {
                return null;
            }
            return parseFloat(value.toString()).toFixed(2);
        };

        /* eslint-disable */
        const handleModalOkClick = (value: boolean) => {
            debugger;
            isOK.value = false;
        };

        const handleRowClickImpMestMedicine = (
            record: InOutStockMedicineModel
        ) => {
            return {
                onClick: () => {
                    setInoutStockMedicine(record);
                },
            };
        };

        const setInoutStockMedicine = (
            data: InOutStockMedicineModel | undefined
        ) => {
            if (data !== undefined) {
                const dataCopy = { ...data };
                inOutStockMedicineSelected.value = dataCopy;
            }
        };

        const handleSave = async () => {
            loading.value = true;
            result.value = false;

            var resultDto =
                await inOutStockService.importFromAnotherStockSaveAsDraft(
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

        const handleSendRequest = async () => {
            result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockRequest(
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

        const handleCanceledRequest = async () => {
            result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockCancelRequest(
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

        const handleApproved = async () => {
            result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockApproved(
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

        const handleCancelApproved = async () => {
            result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockCancelApproved(
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

        const handleStockOut = async () => {
            result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockStockOut(
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

        const handleCancelStockOut = async () => {
            result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockCanCelStockOut(
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

        const handleStockIn = async () => {
            result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockStockIn(
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

        const handleCancelStockIn = async () => {
            result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockCancelStockIn(
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

        //#endregion

        return {
            isImport,
            isDisabled,
            show,
            title,
            fields,
            fieldMedistocks,
            loading,
            userColumns,
            activeKey,
            source,

            sStocks,
            sUnits,
            sUsers,
            dMedicineStocks,
            sCountries,
            formatNumber,

            dMedicineStockSelected,
            inOutStockMedicineSelected,

            impMestMedicineColumns,
            handleMedicineStockChanged,
            handleUpdateImMest,
            handleRowClickImpMestMedicine,
            calculateTotalAmout,

            handleSave,
            handleEdit,
            handleSendRequest,
            handleCanceledRequest,
            handleApproved,
            handleCancelApproved,
            handleStockOut,
            handleCancelStockOut,
            handleStockIn,
            handleCancelStockIn,
            handleCancel,
        };
    },
});
</script>

<style scoped>
.card-body {
    /* margin: 0px -24px; */
    max-height: 650px;
    height: 650px;
    overflow-y: auto;
}
.card-container {
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

.grid-column-columnspan-8-13 {
    grid-column: 8/13;
}

.grid-column-columnspan-8-11 {
    grid-column: 8/11;
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
</style>
