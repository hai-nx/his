<template>
    <div class="app-layout">
        <x-nav :data-source="items2" @click="handleClick">
            <a-dropdown>
                <a-button type="text" class="h100">
                    <h6 class="text-white">{{ user.username }}</h6>
                </a-button>
                <template #overlay>
                    <a-menu @click="handleMenuClick">
                        <a-menu-item key="1">
                            <template #icon>
                                <desktop-outlined />
                            </template>
                            Chọn đơn vị làm việc
                        </a-menu-item>
                        <a-menu-item key="2">
                            <template #icon>
                                <user-outlined />
                            </template>
                            Tài khoản
                        </a-menu-item>
                        <a-menu-divider />
                        <a-menu-item key="3" danger>
                            <template #icon>
                                <logout-outlined />
                            </template>
                            Đăng xuất
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </x-nav>
        <div class="app-layout-content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuth } from '@/stores/auth'
import { useLayoutMenu } from '@/stores/layout-menu'
import type { MenuProps } from 'ant-design-vue';
import { LogoutOutlined, UserOutlined, DesktopOutlined } from '@ant-design/icons-vue';
import { XItemType } from '@/components';

export default defineComponent({
    name: 'AuthLayout',
    components: {
        LogoutOutlined,
        UserOutlined,
        DesktopOutlined
    },
    setup() {
        const router = useRouter();
        const authStore = useAuth();
        const layoutSiderStore = useLayoutMenu();
        const { collapsed, selectedKeys, openKeys, items } = storeToRefs(layoutSiderStore);
        const { toggleCollapsed } = layoutSiderStore;
        const user = computed(() => authStore.user);

        // xử lý khi chọn item
        const handleClick = (item: XItemType) => {
            let path = item?.path;
            if (path !== null)
                router.push({ name: path });
        }

        const handleMenuClick: MenuProps['onClick'] = e => {
            if (e.key === '1') {
                router.push({ name: 'workplace-option' });
            } else if (e.key === '2') {
                router.push({ name: 'option' });
            }
            //else if (e.key === '3') {
            //     router.push({ name: 'login' })
            // }
        }

        const items2 = ref<Array<XItemType>>([
            {
                key: "1", label: "Tieeps ddons", path: "", children: [
                    {
                        key: "1.1", label: "item 1.1.... sdasd asd asxdxxxz", path: "1123123123", children: [
                            {
                                key: "1.1.1", label: "item 1.1.1", path: "1231231 231 23 123", children: [
                                    {
                                        key: "1.1.1.1", label: "item 1.1.1.1", path: "reception"
                                    },
                                    {
                                        key: "1.1.1.2", label: "item 1.1.1.2", path: "dashboard"
                                    },
                                    {
                                        key: "1.1.1.3", label: "item 1.1.1.3", path: ""
                                    },
                                    {
                                        key: "1.1.1.4", label: "item 1.1.1.4", path: ""
                                    }
                                ]
                            },
                            {
                                key: "1.1.2", label: "item 1.1.2", path: ""
                            }
                        ]
                    },
                    {
                        key: "1.2", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.3", label: "item 1.3", path: "", children: [
                            {
                                key: "1.3.1", label: "item 1.3.1", path: ""
                            }
                        ]
                    },
                    {
                        key: "1.2", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.3", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.4", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.5", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.6", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.7", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.8", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.9", label: "item 1.2", path: ""
                    },
                    {
                        key: "1.10", label: "item 1.2", path: ""
                    },
                ]
            },
            {
                key: "2", label: "item 2", path: "", children: [
                    {
                        key: "2.1", label: "item 1.2", path: ""
                    },
                    {
                        key: "2.2", label: "item 1.2", path: ""
                    },
                    {
                        key: "2.3", label: "item 1.2", path: ""
                    },
                    {
                        key: "2.4", label: "item 1.2", path: ""
                    },
                ]
            },
            {
                key: "3", label: "item 3", path: "", children: [
                    {
                        key: "3.1", label: "item 3.1", path: ""
                    },
                    {
                        key: "3.2", label: "item 3.2", path: ""
                    },
                    {
                        key: "3.3", label: "item 3.3", path: ""
                    },
                    {
                        key: "3.4", label: "item 3.4", path: ""
                    },
                ]
            },
            {
                key: "4", label: "item 4", path: "", children: []
            },
            {
                key: "5", label: "item 5", path: "", children: []
            },
            {
                key: "6", label: "item 6", path: "", children: []
            }
        ]);

        return {
            user,
            collapsed,
            selectedKeys,
            openKeys,
            items,
            toggleCollapsed,
            handleClick,
            handleMenuClick,
            items2
        }
    }
});
</script>

<style scoped>
.app-layout {
    min-height: 100%;
}

.app-layout-content {
    margin-top: var(--x-layout-header-height);
    padding: .5rem .5rem;
}
</style>