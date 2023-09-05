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
                        @change="handleitemStockChanged"
                        v-model:value="inOutStockitemSelected.itemId"
                        :field-names="fieldMedistocks"
                        :options="ditemStocks"
                        :disabled="isDisabled"
                    >
                        <template #option="{ itemCode, itemName }">
                            <div class="row">
                                <div class="col-md-3">
                                    <span>{{ itemCode }}</span>
                                </div>
                                <div class="col-md-9">
                                    <span>{{ itemName }}</span>
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
                        v-model:value="inOutStockitemSelected.code"
                        disabled
                    />

                    <label class="grid-column-9"> ĐVT: </label>
                    <a-select
                        class="grid-column-610"
                        :field-names="fields"
                        :options="sUnits"
                        v-model:value="inOutStockitemSelected.unitId"
                        disabled
                    />
                    <label class="grid-column-11"> Nồng độ: </label>
                    <a-input
                        class="grid-column-12"
                        disabled
                        v-model:value="inOutStockitemSelected.concentration"
                    />

                    <label class="grid-column-1"> Hàm lượng: </label>
                    <a-input
                        class="grid-column-2"
                        disabled
                        v-model:value="inOutStockitemSelected.content"
                    />

                    <label class="grid-column-3"> Hoạt chất: </label>
                    <a-input
                        class="grid-column-4"
                        disabled
                        v-model:value="inOutStockitemSelected.activeSubstance"
                    />

                    <label class="grid-column-5"> Nước SX: </label>
                    <a-select
                        class="grid-column-6"
                        :field-names="fields"
                        :options="sCountries"
                        showSearch
                        v-model:value="inOutStockitemSelected.countryId"
                        disabled
                    />

                    <label class="grid-column-7"> Hãng SX: </label>
                    <a-input
                        class="grid-column-columnspan-8-13"
                        disabled
                        v-model:value="inOutStockitemSelected.manufacturer"
                    />

                    <label class="grid-column-1">Số lượng: </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-2 w-100"
                        :disabled="isDisabled"
                        min="0"
                        v-model:value="inOutStockitemSelected.requestQuantity"
                    />

                    <label class="grid-column-3">Giá nhập: </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-4 w-100"
                        disabled
                        min="0"
                        v-model:value="inOutStockitemSelected.impPrice"
                    />

                    <label class="grid-column-5">VAT (%): </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-6 w-100"
                        disabled
                        min="0"
                        max="100"
                        v-model:value="inOutStockitemSelected.impVatRate"
                    />

                    <label class="grid-column-7">Thuế (%): </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-8 w-100"
                        disabled
                        min="0"
                        max="100"
                        v-model:value="inOutStockitemSelected.impTaxRate"
                    />

                    <label class="grid-column-9">Thành tiền: </label>
                    <a-input-number
                        class="grid-column-columnspan-10-13 w-100"
                        disabled
                        min="0"
                        :formatter="formatNumber"
                        v-model:value="inOutStockitemSelected.impAmount"
                    />

                    <!-- <label class="grid-column-1"> Số ĐK: </label>
                    <a-input
                        class="grid-column-2"
                        disabled
                        v-model:value="
                            inOutStockitemSelected.registrationNumber
                        "
                    /> -->

                    <label class="grid-column-1"> Số lô: </label>
                    <a-input
                        class="grid-column-2"
                        disabled
                        v-model:value="inOutStockitemSelected.lot"
                    />

                    <label class="grid-column-3">Hạn dùng: </label>
                    <input
                        class="datetime grid-column-4"
                        type="date"
                        disabled
                        v-model="inOutStockitemSelected.dueDate"
                    />

                    <label class="grid-column-5">SL tồn: </label>
                    <a-input-number
                        class="grid-column-6 w-100"
                        disabled
                        min="0"
                        v-model:value="ditemStockSelected.availableQuantity"
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
                        :customRow="handleRowClickImpMestitem"
                        :columns="impMestitemColumns"
                        :data-source="source.inOutStockItems"
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
                    @click.prevent="handleDeleted"
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
    ItemStockModel,
    RoomModel,
    UnitModel,
    UserModel,
    CountryModel,
    InOutStockItemModel,
} from "@/models";
import {
    roomService,
    userService,
    unitService,
    countryService,
    itemStockService,
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
            value: "itemId",
            label: "itemName",
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
        const ditemStocks = ref<ItemStockModel[]>([]);

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
            commodityType: 0,
            inOutStockItems: [],
        });

        const inOutStockitemSelected = ref<InOutStockItemModel>({
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
            itemLineId: null,
            // Nhóm thuốc
            itemGroupId: null,
            // Nhóm thuốc
            itemTypeId: null,
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
            itemId: null,
            inOutStockId: null,
            itemPricePolicies: [],
        });

        const ditemStockSelected = ref<ItemStockModel>({
            id: null,
            stockId: null,
            itemId: null,
            quantity: null,
            availableQuantity: null,
            item: null,
        });

        const impMestitemColumns = reactive([
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
                            source.value.inOutStockItems !== null &&
                            source.value.inOutStockItems &&
                            source.value.inOutStockItems.length > 0
                        ) {
                            source.value.inOutStockItems.forEach(
                                (inOutStockItem) => {
                                    if (inOutStockItem.dueDate !== null) {
                                        inOutStockItem.dueDate =
                                            inOutStockItem.dueDate.split(
                                                "T"
                                            )[0];
                                    }
                                }
                            );

                            inOutStockitemSelected.value = {
                                ...source.value.inOutStockItems[0],
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
                ditemStocks.value = await getitemByStocks(
                    source.value.expStockId
                );
            } else {
                ditemStocks.value = [];
            }

            // Theo dõi thuốc thay đổi
            if (inOutStockitemSelected.value.itemId != null) {
                let ditemStock = ditemStocks.value.find(
                    (f) => f.itemId == inOutStockitemSelected.value.itemId
                );
                if (ditemStock != null) {
                    ditemStockSelected.value = { ...ditemStock };
                } else {
                    ditemStockSelected.value = {
                        id: null,
                        stockId: null,
                        itemId: null,
                        quantity: null,
                        availableQuantity: null,
                        item: null,
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
                commodityType: 0,
                inOutStockItems: [],
            };

            inOutStockitemSelected.value = {
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
                itemLineId: null,
                // Nhóm thuốc
                itemGroupId: null,
                // Nhóm thuốc
                itemTypeId: null,
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
                itemId: null,
                inOutStockId: null,
                itemPricePolicies: [],
            };
        };

        async function getitemByStocks(
            stockId: string
        ): Promise<ItemStockModel[]> {
            return (await itemStockService.getItemByStocks(stockId)).data
                .result;
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

        const handleitemStockChanged = (itemId: string) => {
            if (itemId !== null) {
                let ditemStock = ditemStocks.value.find(
                    (f) => f.itemId === itemId
                );
                if (ditemStock !== undefined && ditemStock !== null) {
                    ditemStockSelected.value = { ...ditemStock };

                    if (inOutStockitemSelected.value !== undefined) {
                        inOutStockitemSelected.value.id = null;
                        inOutStockitemSelected.value.itemId =
                            ditemStockSelected.value.itemId;

                        if (ditemStockSelected.value.item !== null) {
                            inOutStockitemSelected.value.code =
                                ditemStockSelected.value.item.code;
                            inOutStockitemSelected.value.heInCode =
                                ditemStockSelected.value.item.heInCode;
                            inOutStockitemSelected.value.name =
                                ditemStockSelected.value.item.name;
                            inOutStockitemSelected.value.itemLineId =
                                ditemStockSelected.value.item.itemLineId;
                            inOutStockitemSelected.value.itemGroupId =
                                ditemStockSelected.value.item.itemGroupId;
                            inOutStockitemSelected.value.itemTypeId =
                                ditemStockSelected.value.item.itemTypeId;
                            inOutStockitemSelected.value.unitId =
                                ditemStockSelected.value.item.unitId;
                            inOutStockitemSelected.value.tutorial =
                                ditemStockSelected.value.item.tutorial;
                            inOutStockitemSelected.value.countryId =
                                ditemStockSelected.value.item.countryId;
                            inOutStockitemSelected.value.impPrice =
                                ditemStockSelected.value.item.impPrice;
                            inOutStockitemSelected.value.activeSubstance =
                                ditemStockSelected.value.item.activeSubstance;
                            inOutStockitemSelected.value.concentration =
                                ditemStockSelected.value.item.concentration;
                            inOutStockitemSelected.value.impVatRate =
                                ditemStockSelected.value.item.impVatRate;
                            inOutStockitemSelected.value.impTaxRate =
                                ditemStockSelected.value.item.impTaxRate;
                            inOutStockitemSelected.value.activeSubstance =
                                ditemStockSelected.value.item.activeSubstance;
                            inOutStockitemSelected.value.concentration =
                                ditemStockSelected.value.item.concentration;
                            inOutStockitemSelected.value.content =
                                ditemStockSelected.value.item.content;
                            inOutStockitemSelected.value.manufacturer =
                                ditemStockSelected.value.item.manufacturer;
                            inOutStockitemSelected.value.packagingSpecifications =
                                ditemStockSelected.value.item.packagingSpecifications;
                            inOutStockitemSelected.value.registrationNumber =
                                ditemStockSelected.value.item.registrationNumber;
                            inOutStockitemSelected.value.lot =
                                ditemStockSelected.value.item.lot;
                            if (
                                ditemStockSelected.value.item.dueDate !== null
                            ) {
                                inOutStockitemSelected.value.dueDate =
                                    ditemStockSelected.value.item.dueDate.split(
                                        "T"
                                    )[0];
                            }
                        }
                    }
                }
            }
        };

        const handleUpdateImMest = () => {
            let dImpMestitem = source.value.inOutStockItems.find(
                (f) => f.itemId == inOutStockitemSelected.value.itemId
            );

            if (dImpMestitem !== null && dImpMestitem != undefined) {
                Modal.warning({
                    content:
                        "Thuốc đã tồn tại trong danh sách chọn. Bạn có muốn cập nhật vào số lượng không?",
                    okText: "Đồng ý",
                    cancelText: "Bỏ qua",
                });

                if (isOK) {
                    let dImpMestitemCopy = {
                        ...inOutStockitemSelected.value,
                    };

                    if (
                        dImpMestitem.requestQuantity !== null &&
                        dImpMestitemCopy.requestQuantity
                    ) {
                        dImpMestitem.requestQuantity +=
                            dImpMestitemCopy.requestQuantity;
                    }

                    if (
                        dImpMestitem.requestQuantity &&
                        dImpMestitem.impVatRate &&
                        dImpMestitem.impPrice &&
                        dImpMestitem.impTaxRate
                    ) {
                        let vatRate = dImpMestitem.impVatRate / 100;
                        let taxRate = dImpMestitem.impTaxRate / 100;
                        let impAmount =
                            dImpMestitem.requestQuantity *
                            dImpMestitem.impPrice;

                        dImpMestitem.impAmount =
                            impAmount * (1 + vatRate + taxRate);
                    }
                }
            } else if (inOutStockitemSelected.value.itemTypeId !== null) {
                source.value.inOutStockItems.push({
                    ...inOutStockitemSelected.value,
                });
            }
        };

        const calculateTotalAmout = () => {
            if (
                inOutStockitemSelected.value.requestQuantity &&
                inOutStockitemSelected.value.impVatRate &&
                inOutStockitemSelected.value.impPrice &&
                inOutStockitemSelected.value.impTaxRate
            ) {
                let vatRate = inOutStockitemSelected.value.impVatRate / 100;
                let taxRate = inOutStockitemSelected.value.impTaxRate / 100;
                let impAmount =
                    inOutStockitemSelected.value.requestQuantity *
                    inOutStockitemSelected.value.impPrice;

                inOutStockitemSelected.value.impAmount =
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

        const handleRowClickImpMestitem = (record: InOutStockItemModel) => {
            return {
                onClick: () => {
                    setInoutStockitem(record);
                },
            };
        };

        const setInoutStockitem = (data: InOutStockItemModel | undefined) => {
            if (data !== undefined) {
                const dataCopy = { ...data };
                inOutStockitemSelected.value = dataCopy;
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

        const handleDeleted = async () => {
            result.value = false;
            loading.value = true;

            if (source.value.id !== null) {
                let resultDto =
                    await inOutStockService.importFromAnotherStockDeleted(
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
            ditemStocks,
            sCountries,
            formatNumber,

            ditemStockSelected,
            inOutStockitemSelected,

            impMestitemColumns,
            handleitemStockChanged,
            handleUpdateImMest,
            handleRowClickImpMestitem,
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
            handleDeleted,
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
