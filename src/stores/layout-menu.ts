import { defineStore } from 'pinia'

export interface LayoutMenuItem {
    key: string,
    title: string,
    icon: string,
    router: string,
    children: Array<LayoutMenuItem>
}

export const useLayoutMenu = defineStore('layoutMenu', {
    state: () => ({
        collapsed: false as boolean,
        selectedKeys: [] as string[],
        openKeys: [] as string[],
        items: [
            { key: 'dashboard', title: 'Trang chủ', icon: 'bi-house', router: 'dashboard' },

            { 
                key: 'admission', title: 'Đón tiếp', icon: 'bi-house',
                children: [
                    { key: 'admissionRegister', title: 'Đăng ký khám bệnh', icon: 'bi-house', router: 'admissionRegister' },
                    { key: 'admission-view', title: 'Danh sách bệnh nhân tiếp đón', icon: 'bi-house', router: 'admission' }
                ]
            },
            { key: 'exam', title: 'Khám bệnh', icon: 'bi-house', router: 'exam' },

            {
                key: 'dictionary', title: 'Danh mục', icon: 'bi-collection', router: '',
                children: [
<<<<<<< HEAD
                    { key: 'branch', title: 'Chi nhánh', router: 'branch' },
                    { key: 'department-type', title: 'Loại khoa', router: 'department-type' },
                    { key: 'department', title: 'Khoa', router: 'department' },
                    { key: 'room-type', title: 'Loại phòng', router: 'room-type' },
                    { key: 'room', title: 'Phòng', router: 'room' },
                    { key: 'chapter', title: 'Chương ICD-10', router: 'chapter' },
                    { key: 'icd', title: 'ICD', router: 'icd' },
                    { key: 'career', title: 'Nghề nghiệp', router: 'career' },
                    { key: 'hospital', title: 'Bệnh viện', router: 'hospital' },
                    { key: 'ethnic', title: 'Dân tộc', router: 'ethnic' },
                    { key: 'gender', title: 'Giới tính', router: 'gender' },
=======
                    {
                        key: 'cocautochuc', title: 'Cơ cấu tổ chức', router:"",
                        children: [
                            { key: 'branch', title: 'Chi nhánh', router: 'branch' },
                            { key: 'department-type', title: 'Loại khoa', router: 'department-type' },
                            { key: 'department', title: 'Khoa', router: 'department' },
                            { key: 'room-type', title: 'Loại phòng', router: 'room-type' },
                            { key: 'room', title: 'Phòng', router: 'room' },
                        ]
                    },
                    { 
                        key: 'hanhchinh', title: 'Hành chính', router:"",
                        children: [
                            { key: 'icd', title: 'ICD', router: 'icd' },
                            { key: 'career', title: 'Nghề nghiệp', router: 'career' },
                            { key: 'hospital', title: 'Bệnh viện', router: 'hospital' },
                            { key: 'ethnic', title: 'Dân tộc', router: 'ethnic' },
                            { key: 'gender', title: 'Giới tính', router: 'gender' },
                            { key: 'country', title: 'Quốc gia', router: 'country' },
                            { key: 'province', title: 'Tỉnh, thành phố', router: 'province' },
                            { key: 'district', title: 'Quận, huyện', router: 'district' },
                            { key: 'ward', title: 'Xã, phường', router: 'ward' },
                        ]
                    },
                    // { key: 'icd', title: 'ICD', router: 'icd' },
                    // { key: 'career', title: 'Nghề nghiệp', router: 'career' },
                    // { key: 'hospital', title: 'Bệnh viện', router: 'hospital' },
                    // { key: 'ethnic', title: 'Dân tộc', router: 'ethnic' },
                    // { key: 'gender', title: 'Giới tính', router: 'gender' },
>>>>>>> main
                    { key: 'employee', title: 'Nhân viên', router: 'employee' },
                    // { key: 'country', title: 'Quốc gia', router: 'country' },
                    // { key: 'province', title: 'Tỉnh, thành phố', router: 'province' },
                    // { key: 'district', title: 'Quận, huyện', router: 'district' },
                    // { key: 'ward', title: 'Xã, phường', router: 'ward' },
                    { key: 'service', title: 'Dịch vụ', router: 'service' },

                    { key: 'medicine-group', title: 'Nhóm thuốc', router: 'medicine-group' },
                    { key: 'medicine-type', title: 'Thuốc', router: 'medicine-type' },

                    { key: 'other', title: 'Khác', router: 'dictionary' },
                ]
            },

            { key: 'pharmaceutical', title: 'Dược', icon: 'bi-capsule', router: 'pharmaceutical', children: [] },

            {
                key: 'system', title: 'Hệ thống', icon: 'bi-gear', router: 'system',
                children: [
                    { key: 'role', title: 'Vai trò và quyền hạn', router: 'role' },
                    { key: 'user', title: 'Người dùng', router: 'user' },
                ]
            }
        ] as Array<LayoutMenuItem>
    }),
    actions: {
        toggleCollapsed() {
            this.collapsed = !this.collapsed
        }
    },
    getters: {
        getCollapsed: (state) => state.collapsed,
        getSelectedKeys: (state) => state.selectedKeys,
        getOpenKeys: (state) => state.openKeys,
        getItems: (state) => state.items
    }
});