import { defineStore } from 'pinia'
import { MenuItem } from '../components/menuitem'

export const useMenu = defineStore('menu', {
    state: () => ({
        items: [
            { key: '1', label: 'Đón tiếp' },
            { key: '2', label: 'Khám bệnh' },

            { key: '80', label: 'Danh mục' },
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
