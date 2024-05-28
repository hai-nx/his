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
                    class="Item-card-body"
                    v-model:activeKey="activeKey"
                    type="card"
                >
                    <a-tab-pane
                        key="1"
                        tab="Thông tin chung"
                        @keydown="handleKeydown"
                    >
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
                                    :disabled="isDisabled" -->
                                <!-- /> -->
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
                                    v-model:value="supplierSelected.taxCode"
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
                                    v-model:value="source.creationUserId"
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
                                    :options="sItemTypes"
                                    @change="handleItemTypeChanged"
                                    v-model:value="
                                        inOutStockItemSelected.itemTypeId
                                    "
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
                                    v-model:value="
                                        inOutStockItemSelected.concentration
                                    "
                                    disabled
                                />
                                <label class="grid-column-11">
                                    Hàm lượng:
                                </label>
                                <a-input
                                    class="grid-column-12"
                                    v-model:value="
                                        inOutStockItemSelected.content
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
                                        inOutStockItemSelected.countryId
                                    "
                                    disabled
                                />

                                <label class="grid-column-3"> Hãng SX: </label>
                                <a-input
                                    class="grid-column-4"
                                    v-model:value="
                                        inOutStockItemSelected.manufacturer
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
                                    :value="inOutStockItemSelected.unitId"
                                    disabled
                                />
                                <label class="grid-column-7">Giá nhập: </label>
                                <a-input-number
                                    @input="calculateTotalAmout"
                                    class="grid-column-8 w-100"
                                    v-model:value="
                                        inOutStockItemSelected.impPrice
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
                                        inOutStockItemSelected.impVatRate
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
                                        inOutStockItemSelected.impTaxRate
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
                                        inOutStockItemSelected.requestQuantity
                                    "
                                    :disabled="isDisabled"
                                    min="0"
                                />
                                <label class="grid-column-3"
                                    >Thành tiền:
                                </label>
                                <a-input-number
                                    class="grid-column-4 w-100"
                                    v-model:value="
                                        inOutStockItemSelected.impAmount
                                    "
                                    :disabled="isDisabled"
                                    min="0"
                                />
                                <label class="grid-column-5">QĐ thầu: </label>
                                <a-input
                                    class="grid-column-6"
                                    v-model:value="
                                        inOutStockItemSelected.tenderDecision
                                    "
                                    :disabled="isDisabled"
                                />
                                <label class="grid-column-7">Gói thầu: </label>
                                <a-input
                                    class="grid-column-8"
                                    v-model:value="
                                        inOutStockItemSelected.tenderPackage
                                    "
                                    :disabled="isDisabled"
                                />
                                <label class="grid-column-9">Năm thầu: </label>
                                <a-input-number
                                    class="grid-column-10 w-100"
                                    v-model:value="
                                        inOutStockItemSelected.tenderYear
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
                                        inOutStockItemSelected.registrationNumber
                                    "
                                    disabled
                                />

                                <label class="grid-column-1">Số Lô: </label>
                                <a-input
                                    class="grid-column-2"
                                    v-model:value="inOutStockItemSelected.lot"
                                    :disabled="isDisabled"
                                />
                                <label class="grid-column-3">Hạn dùng: </label>
                                <!-- <input
                                    class="datetime grid-column-4"
                                    type="date"
                                    v-model="inOutStockItemSelected.dueDate"
                                    :disabled="isDisabled"
                                /> -->
                                <DxDateBox
                                    class="grid-column-4 datetime"
                                    v-model:value="
                                        inOutStockItemSelected.dueDate
                                    "
                                    :disabled="isDisabled"
                                    placeholder="dd/MM/yyyy"
                                    display-format="dd/MM/yyyy"
                                    type="date"
                                    height="30px"
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
                                    :pagination="false"
                                    :columns="pricePolicyColumns"
                                    :data-source="
                                        inOutStockItemSelected.itemPricePolicies
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
                                            <!-- <input
                                                :disabled="isDisabled"
                                                class="datetime my-0 mx-0 w-100"
                                                type="date"
                                                v-model="record.executionTime"
                                            /> -->
                                            <DxDateBox
                                                v-model:value="
                                                    record.executionTime
                                                "
                                                :disabled="isDisabled"
                                                placeholder="dd-MM-yyyy"
                                                display-format="dd-MM-yyyy"
                                                type="date"
                                                height="30px"
                                            />
                                        </template>
                                    </template>
                                </a-table>

                                <a-table
                                    class="ant-table-striped grid-column-columnspan-1-13 mt-3 table-overflow-x"
                                    size="middle"
                                    :customRow="handleRowClickImpMestItem"
                                    :columns="impMestItemColumns"
                                    :data-source="source.inOutStockItems"
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
                                                        handleDeleteImpMestItem(
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
                    v-if="
                        source.status === 0 && source.id !== null && !isDisabled
                    "
                    class="btn-save"
                    :loading="loading"
                    :disabled="isDisabled"
                    @click.prevent="handleSave"
                    >Lưu tạm</a-button
                >
                <a-button
                    v-if="source.status === 0 && isDisabled"
                    class="btn-save"
                    :loading="loading"
                    @click.prevent="handleEdit"
                    >Sửa</a-button
                >
                <a-button
                    v-if="
                        source.status !== 3 &&
                        source.status !== 4 &&
                        source.status !== -1
                    "
                    type="primary"
                    class="btn-save"
                    @click.prevent="handleStockIn"
                    >Nhận kho</a-button
                >
                <a-button
                    v-if="source.status === 3 || source.status === 4"
                    type="primary"
                    class="btn-save"
                    @click.prevent="handleCanceled"
                    >Hủy nhập</a-button
                >
                <a-button
                    v-if="source.status === 0 && source.id !== null"
                    type="primary"
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
    computed,
    watch,
    watchEffect,
    reactive,
    PropType,
} from "vue";
import {
    InOutStockModel,
    InOutStockItemModel,
    SupplierModel,
    ItemTypeModel,
    RoomModel,
    CountryModel,
    UnitModel,
    UserModel,
    ItemPricePolicyModel,
} from "@/models";
import {
    itemTypeService,
    roomService,
    supplierService,
    countryService,
    unitService,
    userService,
    itemPricePolicyService,
    inOutStockService,
} from "@/services";
import { RoomType } from "@/enums/roomtypes";
import DxDateBox from "devextreme-vue/date-box";

