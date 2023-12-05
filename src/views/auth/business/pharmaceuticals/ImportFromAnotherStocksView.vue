<template>
    <form>
        <a-modal
            :visible="show"
            :title="title"
            @cancel="handleCancel"
            width="1280px"
            :mask-closable="false"
        >
            <div class="container card-body" @keydown="handleKeydown">
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
                        <span>Tên hàng:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-select
                        class="grid-column-columnspan-2-7"
                        showSearch
                        @change="handleItemStockChanged"
                        v-model:value="inOutStockitemSelected.itemId"
                        :field-names="fieldMedistocks"
                        :options="itemStocks"
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
                        <span>Mã hàng:</span>
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
                        v-model:value="itemStockSelected.availableQuantity"
                    />

                    <a-button
                        type="primary"
                        class="grid-column-columnspan-11-13"
                        :disabled="isDisabled"
                        @click="handleUpdateInOutStocks()"
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
                    v-if="source.status === 0 && isImport && !isDisabled"
                    class="btn-save"
                    :loading="loading"
                    @click.prevent="handleSave"
                    >Lưu tạm</a-button
                >
                <a-button
                    v-if="
                        source.status === 0 &&
                        isImport &&
                        source.id !== null &&
                        isDisabled
                    "
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
import { RoomType } from "@/enums/roomtypes";
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
import { CommodityType } from "@/enums/commodityType";

