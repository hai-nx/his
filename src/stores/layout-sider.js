import { defineStore } from 'pinia'

export const useLayoutSider = defineStore('layoutSider', {
    state: () => ({
        collapsed: false,
        selectedKeys: [],
        openKeys: [],  
        items: [
            { key: 'dashboard', title: 'Trang chủ', icon: 'bi-house', router: 'dashboard' },

            { key: 'dictionary', title: 'Danh mục', icon: 'bi-collection', router: 'dictionary', 
                children: [
                    { key: 'branch', title: 'Chi nhánh', router: 'branch' },
                    { key: 'department', title: 'Khoa', router: 'department' },
                    { key: 'room', title: 'Phòng', router: 'room' },
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
        selected(key) {
            this.selectedKeys = [key]
        },
        toggleCollapsed() {
            console.log('xxx')
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