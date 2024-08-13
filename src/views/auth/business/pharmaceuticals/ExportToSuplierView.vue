<template>
    <form>
        <a-modal
            :visible="show"
            :title="title"
            width="1280px"
            :mask-closable="false"
            @cancel="handleCancel"
        >
            <div class="container card-body">
                <div class="grid-genaral">
                    <label class="grid-column-1">
                        <span>Kho xuất:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <a-select
                        class="grid-column-columnspan-2-5"
                        :field-names="fields"
                        :options="sStocks"
                        showSearch
                        v-model:value="source.expStockId"
                        :disabled="isDisabled"
                    >
                    </a-select>
                    <label class="grid-column-5">
                        <span>Ngày lập:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <!-- <input
                        class="datetime grid-column-6"
                        type="date"
                        v-model="source.reqTime"
                        :disabled="isDisabled"
                    /> -->
                    <DxDateBox
                        class="grid-column-6 datetime"
                        v-model:value="source.reqTime"
                        :disabled="isDisabled"
                        placeholder="dd/MM/yyyy"
                        display-format="dd/MM/yyyy"
                        type="date"
                        height="30px"
                    />

                    <label class="grid-column-7">
                        <span>Ngày HĐ:</span>
                        <span class="text-danger me-1">*</span>
                    </label>
                    <!-- <input
                        class="datetime rid-column-8"
                        type="date"
                        v-model="source.invTime"
                        :disabled="isDisabled"
                    /> -->
                    <DxDateBox
                        class="grid-column-8 datetime"
                        v-model:value="source.invTime"
                        :disabled="isDisabled"
                        placeholder="dd/MM/yyyy"
                        display-format="dd/MM/yyyy"
                        type="date"
                        height="30px"
                    />

                    <label class="grid-column-9"> Số HĐ: </label>
                    <a-input
                        class="grid-column-10"
                        v-model:value="source.invNo"
                        :disabled="isDisabled"
                    />
                    <label class="grid-column-11"> Mã phiếu: </label>
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
                    <label class="grid-column-9"> Mã số thuế: </label>
                    <a-input
                        class="grid-column-10"
                        v-model:value="supplierSelected.taxCode"
                        disabled
                    />
                    <label class="grid-column-11"> Nội dung: </label>
                    <a-input
                        class="grid-column-12"
                        v-model:value="source.description"
                        :disabled="isDisabled"
                    />

                    <label class="grid-column-1"> Người lập: </label>
                    <a-select
                        class="grid-column-columnspan-2-5"
                        :options="sUsers"
                        :field-names="userColumns"
                        show-search
                        v-model:value="source.creationUserId"
                        :disabled="isDisabled"
                    >
                    </a-select>

                    <label class="grid-column-5"> Người nhận: </label>
                    <a-input
                        class="grid-column-columnspan-6-9"
                        v-model:value="source.deliverer"
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
                        v-model:value="inOutStockItemSelected.itemId"
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

                    <label class="grid-column-7"> Mã hàng: </label>
                    <a-input
                        class="grid-column-8"
                        v-model:value="inOutStockItemSelected.code"
                        :disabled="isDisabled"
                    />
                    <label class="grid-column-9"> Nồng độ: </label>
                    <a-input
                        class="grid-column-10"
                        v-model:value="inOutStockItemSelected.concentration"
                        disabled
                    />
                    <label class="grid-column-11"> Hàm lượng: </label>
                    <a-input
                        class="grid-column-12"
                        v-model:value="inOutStockItemSelected.content"
                        disabled
                    />

                    <label class="grid-column-1"> Nước SX: </label>
                    <a-select
                        class="grid-column-2"
                        :field-names="fields"
                        :options="sCountries"
                        showSearch
                        v-model:value="inOutStockItemSelected.countryId"
                        disabled
                    />

                    <label class="grid-column-3"> Hãng SX: </label>
                    <a-input
                        class="grid-column-4"
                        v-model:value="inOutStockItemSelected.manufacturer"
                        disabled
                    />
                    <label class="grid-column-5"> Đơn vị tính: </label>
                    <a-select
                        class="grid-column-6"
                        :field-names="fields"
                        :options="sUnits"
                        :value="inOutStockItemSelected.unitId"
                        disabled
                    />
                    <label class="grid-column-7">Giá nhập: </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-8 w-100"
                        v-model:value="inOutStockItemSelected.impPrice"
                        :disabled="isDisabled"
                        min="0"
                    />
                    <label class="grid-column-9">VAT nhập (%): </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-10 w-100"
                        v-model:value="inOutStockItemSelected.impVatRate"
                        :disabled="isDisabled"
                        min="0"
                        max="100"
                    />

                    <label class="grid-column-11">Thuế nhập (%): </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-12 w-100"
                        v-model:value="inOutStockItemSelected.impTaxRate"
                        :disabled="isDisabled"
                        min="0"
                        max="100"
                    />

                    <label class="grid-column-1">Số lượng: </label>
                    <a-input-number
                        @input="calculateTotalAmout"
                        class="grid-column-2 w-100"
                        v-model:value="inOutStockItemSelected.requestQuantity"
                        :disabled="isDisabled"
                        min="0"
                    />
                    <label class="grid-column-3">Thành tiền: </label>
                    <a-input-number
                        class="grid-column-4 w-100"
                        v-model:value="inOutStockItemSelected.impAmount"
                        :disabled="isDisabled"
                        min="0"
                    />

                    <label class="grid-column-5">Tồn kho: </label>
                    <a-input-number
                        class="grid-column-6 w-100"
                        disabled
                        min="0"
                        v-model:value="itemStockSelected.availableQuantity"
                    />

                    <!-- <label class="grid-column-7">Số đăng ký: </label>
                    <a-input
                        class="grid-column-8"
                        v-model:value="
                            inOutStockItemSelected.registrationNumber
                        "
                        disabled
                    /> -->

                    <label class="grid-column-7">Số Lô: </label>
                    <a-input
                        class="grid-column-8"
                        v-model:value="inOutStockItemSelected.lot"
                        :disabled="isDisabled"
                    />
                    <label class="grid-column-9">Hạn dùng: </label>
                    <!-- <input
                        class="datetime grid-column-10"
                        type="date"
                        v-model="inOutStockItemSelected.dueDate"
                        :disabled="isDisabled"
                    /> -->
                    <DxDateBox
                        class="grid-column-10 datetime"
                        v-model:value="inOutStockItemSelected.dueDate"
                        :disabled="isDisabled"
                        placeholder="dd/MM/yyyy"
                        display-format="dd/MM/yyyy"
                        type="date"
                        height="30px"
                    />

                    <a-button
                        type="primary"
                        class="grid-column-columnspan-11-13"
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
                    v-if="source.status === 0 && !isDisabled"
                    class="btn-save"
                    :loading="loading"
                    @click.prevent="handleSave"
                    >Lưu tạm</a-button
                >
                <a-button
                    v-if="
                        source.status === 0 && source.id !== null && isDisabled
                    "
                    class="btn-save"
                    :loading="loading"
                    @click.prevent="handleEdit"
                    >Sửa</a-button
                >
                <a-button
                    v-if="source.status === 0"
                    class="btn-save"
                    type="primary"
                    @click.prevent="handleStockOut"
                    >Xuất kho</a-button
                >
                <a-button
                    v-if="source.status === 3"
                    class="btn-save"
                    @click.prevent="handleCancelStockOut"
                    >Hủy xuất</a-button
                >
                <a-button
                    v-if="source.status === 0 && source.id !== null"
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
    SupplierModel,
} from "@/models";
import {
    roomService,
    supplierService,
    countryService,
    unitService,
    userService,
    inOutStockService,
    itemStockService,
} from "@/services";
import { CommodityType } from "@/enums/commodityType";
import { RoomType } from "@/enums/roomtypes";
import DxDateBox from "devextreme-vue/date-box";

