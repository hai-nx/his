import { XItemType } from '@/components'
import { defineStore } from 'pinia'

export const useLayout = defineStore('layout', {
    state: () => ({
        items: [
            {
                key: '1', label: 'Hệ thống', icon: '', path: '',
                children: [
                    { key: 'role', label: 'Vai trò và quyền hạn', path: 'role' },
                    { key: 'user', label: 'Người dùng', path: 'user' },
                ]
            },

            {
                key: '2', label: 'Đón tiếp', icon: '',
                children: [
                    { key: '2.1', label: 'Đăng ký khám', icon: '', path: 'reception-detail' },
                    { key: '2.2', label: 'Danh sách tiếp đón', icon: '', path: 'reception' }
                ]
            },

            { key: '3', label: 'Khám bệnh', icon: '', path: 'exam' },

            { key: 'diagnosticImaging', label: "CĐHA - TDCN", path: 'diagnosticImaging' },
            { key: 'testing', label: "Xét nghiệm", path: 'testing' },

            { key: 'pharmaceutical', label: 'Dược', icon: '', path: 'pharmaceutical' },

            { key: '8', label: 'Báo cáo', icon: '', path: '' },

            {
                key: '9', label: 'Danh mục', icon: '', path: '',
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
            }
        ] as Array<XItemType>
    })
})