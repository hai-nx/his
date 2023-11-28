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
                    <input
                        class="datetime grid-column-6"
                        type="date"
                        v-model="source.reqTime"
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
                        :field-names="fieldMedistocks"
                        :options="itemStocks"
                        @change="handleItemTypeChanged"
                        v-model:value="inOutStockItemSelected.itemTypeId"
                        :disabled="isDisabled"
                    />
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
                        v-model:value="inOutStockItemSelected.availableQuantity"
                        min="0"
                    />

                    <label class="grid-column-7">Số đăng ký: </label>
                    <a-input
                        class="grid-column-8"
                        v-model:value="
                            inOutStockItemSelected.registrationNumber
                        "
                        disabled
                    />

                    <label class="grid-column-9">Số Lô: </label>
                    <a-input
                        class="grid-column-10"
                        v-model:value="inOutStockItemSelected.lot"
                        :disabled="isDisabled"
                    />
                    <label class="grid-column-11">Hạn dùng: </label>
                    <input
                        class="datetime grid-column-12"
                        type="date"
                        v-model="inOutStockItemSelected.dueDate"
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
                        class="ant-table-striped grid-column-columnspan-1-13 mt-3 table-overflow-x"
                        size="middle"
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
        </a-modal>
    </form>
</template>

<script lang="ts">
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
    ItemTypeModel,
} from "@/models";
import {
    itemTypeService,
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
        const title = ref<string>("Nhập từ kho khác");
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const fields = ref({ value: "id", label: "name" });
        const userColumns = ref({ value: "id", label: "userName" });
        const fieldMedistocks = ref({
            value: "itemId",
            label: "itemName",
        });

        const sSuppliers = ref<SupplierModel[]>([]);
        const sStocks = ref<RoomModel[]>([]);
        const sUnits = ref<UnitModel[]>([]);
        const sUsers = ref<UserModel[]>([]);
        const sCountries = ref<CountryModel[]>([]);
        const itemStocks = ref<ItemStockModel[]>([]);
        const sItemTypes = ref<ItemTypeModel[]>([]);

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
            commodityType: 0,
            itemPricePolicies: [],
        });
        const sItemTypeSelected = ref<ItemTypeModel>();
        const supplierSelected = ref<SupplierModel>({
            id: null,
            code: null,
            name: null,
            inactive: false,
        });

        const reset = () => {
            supplierSelected.value = {
                id: null,
                code: null,
                name: null,
                inactive: false,
            };

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
                commodityType: 0,
                itemPricePolicies: [],
            };
        };

        //#region Function
        async function inItData() {
            sSuppliers.value = await getSuppliers();
            // sItemTypes.value = await getItemTypes();
            sStocks.value = await getStocks();
            sCountries.value = await getCountries();
            sUnits.value = await getUnits();
            sUsers.value = await getUsers();
        }

        async function getSuppliers(): Promise<SupplierModel[]> {
            return (await supplierService.getAll()).data.result;
        }

        async function getItemTypes(params: any): Promise<ItemTypeModel[]> {
            return (await itemTypeService.getAll(params)).data.result;
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

        watch(show, async (value) => {
            if (value) {
                reset();
                inItData();

                result.value = false;
                loading.value = true;
                isDisabled.value = false;
            }

            loading.value = false;
        });

        watchEffect(async () => {
            // Theo dõi expStockId thay đổi
            if (source.value.expStockId !== null) {
                itemStocks.value = [];

                let commodityType: CommodityType | undefined;

                if (source.value.impStockId !== null) {
                    let impStock = sStocks.value.find(
                        (f) => f.id == source.value.expStockId
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
        });

        const handleSupplierChanged = (value: string) => {
            if (value !== null) {
                let supplier = sSuppliers.value.find((f) => f.id === value);
                if (supplier !== undefined && supplier !== null) {
                    supplierSelected.value = { ...supplier };
                }
            }
        };

        const handleItemTypeChanged = (value: string) => {
            if (value !== null) {
                let sItemType = sItemTypes.value.find((f) => f.id === value);
                if (sItemType !== undefined && sItemType !== null) {
                    sItemTypeSelected.value = { ...sItemType };

                    if (inOutStockItemSelected.value !== undefined) {
                        inOutStockItemSelected.value.id = null;
                        inOutStockItemSelected.value.itemId = null;
                        inOutStockItemSelected.value.code =
                            sItemTypeSelected.value.code;
                        inOutStockItemSelected.value.heInCode =
                            sItemTypeSelected.value.heInCode;
                        inOutStockItemSelected.value.name =
                            sItemTypeSelected.value.name;
                        inOutStockItemSelected.value.itemLineId =
                            sItemTypeSelected.value.itemLineId;
                        inOutStockItemSelected.value.itemGroupId =
                            sItemTypeSelected.value.itemGroupId;
                        inOutStockItemSelected.value.itemTypeId =
                            sItemTypeSelected.value.id !== undefined
                                ? sItemTypeSelected.value.id
                                : null;
                        inOutStockItemSelected.value.unitId =
                            sItemTypeSelected.value.unitId;
                        inOutStockItemSelected.value.tutorial =
                            sItemTypeSelected.value.tutorial;
                        inOutStockItemSelected.value.countryId =
                            sItemTypeSelected.value.countryId;
                        inOutStockItemSelected.value.impPrice =
                            sItemTypeSelected.value.impPrice;
                        inOutStockItemSelected.value.activeSubstance =
                            sItemTypeSelected.value.activeSubstance;
                        inOutStockItemSelected.value.concentration =
                            sItemTypeSelected.value.concentration;
                        inOutStockItemSelected.value.impVatRate =
                            sItemTypeSelected.value.impVatRate;
                        inOutStockItemSelected.value.impTaxRate =
                            sItemTypeSelected.value.impTaxRate;
                        inOutStockItemSelected.value.activeSubstance =
                            sItemTypeSelected.value.activeSubstance;
                        inOutStockItemSelected.value.concentration =
                            sItemTypeSelected.value.concentration;
                        inOutStockItemSelected.value.content =
                            sItemTypeSelected.value.content;
                        inOutStockItemSelected.value.manufacturer =
                            sItemTypeSelected.value.manufacturer;
                        inOutStockItemSelected.value.packagingSpecifications =
                            sItemTypeSelected.value.packagingSpecifications;
                        inOutStockItemSelected.value.registrationNumber =
                            sItemTypeSelected.value.registrationNumber;
                        inOutStockItemSelected.value.commodityType =
                            sItemTypeSelected.value.commodityType;
                        // inOutStockItemSelected.value.itemPricePolicies =
                        //     JSON.parse(
                        //         JSON.stringify(sItemPricePolicies.value)
                        //     );
                    }
                }
            }
        };

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

                inOutStockItemSelected.value.impAmount = Number(
                    (impAmount * (1 + vatRate + taxRate)).toFixed(2)
                );
            }
        };

        const handleUpdateImMest = () => {
            let inOutStockItem = source.value.inOutStockItems.find(
                (f) => f.code == inOutStockItemSelected.value.code
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

        //#region
        const handleCancel = function () {
            toggle();
        };

        const toggle = function () {
            emit("toggle", result);
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
            result,
            source,

            sSuppliers,
            sStocks,
            sUnits,
            sUsers,
            sCountries,
            itemStocks,
            sItemTypes,

            sItemTypeSelected,
            supplierSelected,
            inOutStockItemSelected,

            handleItemTypeChanged,
            calculateTotalAmout,
            handleSupplierChanged,
            handleUpdateImMest,

            handleCancel,
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