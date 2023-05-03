import { defineStore } from 'pinia'

export const useLayoutMenu = defineStore('layoutMenu', {
    state: () => ({
        collapsed: false as boolean,
        selectedKeys: [] as string[],
        openKeys: [] as string[],  
        items: [
            { key: 'dashboard', title: 'Trang chủ', icon: 'bi-house', router: 'dashboard' },

            { key: 'dictionary', title: 'Danh mục', icon: 'bi-collection', router: '', 
                children: [
                    { key: 'branch', title: 'Chi nhánh', router: 'branch' },
                    { key: 'department', title: 'Khoa', router: 'department' },
                    { key: 'room', title: 'Phòng', router: 'room' },
                    { key: 'icd', title: 'ICD', router: 'icd' },

                    { key: 'other', title: 'Khác', router: 'dictionary' },
                ]
            },
            
            { key: 'system', title: 'Hệ thống', icon: 'bi-gear', router: 'system',
                children: [
                    { key: 'role', title: 'Vai trò và quyền hạn', router: 'role' },
                    { key: 'user', title: 'Người dùng', router: 'user' },
                ]
            }
        ] 
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