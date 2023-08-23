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
                        v-model="source.impTime"
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
                        v-model:value="source.impUserId"
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
                        @change="handleExpStockChanged"
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
                        v-model:value="dImpMestMedicineSelected.medicineId"
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
                        v-model:value="dImpMestMedicineSelected.code"
                        disabled
                    />

                    <label class="grid-column-9"> ĐVT: </label>
                    <a-select
                        class="grid-column-610"
                        :field-names="fields"
                        :options="sUnits"
                        v-model:value="dImpMestMedicineSelected.unitId"
                        disabled
                    />
                    <label class="grid-column-11"> Nồng độ: </label>
                    <a-input
                        class="grid-column-12"
                        disabled
                        v-model:value="dImpMestMedicineSelected.concentration"
                    />

                    <label class="grid-column-1"> Hàm lượng: </label>
                    <a-input
                        class="grid-column-2"
                        disabled
                        v-model:value="dImpMestMedicineSelected.content"
                    />

                    <label class="grid-column-3"> Hoạt chất: </label>
                    <a-input
                        class="grid-column-4"
                        disabled
                        v-model:value="dImpMestMedicineSelected.activeSubstance"
                    />

                    <label class="grid-column-5"> Nước SX: </label>
                    <a-select
                        class="grid-column-6"
                        :field-names="fields"
                        :options="sCountries"
                        showSearch
                        v-model:value="dImpMestMedicineSelected.countryId"
                        disabled
                    />

                    <label class="grid-column-7"> Hãng SX: </label>
                    <a-input
                        class="grid-column-columnspan-8-13"
                        disabled
                        v-model:value="dImpMestMedicineSelected.manufacturer"
                    />

                    <label class="grid-column-1">Số lượng: </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-2 w-100"
                        :disabled="isDisabled"
                        min="0"
                        v-model:value="dImpMestMedicineSelected.impQuantity"
                    />

                    <label class="grid-column-3">Giá nhập: </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-4 w-100"
                        disabled
                        min="0"
                        v-model:value="dImpMestMedicineSelected.impPrice"
                    />

                    <label class="grid-column-5">VAT (%): </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-6 w-100"
                        disabled
                        min="0"
                        max="100"
                        v-model:value="dImpMestMedicineSelected.impVatRate"
                    />

                    <label class="grid-column-7">Thuế (%): </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-8 w-100"
                        disabled
                        min="0"
                        max="100"
                        v-model:value="dImpMestMedicineSelected.taxRate"
                    />

                    <label class="grid-column-9">Thành tiền: </label>
                    <a-input-number
                        class="grid-column-columnspan-10-13 w-100"
                        disabled
                        min="0"
                        :formatter="formatNumber"
                        v-model:value="dImpMestMedicineSelected.impAmount"
                    />

                    <!-- <label class="grid-column-1"> Số ĐK: </label>
                    <a-input
                        class="grid-column-2"
                        disabled
                        v-model:value="
                            dImpMestMedicineSelected.registrationNumber
                        "
                    /> -->

                    <label class="grid-column-1"> Số lô: </label>
                    <a-input
                        class="grid-column-2"
                        disabled
                        v-model:value="dImpMestMedicineSelected.lot"
                    />

                    <label class="grid-column-3">Hạn dùng: </label>
                    <input
                        class="datetime grid-column-4"
                        type="date"
                        disabled
                        v-model="dImpMestMedicineSelected.dueDate"
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
                        @click="handleUpdateImMest()"
                    >
                        Cập nhật (Ctl + A)
                    </a-button>

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
                    v-if="source.impMestStatus === 0"
                    type="primary"
                    class="btn-save"
                    @click.prevent="handleSendRequest"
                    >Gửi yêu cầu</a-button
                >
                <a-button
                    v-if="source.impMestStatus === 1"
                    class="btn-save"
                    @click.prevent="handleCanceledRequest"
                    >Hủy yêu cầu</a-button
                >
                <a-button
                    v-if="source.impMestStatus === 1"
                    :disabled="source.expMestStatus !== 3"
                    type="primary"
                    class="btn-save"
                    @click.prevent="handleStockIn"
                    >Nhập kho</a-button
                >
                <a-button
                    v-if="
                        source.impMestStatus === 3 || source.impMestStatus === 4
                    "
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
    DImpMestModel,
    DMedicineStockModel,
    RoomModel,
    UnitModel,
    UserModel,
    DImpMestMedicineModel,
    CountryModel,
} from "@/models";
import {
    roomService,
    userService,
    unitService,
    impMestService,
    countryService,
    dMedicineStockService,
} from "@/services";

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

        const sStocks = ref<RoomModel[]>([]);
        const sUnits = ref<UnitModel[]>([]);
        const sUsers = ref<UserModel[]>([]);
        const sCountries = ref<CountryModel[]>([]);
        const dMedicineStocks = ref<DMedicineStockModel[]>([]);

        const show = computed(() => props.visible);
        const source = ref<DImpMestModel>({
            id: null,
            /// Mã phiếu
            code: null,
            /// Trạng thái
            impMestStatus: 0,
            expMestStatus: 0,
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
            expMestId: null,
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

        const dMedicineStockSelected = ref<DMedicineStockModel>({
            id: null,
            stockId: null,
            medicineId: null,
            quantity: null,
            availableQuantity: null,
            sMedicine: null,
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
                        await impMestService.importFromAnotherStockGetById(
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
            if (dImpMestMedicineSelected.value.medicineId != null) {
                let dMedicineStock = dMedicineStocks.value.find(
                    (f) =>
                        f.medicineId ==
                        dImpMestMedicineSelected.value.medicineId
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
                        sMedicine: null,
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
                /// Mã phiếu
                code: null,
                /// Trạng thái
                impMestStatus: 0,
                expMestStatus: 0,
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
                expMestId: null,
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

        async function getMedicineByStocks(
            stockId: string
        ): Promise<DMedicineStockModel[]> {
            return (await dMedicineStockService.getMedicineByStocks(stockId))
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

        /* eslint-disable */
        const handleExpStockChanged = async (stockId: string) => {
            if (stockId !== null && stockId !== undefined) {
                dMedicineStocks.value = await getMedicineByStocks(stockId);
            } else {
                dMedicineStocks.value = [];
            }
        };

        /* eslint-disable */
        const handleMedicineStockChanged = (medicineId: string) => {
            if (medicineId !== null) {
                debugger;

                let dMedicineStock = dMedicineStocks.value.find(
                    (f) => f.medicineId === medicineId
                );
                if (dMedicineStock !== undefined && dMedicineStock !== null) {
                    dMedicineStockSelected.value = { ...dMedicineStock };

                    if (dImpMestMedicineSelected.value !== undefined) {
                        dImpMestMedicineSelected.value.id = null;
                        dImpMestMedicineSelected.value.medicineId =
                            dMedicineStockSelected.value.medicineId;

                        if (dMedicineStockSelected.value.sMedicine !== null) {
                            dImpMestMedicineSelected.value.code =
                                dMedicineStockSelected.value.sMedicine.code;
                            dImpMestMedicineSelected.value.heInCode =
                                dMedicineStockSelected.value.sMedicine.heInCode;
                            dImpMestMedicineSelected.value.name =
                                dMedicineStockSelected.value.sMedicine.name;
                            dImpMestMedicineSelected.value.medicineLineId =
                                dMedicineStockSelected.value.sMedicine.medicineLineId;
                            dImpMestMedicineSelected.value.medicineGroupId =
                                dMedicineStockSelected.value.sMedicine.medicineGroupId;
                            dImpMestMedicineSelected.value.medicineTypeId =
                                dMedicineStockSelected.value.sMedicine.medicineTypeId;
                            dImpMestMedicineSelected.value.unitId =
                                dMedicineStockSelected.value.sMedicine.unitId;
                            dImpMestMedicineSelected.value.tutorial =
                                dMedicineStockSelected.value.sMedicine.tutorial;
                            dImpMestMedicineSelected.value.countryId =
                                dMedicineStockSelected.value.sMedicine.countryId;
                            dImpMestMedicineSelected.value.impPrice =
                                dMedicineStockSelected.value.sMedicine.impPrice;
                            dImpMestMedicineSelected.value.activeSubstance =
                                dMedicineStockSelected.value.sMedicine.activeSubstance;
                            dImpMestMedicineSelected.value.concentration =
                                dMedicineStockSelected.value.sMedicine.concentration;
                            dImpMestMedicineSelected.value.impVatRate =
                                dMedicineStockSelected.value.sMedicine.impVatRate;
                            dImpMestMedicineSelected.value.taxRate =
                                dMedicineStockSelected.value.sMedicine.taxRate;
                            dImpMestMedicineSelected.value.activeSubstance =
                                dMedicineStockSelected.value.sMedicine.activeSubstance;
                            dImpMestMedicineSelected.value.concentration =
                                dMedicineStockSelected.value.sMedicine.concentration;
                            dImpMestMedicineSelected.value.content =
                                dMedicineStockSelected.value.sMedicine.content;
                            dImpMestMedicineSelected.value.manufacturer =
                                dMedicineStockSelected.value.sMedicine.manufacturer;
                            dImpMestMedicineSelected.value.packagingSpecifications =
                                dMedicineStockSelected.value.sMedicine.packagingSpecifications;
                            dImpMestMedicineSelected.value.registrationNumber =
                                dMedicineStockSelected.value.sMedicine.registrationNumber;
                            dImpMestMedicineSelected.value.lot =
                                dMedicineStockSelected.value.sMedicine.lot;
                            if (
                                dMedicineStockSelected.value.sMedicine
                                    .dueDate !== null
                            ) {
                                dImpMestMedicineSelected.value.dueDate =
                                    dMedicineStockSelected.value.sMedicine.dueDate.split(
                                        "T"
                                    )[0];
                            }
                        }
                    }
                }
            }
        };

        const handleUpdateImMest = () => {
            let dImpMestMedicine = source.value.dImpMestMedicines.find(
                (f) => f.medicineId == dImpMestMedicineSelected.value.medicineId
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
                        ...dImpMestMedicineSelected.value,
                    };

                    if (
                        dImpMestMedicine.impQuantity !== null &&
                        dImpMestMedicineCopy.impQuantity
                    ) {
                        dImpMestMedicine.impQuantity +=
                            dImpMestMedicineCopy.impQuantity;
                    }

                    if (
                        dImpMestMedicine.impQuantity &&
                        dImpMestMedicine.impVatRate &&
                        dImpMestMedicine.impPrice &&
                        dImpMestMedicine.taxRate
                    ) {
                        let vatRate = dImpMestMedicine.impVatRate / 100;
                        let taxRate = dImpMestMedicine.taxRate / 100;
                        let impAmount =
                            dImpMestMedicine.impQuantity *
                            dImpMestMedicine.impPrice;

                        dImpMestMedicine.impAmount =
                            impAmount * (1 + vatRate + taxRate);
                    }
                }
            } else if (dImpMestMedicineSelected.value.medicineTypeId !== null) {
                source.value.dImpMestMedicines.push({
                    ...dImpMestMedicineSelected.value,
                });
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
            record: DImpMestMedicineModel
        ) => {
            return {
                onClick: () => {
                    setImpMestMedicine(record);
                },
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

        const handleSave = async () => {
            loading.value = true;
            result.value = false;

            var resultDto =
                await impMestService.importFromAnotherStockSaveAsDraft(
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

            let resultDto = await impMestService.importFromAnotherStockRequest(
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
                await impMestService.importFromAnotherStockSaveAsDraft(
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

        // const handleCanceled = async () => {
        //     result.value = false;
        //     loading.value = true;

        //     let resultDto = await impMestService.importFromAnotherStockStockIn(
        //         source.value
        //     );
        //     if (resultDto.data.isSuccessed) {
        //         Modal.error({
        //             content: resultDto.data.message,
        //             okText: "Đồng ý",
        //         });
        //     } else {
        //         result.value = true;
        //         toggle();
        //     }

        //     loading.value = false;
        // };

        const handleStockIn = async () => {
            result.value = false;
            loading.value = true;

            let resultDto = await impMestService.importFromAnotherStockStockIn(
                source.value
            );
            if (resultDto.data.isSuccessed) {
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
            dImpMestMedicineSelected,

            impMestMedicineColumns,
            handleExpStockChanged,
            handleMedicineStockChanged,
            handleUpdateImMest,
            handleRowClickImpMestMedicine,
            calculateTotalAmout,

            handleSave,
            handleEdit,
            handleSendRequest,
            handleCanceledRequest,
            handleStockIn,
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
