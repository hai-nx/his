<template>
    <form>
        <div class="container">
            <a-modal
                :visible="show"
                :title="title"
                @cancel="handleCancel"
                width="1280px"
                :mask-closable="false"
            >
                <a-tabs
                    class="medicine-card-body"
                    v-model:activeKey="activeKey"
                    type="card"
                >
                    <a-tab-pane key="1" tab="Thông tin chung">
                        <div class="container grid-genaral">
                            <label class="grid-column-1">
                                <span>Kho nhập:</span>
                                <span class="text-danger me-1">*</span>
                            </label>
                            <a-select
                                class="grid-column-columnspan-2-5"
                                :field-names="fields"
                                :options="sStocks"
                                v-model:value="souce.imStockId"
                                :disabled="loading"
                            >
                                <template #option="{ name }">
                                    <div class="row">
                                        <span>{{ name }}</span>
                                    </div>
                                </template>
                            </a-select>
                            <label class="grid-column-5">
                                <span>Ngày lập:</span>
                                <span class="text-danger me-1">*</span>
                            </label>
                            <a-date-picker
                                class="grid-column-6"
                                placeholder="dd/MM/yyyy"
                                format="DD/MM/YYYY"
                                v-model:value="souce.impTime"
                            />
                            <label class="grid-column-7">
                                <span>Ngày HĐ:</span>
                                <span class="text-danger me-1">*</span>
                            </label>
                            <a-date-picker
                                class="grid-column-8"
                                placeholder="dd/MM/yyyy"
                                format="DD/MM/YYYY"
                                v-model:value="souce.invTime"
                            />
                            <label class="grid-column-9"> Số HĐ: </label>
                            <a-input
                                class="grid-column-10"
                                v-model:value="souce.invNo"
                                :disabled="loading"
                            />
                            <label class="grid-column-11"> Mã phiếu: </label>
                            <a-input
                                class="grid-column-12"
                                v-model:value="souce.code"
                                :disabled="loading"
                            />

                            <label class="grid-column-1">
                                <span>Tên NCC:</span>
                                <span class="text-danger me-1">*</span>
                            </label>
                            <a-select
                                class="grid-column-columnspan-2-5"
                                :options="sSuppliers"
                                v-model:value="souce.supplierId"
                                :disabled="loading"
                            >
                            </a-select>
                            <label class="grid-column-5"> Địa chỉ: </label>
                            <a-input
                                class="grid-column-columnspan-6-9"
                                v-model:value="supplierSelected.address"
                                :disabled="false"
                            />
                            <label class="grid-column-9"> Mã số thuế: </label>
                            <a-input
                                class="grid-column-10"
                                v-model:value="supplierSelected.taxtCode"
                                :disabled="false"
                            />
                            <label class="grid-column-11"> Nội dung: </label>
                            <a-input
                                class="grid-column-12"
                                v-model:value="souce.description"
                                :disabled="false"
                            />

                            <label class="grid-column-1"> Người lập: </label>
                            <a-select
                                class="grid-column-columnspan-2-5"
                                :options="sUsers"
                                show-search
                                v-model:value="souce.createdBy"
                                :disabled="loading"
                            >
                            </a-select>

                            <label class="grid-column-5"> Người giao: </label>
                            <a-input
                                class="grid-column-columnspan-6-9"
                                v-model:value="souce.deliverer"
                                :disabled="false"
                            />
                            <label class="grid-column-9"> Người nhận: </label>
                            <a-select
                                class="grid-column-columnspan-10-13"
                                :options="sUsers"
                                show-search
                                v-model:value="souce.receiverUserId"
                                :disabled="loading"
                            >
                            </a-select>

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
                                :field-names="fields"
                                :options="sMedicineTypes"
                                v-model:value="
                                    dImpMestMedicineSelected.medicineTypeId
                                "
                                :disabled="loading"
                            >
                                <template #option="{ name }">
                                    <div class="row">
                                        <span>{{ name }}</span>
                                    </div>
                                </template>
                            </a-select>
                            <label class="grid-column-7"> Mã hàng: </label>
                            <a-input
                                class="grid-column-8"
                                v-model:value="dImpMestMedicineSelected.code"
                                :disabled="false"
                            />
                            <label class="grid-column-9"> Nồng độ: </label>
                            <a-input
                                class="grid-column-10"
                                v-model:value="
                                    dImpMestMedicineSelected.concentration
                                "
                                :disabled="false"
                            />
                            <label class="grid-column-11"> Hàm lượng: </label>
                            <a-input
                                class="grid-column-12"
                                v-model:value="dImpMestMedicineSelected.content"
                                :disabled="false"
                            />

                            <label class="grid-column-1"> Nước SX: </label>
                            <a-select
                                class="grid-column-2"
                                :field-names="fields"
                                :options="sCountries"
                                :value="dImpMestMedicineSelected.countryId"
                                :disabled="false"
                            >
                                <template #option="{ name }">
                                    <div class="row">
                                        <span>{{ name }}</span>
                                    </div>
                                </template>
                            </a-select>

                            <label class="grid-column-3"> Hãng SX: </label>
                            <a-input
                                class="grid-column-4"
                                v-model:value="
                                    dImpMestMedicineSelected.manufacturer
                                "
                                :disabled="false"
                            />
                            <label class="grid-column-5"> Đơn vị tính: </label>
                            <a-select
                                class="grid-column-6"
                                :field-names="fields"
                                :options="sUnits"
                                :value="dImpMestMedicineSelected.unitId"
                                :disabled="false"
                            >
                                <template #option="{ name }">
                                    <div class="row">
                                        <span>{{ name }}</span>
                                    </div>
                                </template>
                            </a-select>
                            <label class="grid-column-7">Giá nhập: </label>
                            <a-input-number
                                class="grid-column-8 w-100"
                                v-model:value="
                                    dImpMestMedicineSelected.impPrice
                                "
                                :disabled="loading"
                                min="0"
                            />
                            <label class="grid-column-9">VAT nhập (%): </label>
                            <a-input-number
                                class="grid-column-10 w-100"
                                v-model:value="
                                    dImpMestMedicineSelected.impVatRate
                                "
                                :disabled="loading"
                                min="0"
                                max="100"
                            />
                            <label class="grid-column-11">Số đăng ký: </label>
                            <a-input-number
                                class="grid-column-12 w-100"
                                v-model:value="
                                    dImpMestMedicineSelected.registrationNumber
                                "
                                :disabled="loading"
                                min="0"
                                max="100"
                            />

                            <label class="grid-column-1">Thành tiền: </label>
                            <a-input-number
                                class="grid-column-2 w-100"
                                v-model:value="
                                    dImpMestMedicineSelected.impPrice
                                "
                                :disabled="loading"
                                min="0"
                            />
                            <label class="grid-column-3">QĐ thầu: </label>
                            <a-input
                                class="grid-column-4"
                                v-model:value="
                                    dImpMestMedicineSelected.tenderDecision
                                "
                                :disabled="false"
                            />
                            <label class="grid-column-5">Gói thầu: </label>
                            <a-input
                                class="grid-column-6"
                                v-model:value="
                                    dImpMestMedicineSelected.tenderPackage
                                "
                                :disabled="false"
                            />
                            <label class="grid-column-7">Năm thầu: </label>
                            <a-input-number
                                class="grid-column-8 w-100"
                                v-model:value="
                                    dImpMestMedicineSelected.tenderYear
                                "
                                :disabled="loading"
                                min="0"
                            />
                            <label class="grid-column-9">Số Lô: </label>
                            <a-input
                                class="grid-column-10"
                                v-model:value="dImpMestMedicineSelected.lot"
                                :disabled="false"
                            />

                            <label class="grid-column-11">Hạn dùng: </label>
                            <a-date-picker
                                class="grid-column-12"
                                placeholder="dd/MM/yyyy"
                                format="DD/MM/YYYY"
                                v-model:value="dImpMestMedicineSelected.dueDate"
                            />

                            <a-button
                                type="primary"
                                class="grid-column-columnspan-11-13"
                                @click="handleUpdateImMest()"
                            >
                                Cập nhật (Ctl + A)
                            </a-button>

                            <a-table
                                class="ant-table-striped grid-column-columnspan-1-13 mt-3 h-100"
                                size="middle"
                                :customRow="handleRowClickImpMestMedicine"
                                :columns="impMestMedicineColumns"
                                :data-source="souce.dImpMestMedicines"
                                bordered
                                :pagination="false"
                                :scroll="{ y: 350 }"
                            >
                                <template #bodyCell="{ column, record }">
                                    <template v-if="column.key === 'isCheck'">
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
                    </a-tab-pane>
                    <a-tab-pane key="2" tab="Chính sách giá thuốc"></a-tab-pane>
                    <a-tab-pane key="3" tab="Hóa đơn"></a-tab-pane>
                </a-tabs>

                <!-- <template #footer>
                    <a-button
                        class="btn-save"
                        key="submit"
                        type="primary"
                        :loading="loading"
                        @click.prevent="handleSave"
                        >Lưu</a-button
                    >
                    <a-button
                        class="btn-save-new"
                        type="primary"
                        :loading="loading"
                        @click.prevent="handleSaveAndAddNew"
                        >Lưu và Thêm mới</a-button
                    >
                    <a-button @click="handleCancel" class="btn-cancel"
                        >Bỏ qua</a-button
                    >
                </template> -->
            </a-modal>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, reactive } from "vue";
