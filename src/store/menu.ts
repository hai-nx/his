import { defineStore } from 'pinia'
import { MenuItem } from '../components/menuitem'

export const useMenu = defineStore('menu', {
    state: () => ({
        items: [
            { key: '1', label: 'Đón tiếp' },
            { key: '2', label: 'Khám bệnh' },

            { key: 'diagnosticImaging', label: "CĐHA - TDCN", path: 'diagnosticImaging' },
            { key: 'testing', label: "Xét nghiệm", path: 'testing' },

            { key: '80', label: 'Danh mục',
                children: [
                    {
                        key: '9.1', label: 'Cơ cấu tổ chức', path: '',
                        children: [
                            { key: 'branch', label: 'Chi nhánh', path: 'branch' },
                            { key: 'department-type', label: 'Loại khoa', path: 'department-type' },
                            { key: 'department', label: 'Khoa', path: 'department' },
                            { key: 'room-type', label: 'Loại phòng', path: 'room-type' },
                            { key: 'room', label: 'Phòng', path: 'room' },

                        ]
                    },
                    {
                        key: 'hanhchinh', label: 'Hành chính', path: "",
                        children: [
                            { key: 'icd', label: 'ICD', path: 'icd' },
                            { key: 'chapter', label: 'Chương ICD-10', path: 'chapter' },
                            { key: 'career', label: 'Nghề nghiệp', path: 'career' },
                            { key: 'hospital', label: 'Bệnh viện', path: 'hospital' },
                            { key: 'ethnic', label: 'Dân tộc', path: 'ethnic' },
                            { key: 'gender', label: 'Giới tính', path: 'gender' },
                            { key: 'country', label: 'Quốc gia', path: 'country' },
                            { key: 'province', label: 'Tỉnh, thành phố', path: 'province' },
                            { key: 'district', label: 'Quận, huyện', path: 'district' },
                            { key: 'ward', label: 'Xã, phường', path: 'ward' },
                        ]
                    },
                    { key: 'employee', label: 'Nhân viên', path: 'employee' },
                    { key: 'supplier', label: 'Nhà cung cấp', path: 'supplier' },
                    { key: 'service', label: 'Dịch vụ', path: 'service' },

                    { key: 'item-group', label: 'Nhóm thuốc', path: 'item-group' },
                    { key: 'medicine-type', label: 'Thuốc', path: 'medicine-type' },
                    { key: 'material-type', label: 'Vật tư', path: 'material-type' },

                    { key: 'other', label: 'Khác', path: 'dictionary' },
                ]
             },
            // { separator: true },
            { key: '90', label: 'Hệ thống',
                children: [
                    { key: '90.1', label: 'Người dùng', path: 'user' },
                    { key: '90.2', label: 'Vai trò và quyền hạn', path: 'role' },
                    { separator: true },
                    { key: '90.4', label: 'Tùy chọn', path: 'option' },
                ]
             },
        ] as Array<MenuItem>
    })
})