export default defineComponent({
    name: "ExportToSuplierView",
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
        const title = ref<string>("Xuất thuốc trả nhà cung cấp");
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

        const sSuppliers = ref<SupplierModel[]>([]);
        const sStocks = ref<RoomModel[]>([]);
        const sUnits = ref<UnitModel[]>([]);
        const sUsers = ref<UserModel[]>([]);
        const sCountries = ref<CountryModel[]>([]);
        const itemStocks = ref<ItemStockModel[]>([]);

        const supplierSelected = ref<SupplierModel>({
            id: null,
            code: null,
            name: null,
            inactive: false,
        });

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

        const inOutStockItemSelected = ref<InOutStockItemModel>({
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
                        await inOutStockService.exportToSupplierGetById(
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

        watchEffect(async () => {
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
            if (inOutStockItemSelected.value.itemId != null) {
                let itemStock = itemStocks.value.find(
                    (f) => f.itemId == inOutStockItemSelected.value.itemId
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
            sSuppliers.value = await getSuppliers();
            sStocks.value = await getStocks();
            sUnits.value = await getUnits();
            sUsers.value = await getUsers();
            sCountries.value = await getCountries();
        }

        function afterLoadSource() {
            // if (source.value.reqTime !== null) {
            //     source.value.reqTime = source.value.reqTime.split("T")[0];
            // }
            // if (source.value.invTime !== null) {
            //     source.value.invTime = source.value.invTime.split("T")[0];
            // }
            // if (source.value.approverTime !== null) {
            //     source.value.approverTime =
            //         source.value.approverTime.split("T")[0];
            // }
            // if (source.value.stockImpTime !== null) {
            //     source.value.stockImpTime =
            //         source.value.stockImpTime.split("T")[0];
            // }

            if (
                source.value.inOutStockItems !== null &&
                source.value.inOutStockItems &&
                source.value.inOutStockItems.length > 0
            ) {
                // source.value.inOutStockItems.forEach((inOutStockItem) => {
                //     if (inOutStockItem.dueDate !== null) {
                //         inOutStockItem.dueDate =
                //             inOutStockItem.dueDate.split("T")[0];
                //     }
                // });

                inOutStockItemSelected.value = {
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

            inOutStockItemSelected.value = {
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

        async function getSuppliers(): Promise<SupplierModel[]> {
            return (await supplierService.getAll()).data.result;
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

        const handleSupplierChanged = (value: string) => {
            if (value !== null) {
                let supplier = sSuppliers.value.find((f) => f.id === value);
                if (supplier !== undefined && supplier !== null) {
                    supplierSelected.value = { ...supplier };
                }
            }
        };

        const handleItemStockChanged = (itemId: string) => {
            if (itemId !== null) {
                let itemStock = itemStocks.value.find(
                    (f) => f.itemId === itemId
                );
                if (itemStock !== undefined && itemStock !== null) {
                    itemStockSelected.value = { ...itemStock };

                    if (inOutStockItemSelected.value !== undefined) {
                        inOutStockItemSelected.value.id = null;
                        inOutStockItemSelected.value.itemId =
                            itemStockSelected.value.itemId;
                        inOutStockItemSelected.value.code =
                            itemStockSelected.value.code;
                        inOutStockItemSelected.value.heInCode =
                            itemStockSelected.value.heInCode;
                        inOutStockItemSelected.value.name =
                            itemStockSelected.value.name;
                        inOutStockItemSelected.value.itemLineId =
                            itemStockSelected.value.itemLineId;
                        inOutStockItemSelected.value.itemGroupId =
                            itemStockSelected.value.itemGroupId;
                        inOutStockItemSelected.value.itemTypeId =
                            itemStockSelected.value.itemTypeId;
                        inOutStockItemSelected.value.unitId =
                            itemStockSelected.value.unitId;
                        inOutStockItemSelected.value.tutorial =
                            itemStockSelected.value.tutorial;
                        inOutStockItemSelected.value.countryId =
                            itemStockSelected.value.countryId;
                        inOutStockItemSelected.value.impPrice =
                            itemStockSelected.value.impPrice;
                        inOutStockItemSelected.value.activeSubstance =
                            itemStockSelected.value.activeSubstance;
                        inOutStockItemSelected.value.concentration =
                            itemStockSelected.value.concentration;
                        inOutStockItemSelected.value.impVatRate =
                            itemStockSelected.value.impVatRate;
                        inOutStockItemSelected.value.impTaxRate =
                            itemStockSelected.value.impTaxRate;
                        inOutStockItemSelected.value.activeSubstance =
                            itemStockSelected.value.activeSubstance;
                        inOutStockItemSelected.value.concentration =
                            itemStockSelected.value.concentration;
                        inOutStockItemSelected.value.content =
                            itemStockSelected.value.content;
                        inOutStockItemSelected.value.manufacturer =
                            itemStockSelected.value.manufacturer;
                        inOutStockItemSelected.value.packagingSpecifications =
                            itemStockSelected.value.packagingSpecifications;
                        inOutStockItemSelected.value.registrationNumber =
                            itemStockSelected.value.registrationNumber;
                        inOutStockItemSelected.value.lot =
                            itemStockSelected.value.lot;
                        inOutStockItemSelected.value.commodityType =
                            itemStockSelected.value.commodityType;
                        // if (itemStockSelected.value.dueDate !== null) {
                        //     inOutStockItemSelected.value.dueDate =
                        //         itemStockSelected.value.dueDate.split("T")[0];
                        // }
                    }
                }
            }
        };

        function handleKeydown(event: KeyboardEvent) {
            if (event.ctrlKey && event.key.toUpperCase() === "A") {
                handleUpdateInOutStocks();
            }
        }

        function handleUpdateInOutStocks() {
            let inOutStockItem = source.value.inOutStockItems.find(
                (f) => f.itemTypeId == inOutStockItemSelected.value.itemTypeId
            );
            if (inOutStockItem !== null && inOutStockItem != undefined) {
                const index =
                    source.value.inOutStockItems.indexOf(inOutStockItem);
                source.value.inOutStockItems[index] = {
                    ...inOutStockItemSelected.value,
                };
            } else if (inOutStockItemSelected.value.itemTypeId !== null) {
                source.value.inOutStockItems.push({
                    ...inOutStockItemSelected.value,
                });
            }

            if (
                inOutStockItem &&
                inOutStockItem.requestQuantity !== null &&
                inOutStockItem.impVatRate !== null &&
                inOutStockItem.impPrice !== null &&
                inOutStockItem.impTaxRate !== null
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
                inOutStockItemSelected.value.requestQuantity !== null &&
                inOutStockItemSelected.value.impVatRate !== null &&
                inOutStockItemSelected.value.impPrice !== null &&
                inOutStockItemSelected.value.impTaxRate !== null
            ) {
                let vatRate = inOutStockItemSelected.value.impVatRate / 100;
                let taxRate = inOutStockItemSelected.value.impTaxRate / 100;
                let impAmount =
                    inOutStockItemSelected.value.requestQuantity *
                    inOutStockItemSelected.value.impPrice;

                inOutStockItemSelected.value.impAmount =
                    impAmount * (1 + vatRate + taxRate);
            }
        };

        const formatNumber = (value: string) => {
            if (value === null || value === "") {
                return null;
            }
            return parseFloat(value.toString()).toFixed(2);
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
                inOutStockItemSelected.value = dataCopy;
            }
        };

        const handleSave = async () => {
            result.value = false;

            var resultDto = await inOutStockService.exportToSupplierSaveAsDraft(
                source.value
            );
            if (!resultDto.data.isSucceeded) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                source.value = resultDto.data.result;
                afterLoadSource();
                isDisabled.value = true;
            }

            loading.value = false;
        };

        const handleEdit = async () => {
            isDisabled.value = false;
        };

        const handleStockOut = async () => {
            loading.value = true;

            let resultDto = await inOutStockService.exportToSupplierStockOut(
                source.value
            );
            if (!resultDto.data.isSucceeded) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                source.value = resultDto.data.result;
                afterLoadSource();
            }

            loading.value = false;
        };

        const handleCancelStockOut = async () => {
            loading.value = true;

            let resultDto =
                await inOutStockService.exportToSupplierCanCelStockOut(
                    source.value
                );
            if (!resultDto.data.isSucceeded) {
                Modal.error({
                    content: resultDto.data.message,
                    okText: "Đồng ý",
                });
            } else {
                source.value = resultDto.data.result;
                afterLoadSource();
            }

            loading.value = false;
        };

        const handleDeleted = async () => {
            result.value = false;
            loading.value = true;

            if (source.value.id !== null) {
                let resultDto = await inOutStockService.exportToSupplierDeleted(
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

            sSuppliers,
            sStocks,
            sUnits,
            sUsers,
            itemStocks,
            sCountries,
            formatNumber,

            itemStockSelected,
            inOutStockItemSelected,
            supplierSelected,

            impMestitemColumns,
            handleItemStockChanged,
            handleUpdateInOutStocks,
            handleKeydown,
            handleRowClickImpMestitem,
            calculateTotalAmout,

            handleSave,
            handleEdit,
            handleStockOut,
            handleCancelStockOut,
            handleCancel,
            handleDeleted,
            handleSupplierChanged,
        };
    },
    components: {
        DxDateBox,
    },
});
</script>

<style scoped>
.card-body {
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