import {
    DImpMestModel,
    DImpMestMedicineModel,
    SupplierModel,
    MedicineTypeModel,
    RoomModel,
    CountryModel,
    UnitModel,
    UserModel,
} from "@/models";
import {
    medicineTypeService,
    roomService,
    supplierService,
    countryService,
    unitService,
    userService,
} from "@/services";

export default defineComponent({
    name: "PharmaceuticalProcureFromSupplierView",
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        // data: {
        //     type: Object as PropType<MedicineTypeModel>,
        // },
    },
    setup(props, { emit }) {
        const title = ref<string>("Nhập thuốc từ nhà cung cấp");
        const loading = ref<boolean>(false);
        const result = ref<boolean>(false);
        const activeKey = ref<string>("1");
        const fields = ref({ value: "id", label: "name" });
        const userColumn = ref({ value: "id", label: "userName" });

        const sSuppliers = ref<SupplierModel[]>([]);
        const sMedicineTypes = ref<MedicineTypeModel[]>([]);
        const sStocks = ref<RoomModel[]>([]);
        const sCountries = ref<CountryModel[]>([]);
        const sUnits = ref<UnitModel[]>([]);
        const sUsers = ref<UserModel[]>([]);

        const souce = reactive<DImpMestModel>({
            id: null,
            code: null,
            imMestStatus: 0,
            imStockId: null, // Kho nhập
            exStockId: null, // Kho xuất
            imExMestTypeId: 0, // Loại phiếu nhập, xuất
            receiverUserId: null, /// Người nhận, người nhập
            approverUserId: null, /// NGười duyệt
            impTime: null, /// Thời gian nhập, ngày tạo phiếu nhập
            approverTime: null, /// Ngày duyệt, ngày nhập kho
            description: null,
            reqRoomId: null, /// Phòng yêu cầu
            reqDepartmentId: null, /// Khoa yêu cầu
            treatmentId: null, /// Id điều trị
            patientId: null, /// Id Bệnh nhân
            supplierId: null, /// Nhà cung cấp
            supplierAddress: null, /// Địa chỉ cấp
            invTime: null, /// Ngày hóa đơn
            invNo: null, /// Số hóa đơn
            deliverer: null, /// NGười giao
            dImpMestMedicines: [],
            createdBy: null,
        });

        const dImpMestMedicineSelected = ref<DImpMestMedicineModel>({});

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
                width: 120,
                className: "column-header-center",
            },
            {
                title: "Tên thuốc",
                key: "name",
                dataIndex: "name",
                width: 500,
                className: "column-header-center",
            },
            {
                title: "ĐVT",
                key: "unitId",
                dataIndex: "unitId",
                width: 120,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "Giá nhập",
                key: "impPrice",
                dataIndex: "impPrice",
                width: 150,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "Số lượng",
                key: "impQuantity",
                dataIndex: "impQuantity",
                width: 100,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "VAT(%)",
                key: "impVatRate",
                dataIndex: "impVatRate",
                width: 100,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "Thành tiền",
                key: "impAmount",
                dataIndex: "impAmount",
                width: 150,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "Số lô",
                key: "lot",
                dataIndex: "lot",
                width: 150,
                className: "column-header-center",
                align: "center",
            },
            {
                title: "Hạn dùng",
                key: "dueDate",
                dataIndex: "dueDate",
                width: 150,
                className: "column-header-center",
                align: "center",
            },
        ]);

        const show = computed(() => props.visible);

        watch(show, (value) => {
            if (value) {
                inItData();

                result.value = false;
                loading.value = true;
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

        const setImpMestMedicine = (
            data: DImpMestMedicineModel | undefined
        ) => {
            if (data !== undefined) {
                const dataCopy = { ...data };
                dImpMestMedicineSelected.value = dataCopy;
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
            let dImpMestMedicine = souce.dImpMestMedicines.find(
                (f) => f.code == dImpMestMedicineSelected.value.code
            );
            if (dImpMestMedicine !== null && dImpMestMedicine != undefined) {
                const index = souce.dImpMestMedicines.indexOf(dImpMestMedicine);
                souce.dImpMestMedicines[index] = {
                    ...dImpMestMedicineSelected.value,
                };
            } else {
                souce.dImpMestMedicines.push({
                    ...dImpMestMedicineSelected.value,
                });
            }
        };

        //#endregion

        return {
            title,
            loading,
            result,
            activeKey,
            show,
            fields,
            userColumn,
            souce,
            sSuppliers,
            sMedicineTypes,
            sStocks,
            sCountries,
            sUnits,
            sUsers,
            impMestMedicineColumns,
            supplierSelected,
            dImpMestMedicineSelected,
            handleUpdateImMest,
            handleRowClickImpMestMedicine,
            handleCancel,
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
</style>