export default defineComponent({
    name: "ImportFromAnotherStocksView",
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
        const itemStocks = ref<ItemStockModel[]>([]);

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
            impPrice: 0,
            // Số lượng YC
            requestQuantity: 0,
            // Số lượng duyệt
            approvedQuantity: 0,
            // Phần trăm vat giá nhập
            impVatRate: 0,
            // Phần trăm thuế
            impTaxRate: 0,
            // Thành tiền
            impAmount: 0,
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
            commodityType: 0,
            itemPricePolicies: [],
        });

        const itemStockSelected = ref<ItemStockModel>({
            id: null,
            code: null,
            name: null,
            stockId: null,
            itemId: null,
            quantity: null,
            availableQuantity: null,
            inactive: false,
            item: null,

            commodityType: 0,
            // Mã BH
            heInCode: null,
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
            impPrice: 0,
            // Số lượng nhập
            impQuantity: 0,
            // Phần trăm vat giá nhập
            impVatRate: 0,
            // Phần trăm thuế
            impTaxRate: 0,
            // Phần trăm thuế
            impAmount: 0,
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
        });

        const impMestitemColumns = reactive([
            {
                title: "Mã hàng",
                key: "code",
                dataIndex: "code",
                width: 100,
                className: "column-header-center",
            },
            {
                title: "Tên hàng",
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
                    if (resultDto.data.isSucceeded) {
                        title.value = "Nhập thuốc từ nhà cung cấp";
                        source.value = resultDto.data.result;
                        afterLoadSource();
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

        /* eslint-disable */
        watchEffect(async () => {
            debugger;
            // Theo dõi expStockId thay đổi
            if (source.value.expStockId !== null) {
                itemStocks.value = [];

                let commodityType: CommodityType | undefined;

                if (source.value.impStockId !== null) {
                    let impStock = sStocks.value.find(
                        (f) => f.id == source.value.impStockId
                    );

                    if (impStock) {
                        switch (impStock.roomTypeId) {
                            case RoomType.CentralWarehouse:
                                commodityType = undefined;
                                break;
                            case RoomType.OutpatientPharmacy:
                            case RoomType.InpatientPharmacy:
                            case RoomType.EmergencyCabinet:
                                commodityType = 0;
                                break;
                            case RoomType.OutpatientInventory:
                            case RoomType.InventoryCabinet:
                                commodityType = 1;
                                break;
                            case RoomType.BloodBack:
                                commodityType = 2;
                                break;
                        }
                    }
                }

                let isGroup = true;
                let isAvailableQuantity = false;

                if (
                    source.value.id === null ||
                    source.value.id === "" ||
                    source.value.status === 0
                ) {
                    isGroup = true;
                } else {
                    isGroup = false;
                }
                if (source.value.id !== null && source.value.id !== "") {
                    isAvailableQuantity = true;
                }

                itemStocks.value = await getItemByStocks(
                    source.value.expStockId ?? "",
                    isGroup,
                    isAvailableQuantity,
                    commodityType
                );
            }

            // Theo dõi thuốc thay đổi
            if (inOutStockitemSelected.value.itemId != null) {
                let itemStock = itemStocks.value.find(
                    (f) => f.itemId == inOutStockitemSelected.value.itemId
                );
                if (itemStock != null) {
                    itemStockSelected.value = { ...itemStock };
                } else {
                    itemStockSelected.value = {
                        id: null,
                        code: null,
                        name: null,
                        stockId: null,
                        itemId: null,
                        quantity: null,
                        availableQuantity: null,
                        inactive: false,
                        item: null,

                        commodityType: 0,
                        // Mã BH
                        heInCode: null,
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
                        impPrice: 0,
                        // Số lượng nhập
                        impQuantity: 0,
                        // Phần trăm vat giá nhập
                        impVatRate: 0,
                        // Phần trăm thuế
                        impTaxRate: 0,
                        // Phần trăm thuế
                        impAmount: 0,
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

        function afterLoadSource() {
            if (source.value.reqTime !== null) {
                source.value.reqTime = source.value.reqTime.split("T")[0];
            }
            if (source.value.invTime !== null) {
                source.value.invTime = source.value.invTime.split("T")[0];
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
                source.value.inOutStockItems.forEach((inOutStockItem) => {
                    if (inOutStockItem.dueDate !== null) {
                        inOutStockItem.dueDate =
                            inOutStockItem.dueDate.split("T")[0];
                    }
                });

                inOutStockitemSelected.value = {
                    ...source.value.inOutStockItems[0],
                };
            }
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
                impPrice: 0,
                // Số lượng YC
                requestQuantity: 0,
                // Số lượng duyệt
                approvedQuantity: 0,
                // Phần trăm vat giá nhập
                impVatRate: 0,
                // Phần trăm thuế
                impTaxRate: 0,
                // Thành tiền
                impAmount: 0,
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
                commodityType: 0,
                itemPricePolicies: [],
            };
        };

        async function getItemByStocks(
            stockId: string,
            isGroup: boolean,
            isAvailableQuantity: boolean,
            commodityType?: CommodityType
        ): Promise<ItemStockModel[]> {
            return (
                await itemStockService.getItemStockByStocks(
                    stockId,
                    isGroup,
                    isAvailableQuantity,
                    commodityType
                )
            ).data.result;
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
        const handleItemStockChanged = (itemId: string) => {
            debugger;
            if (itemId !== null) {
                let itemStock = itemStocks.value.find(
                    (f) => f.itemId === itemId
                );
                if (itemStock !== undefined && itemStock !== null) {
                    itemStockSelected.value = { ...itemStock };

                    if (inOutStockitemSelected.value !== undefined) {
                        inOutStockitemSelected.value.id = null;
                        inOutStockitemSelected.value.itemId =
                            itemStockSelected.value.itemId;
                        inOutStockitemSelected.value.code =
                            itemStockSelected.value.code;
                        inOutStockitemSelected.value.heInCode =
                            itemStockSelected.value.heInCode;
                        inOutStockitemSelected.value.name =
                            itemStockSelected.value.name;
                        inOutStockitemSelected.value.itemLineId =
                            itemStockSelected.value.itemLineId;
                        inOutStockitemSelected.value.itemGroupId =
                            itemStockSelected.value.itemGroupId;
                        inOutStockitemSelected.value.itemTypeId =
                            itemStockSelected.value.itemTypeId;
                        inOutStockitemSelected.value.unitId =
                            itemStockSelected.value.unitId;
                        inOutStockitemSelected.value.tutorial =
                            itemStockSelected.value.tutorial;
                        inOutStockitemSelected.value.countryId =
                            itemStockSelected.value.countryId;
                        inOutStockitemSelected.value.impPrice =
                            itemStockSelected.value.impPrice;
                        inOutStockitemSelected.value.activeSubstance =
                            itemStockSelected.value.activeSubstance;
                        inOutStockitemSelected.value.concentration =
                            itemStockSelected.value.concentration;
                        inOutStockitemSelected.value.impVatRate =
                            itemStockSelected.value.impVatRate;
                        inOutStockitemSelected.value.impTaxRate =
                            itemStockSelected.value.impTaxRate;
                        inOutStockitemSelected.value.activeSubstance =
                            itemStockSelected.value.activeSubstance;
                        inOutStockitemSelected.value.concentration =
                            itemStockSelected.value.concentration;
                        inOutStockitemSelected.value.content =
                            itemStockSelected.value.content;
                        inOutStockitemSelected.value.manufacturer =
                            itemStockSelected.value.manufacturer;
                        inOutStockitemSelected.value.packagingSpecifications =
                            itemStockSelected.value.packagingSpecifications;
                        inOutStockitemSelected.value.registrationNumber =
                            itemStockSelected.value.registrationNumber;
                        inOutStockitemSelected.value.lot =
                            itemStockSelected.value.lot;
                        inOutStockitemSelected.value.commodityType =
                            itemStockSelected.value.commodityType;
                        if (itemStockSelected.value.dueDate !== null) {
                            inOutStockitemSelected.value.dueDate =
                                itemStockSelected.value.dueDate.split("T")[0];
                        }
                    }
                }
            }
        };

        function handleKeydown(event: KeyboardEvent) {
            if (event.ctrlKey && event.key.toUpperCase() === "A") {
                handleUpdateInOutStocks();
            }
        }

        /* eslint-disable */
        function handleUpdateInOutStocks() {
            debugger;
            let inOutStockItem = source.value.inOutStockItems.find(
                (f) => f.itemTypeId == inOutStockitemSelected.value.itemTypeId
            );
            if (inOutStockItem !== null && inOutStockItem != undefined) {
                const index =
                    source.value.inOutStockItems.indexOf(inOutStockItem);
                source.value.inOutStockItems[index] = {
                    ...inOutStockitemSelected.value,
                };
            } else if (inOutStockitemSelected.value.itemTypeId !== null) {
                source.value.inOutStockItems.push({
                    ...inOutStockitemSelected.value,
                });
            }

            if (
                inOutStockItem &&
                inOutStockItem.requestQuantity &&
                inOutStockItem.impVatRate &&
                inOutStockItem.impPrice &&
                inOutStockItem.impTaxRate
            ) {
                let vatRate = inOutStockItem.impVatRate / 100;
                let taxRate = inOutStockItem.impTaxRate / 100;
                let impAmount =
                    inOutStockItem.requestQuantity * inOutStockItem.impPrice;

                inOutStockItem.impAmount = impAmount * (1 + vatRate + taxRate);
            }
        }

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

        const formatNumber = (value: string) => {
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
            // loading.value = true;
            result.value = false;

            var resultDto =
                await inOutStockService.importFromAnotherStockSaveAsDraft(
                    source.value
                );
            if (!resultDto.data.isSucceeded) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                // result.value = true;
                // toggle();
                source.value = resultDto.data.result;
                afterLoadSource();
            }

            loading.value = false;
        };

        const handleEdit = async () => {
            isDisabled.value = false;
        };

        const handleSendRequest = async () => {
            // result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockRequest(
                    source.value
                );
            if (!resultDto.data.isSucceeded) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                // result.value = true;
                // toggle();
                source.value = resultDto.data.result;
                afterLoadSource();
            }

            loading.value = false;
        };

        const handleCanceledRequest = async () => {
            // result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockCancelRequest(
                    source.value
                );
            if (!resultDto.data.isSucceeded) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                // result.value = true;
                // toggle();
                source.value = resultDto.data.result;
                afterLoadSource();
            }

            loading.value = false;
        };

        const handleApproved = async () => {
            // result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockApproved(
                    source.value
                );
            if (!resultDto.data.isSucceeded) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                // result.value = true;
                // toggle();
                source.value = resultDto.data.result;
                afterLoadSource();
            }

            loading.value = false;
        };

        const handleCancelApproved = async () => {
            // result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockCancelApproved(
                    source.value
                );
            if (!resultDto.data.isSucceeded) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                // result.value = true;
                // toggle();
                source.value = resultDto.data.result;
            }

            loading.value = false;
        };

        const handleStockOut = async () => {
            // result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockStockOut(
                    source.value
                );
            if (!resultDto.data.isSucceeded) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                // result.value = true;
                // toggle();
                source.value = resultDto.data.result;
                afterLoadSource();
            }

            loading.value = false;
        };

        const handleCancelStockOut = async () => {
            // result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockCanCelStockOut(
                    source.value
                );
            if (!resultDto.data.isSucceeded) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                // result.value = true;
                // toggle();
                source.value = resultDto.data.result;
                afterLoadSource();
            }

            loading.value = false;
        };

        const handleStockIn = async () => {
            // result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockStockIn(
                    source.value
                );
            if (!resultDto.data.isSucceeded) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                // result.value = true;
                // toggle();
                source.value = resultDto.data.result;
                afterLoadSource();
            }

            loading.value = false;
        };

        /* eslint-disable */
        const handleCancelStockIn = async () => {
            debugger;
            // result.value = false;
            loading.value = true;

            let resultDto =
                await inOutStockService.importFromAnotherStockCancelStockIn(
                    source.value
                );
            if (!resultDto.data.isSucceeded) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                // result.value = true;
                // toggle();
                source.value = resultDto.data.result;
                afterLoadSource();
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
                if (!resultDto.data.isSucceeded) {
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
            itemStocks,
            sCountries,
            formatNumber,

            itemStockSelected,
            inOutStockitemSelected,

            impMestitemColumns,
            handleItemStockChanged,
            handleUpdateInOutStocks,
            handleKeydown,
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