export default defineComponent({
    name: "PharmaceuticalProcureFromSupplierView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        data: {
            type: Object as PropType<InOutStockModel>,
        },
        roomType: {
            type: Number,
            required: true,
        },
    },
    setup(props, { emit }) {
        const isDisabled = ref<boolean>(false);

        const title = ref<string>("Nhập thuốc từ nhà cung cấp");
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const activeKey = ref<string>("1");
        const fields = ref({ value: "id", label: "name" });
        const userColumns = ref({ value: "id", label: "username" });

        const sSuppliers = ref<SupplierModel[]>([]);
        const sItemTypes = ref<ItemTypeModel[]>([]);
        const sStocks = ref<RoomModel[]>([]);
        const sCountries = ref<CountryModel[]>([]);
        const sUnits = ref<UnitModel[]>([]);
        const sUsers = ref<UserModel[]>([]);
        const sItemPricePolicies = ref<ItemPricePolicyModel[]>([]);

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
        const sItemTypeSelected = ref<ItemTypeModel>();
        const supplierSelected = ref<SupplierModel>({
            id: null,
            code: null,
            name: null,
            inactive: false,
        });

        const impMestItemColumns = reactive([
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
                        await inOutStockService.importFromSupplierGetById(
                            props.data.id
                        );
                    if (resultDto.data.isSucceeded) {
                        title.value = "Nhập thuốc từ nhà cung cấp";
                        source.value = resultDto.data.result;

                        // if (source.value.reqTime !== null) {
                        //     source.value.reqTime =
                        //         source.value.reqTime.split("T")[0];
                        // }
                        // if (source.value.invTime !== null) {
                        //     source.value.invTime =
                        //         source.value.invTime.split("T")[0];
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
                            // source.value.inOutStockItems.forEach(
                            //     (inOutStockItem) => {
                            //         if (inOutStockItem.dueDate !== null) {
                            //             inOutStockItem.dueDate =
                            //                 inOutStockItem.dueDate.split(
                            //                     "T"
                            //                 )[0];
                            //         }

                            //         if (
                            //             inOutStockItem.itemPricePolicies &&
                            //             inOutStockItem.itemPricePolicies !==
                            //                 null
                            //         ) {
                            //             inOutStockItem.itemPricePolicies.forEach(
                            //                 (price) => {
                            //                     if (
                            //                         price.executionTime !== null
                            //                     ) {
                            //                         price.executionTime =
                            //                             price.executionTime.split(
                            //                                 "T"
                            //                             )[0];
                            //                     }
                            //                 }
                            //             );
                            //         // }
                            //     }
                            // );

                            inOutStockItemSelected.value = {
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
            // Kiểm tra xem impStockId có thay đổi không
            if (source.value.impStockId !== null) {
                let params: any = {
                    params: {
                        CommodityTypeFilter: null,
                    },
                };

                let stock = sStocks.value.find(
                    (f) => f.id == source.value.impStockId
                );
                if (stock) {
                    switch (stock.roomTypeId) {
                        case RoomType.CentralWarehouse:
                            params.params.CommodityTypeFilter = null;
                            break;
                        case RoomType.OutpatientPharmacy:
                        case RoomType.InpatientPharmacy:
                        case RoomType.EmergencyCabinet:
                            params.params.CommodityTypeFilter = 0;
                            break;
                        case RoomType.OutpatientInventory:
                        case RoomType.InventoryCabinet:
                            params.params.CommodityTypeFilter = 1;
                            break;
                        case RoomType.BloodBack:
                            params.params.CommodityTypeFilter = 2;
                            break;
                    }
                }

                sItemTypes.value = await getItemTypes(params);
            }
        });

        //#region Function
        async function inItData() {
            sSuppliers.value = await getSuppliers();
            // sItemTypes.value = await getItemTypes();
            sStocks.value = await getStocks();
            sCountries.value = await getCountries();
            sUnits.value = await getUnits();
            sUsers.value = await getUsers();
            sItemPricePolicies.value = await getItemPricePolicies();
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

        async function getItemPricePolicies(): Promise<ItemPricePolicyModel[]> {
            return (await itemPricePolicyService.getAll()).data.result;
        }

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

        const setImpMestItem = (data: InOutStockItemModel | undefined) => {
            if (data !== undefined) {
                const dataCopy = { ...data };
                inOutStockItemSelected.value = dataCopy;
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

        //#endregion

        //#region Event
        const toggle = function () {
            emit("toggle", result);
        };

        const handleCancel = function () {
            toggle();
        };

        const handleRowClickImpMestItem = (record: InOutStockItemModel) => {
            return {
                onClick: () => {
                    setImpMestItem(record);
                },
            };
        };

        function handleKeydown(event: KeyboardEvent) {
            if (event.ctrlKey && event.key.toUpperCase() === "A") {
                handleUpdateImMest();
            }
        }

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

        const handleSupplierChanged = (value: string) => {
            if (value !== null) {
                let supplier = sSuppliers.value.find((f) => f.id === value);
                if (supplier !== undefined && supplier !== null) {
                    supplierSelected.value = { ...supplier };
                }
            }
        };

        /* eslint-disable */
        const handleItemTypeChanged = (value: string) => {
            debugger;
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
                        inOutStockItemSelected.value.itemPricePolicies =
                            JSON.parse(
                                JSON.stringify(sItemPricePolicies.value)
                            );
                    }
                }
            }
        };

        const handleSave = async () => {
            loading.value = true;
            result.value = false;

            var resultDto =
                await inOutStockService.importFromSupplierSaveAsDraft(
                    source.value
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

            loading.value = false;
        };

        const handleEdit = async () => {
            isDisabled.value = false;
        };

        const handleStockIn = async () => {
            debugger;
            result.value = false;
            loading.value = true;

            let resultDto = await inOutStockService.importFromSupplierStockIn(
                source.value
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

            loading.value = false;
        };

        const handleCanceled = async () => {
            loading.value = true;
            result.value = false;

            if (source.value !== undefined && source.value.id !== null) {
                let resultDto =
                    await inOutStockService.importFromSupplierCanceled(
                        source.value
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

        const handleDeleted = async () => {
            loading.value = true;
            result.value = false;

            if (source.value !== undefined && source.value.id !== null) {
                let resultDto =
                    await inOutStockService.importFromSupplierDeleted(
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

        const formatNumber = (value: string) => {
            if (value === null || value === "") {
                return null;
            }
            return parseFloat(value.toString()).toFixed(2);
        };

        const handleDeleteImpMestItem = (record: InOutStockItemModel) => {
            let index = source.value.inOutStockItems.indexOf(record, 0);
            if (index !== -1) {
                source.value.inOutStockItems.splice(index, 1);
            }
        };

        //#endregion

        return {
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
            sItemTypes,
            sStocks,
            sCountries,
            sUnits,
            sUsers,
            impMestItemColumns,
            supplierSelected,
            inOutStockItemSelected,
            sItemTypeSelected,
            pricePolicyColumns,
            calculateTotalAmout,
            handleKeydown,
            handleUpdateImMest,
            handleSupplierChanged,
            handleItemTypeChanged,
            handleRowClickImpMestItem,
            handleCancel,
            handleSave,
            handleEdit,
            handleStockIn,
            handleCanceled,
            handleDeleted,
            formatNumber,
            handleDeleteImpMestItem,
        };
    },
    components: {
        DxDateBox,
    },
});
</script>

<style scoped>
.Item-card-body {
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
