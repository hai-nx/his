<template>
    <div>
        <x-nav :data-source="items2">
            <a-dropdown>
                <a-button type="text" class="text-white">
                    {{ user.username }}
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
    </div>


    <!-- <a-layout class="app-layout">
        <a-layout-header class="x-layout-header">
            <div class="logo">

            </div>
            <a-menu theme="dark" mode="horizontal" :trigger="null" collapsible>
                <template v-for="item in items" :key="item.key">
                    <template v-if="item.children">
                        <a-sub-menu :key="item.key">
                            <template #icon>
                                <i class="bi" :class="item.icon"></i>
                            </template>
                            <template #title>
                                <span>{{ item.title }}</span>
                            </template>
                            <template v-for="sub in item.children" :key="sub.key">
                                <template v-if="sub.children">
                                    <a-sub-menu :key="sub.key">
                                        <template #icon>
                                            <i class="bi" :class="sub.icon"></i>
                                        </template>
                                        <template #title>
                                            <span>{{ sub.title }}</span>
                                        </template>
                                        <template v-for="sub2 in sub.children" :key="sub2.key">
                                            <a-menu-item @click.stop="handleClick(sub2.router)">{{ sub2.title
                                            }}</a-menu-item>
                                        </template>
                                    </a-sub-menu>
                                </template>
                                <template v-else>
                                    <a-menu-item :key="sub.key" @click="handleClick(sub.router)">
                                        <template #icon>
                                            <i class="bi" :class="sub.icon"></i>
                                        </template>
                                        <span>{{ sub.title }}</span>
                                    </a-menu-item>
                                </template>
                            </template>
                        </a-sub-menu>
                    </template>
                    <template v-else>
                        <a-menu-item :key="item.key" @click="handleClick(item.router)">
                            <template #icon>
                                <i class="bi" :class="item.icon"></i>
                            </template>
                            <span>{{ item.title }}</span>
                        </a-menu-item>
                    </template>
                </template>
            </a-menu>

            <div class="extra">
                <a-dropdown>
                    <a-button type="text">
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
            </div>

        </a-layout-header>

        <a-layout-content class="app-layout-content">
            <slot></slot>
        </a-layout-content>
    </a-layout> -->
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuth } from '@/stores/auth'
import { useLayoutMenu } from '@/stores/layout-menu'
import type { MenuProps } from 'ant-design-vue';
//import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined, UserOutlined, DesktopOutlined } from '@ant-design/icons-vue';
//import { LogoutOutlined, UserOutlined, DesktopOutlined } from '@ant-design/icons-vue';
import { XItemType } from '@/components';

export default defineComponent({
    name: 'AuthLayout',
    setup() {
        const router = useRouter();
        const authStore = useAuth();
        const layoutSiderStore = useLayoutMenu();
        const { collapsed, selectedKeys, openKeys, items } = storeToRefs(layoutSiderStore);
        const { toggleCollapsed } = layoutSiderStore;
        const user = computed(() => authStore.user);

        // xử lý khi chọn item
        const handleClick = (key: string) => {
            console.log('router: ' + key);
            if (key !== '')
                router.push({ name: key });
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
                key: "1", label: "item 1", path: "", children: [
                    {
                        key: "1.1", label: "item 1.1", path: "1123123123", children: [
                            {
                                key: "1.1.1", label: "item 1.1.1", path: "1231231 231 23 123", children: [
                                    {
                                        key: "1.1.1.1", label: "item 1.1.1.1", path: ""
                                    },
                                    {
                                        key: "1.1.1.2", label: "item 1.1.1.2", path: ""
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
                key: "3", label: "item 2", path: "", children: [
                    {
                        key: "3.1", label: "item 1.2", path: ""
                    },
                    {
                        key: "3.2", label: "item 1.2", path: ""
                    },
                    {
                        key: "3.3", label: "item 1.2", path: ""
                    },
                    {
                        key: "3.4", label: "item 1.2", path: ""
                    },
                ]
            },
            {
                key: "4", label: "item 2", path: "", children: []
            },
            {
                key: "5", label: "item 2", path: "", children: []
            },
            {
                key: "6", label: "item 2", path: "", children: []
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
    },
    components: {
        // MenuUnfoldOutlined,
        // MenuFoldOutlined,
        // LogoutOutlined,
        // UserOutlined,
        // DesktopOutlined
    }
});
</script>

<style scoped>
.app-layout {
    min-height: 100%;
}

.x-layout-header {
    position: fixed;
    display: grid;
    grid-template-columns: max-content 1fr max-content;
    height: var(--x-layout-header-height);
    line-height: var(--x-layout-header-height);
    width: 100%;
    padding: 0;
    z-index: 1;
}

.x-layout-header .ant-menu {
    margin-left: 10px;
    /* line-height: var(--x-layout-header-height); */
}

.x-layout-header .extra {
    margin-right: 10px;
}

.app-layout-content {
    margin-top: var(--x-layout-header-height);
    padding: .5rem .5rem;
}
</style>