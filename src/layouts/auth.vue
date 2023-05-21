<template>
    <a-layout class="h-100">
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>

            <div class="logo"></div>

            <a-menu theme="dark" mode="inline" v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys">
                <template v-for="item in items" :key="item.key">
                    <template v-if="!item.children">
                        <a-menu-item :key="item.key" @click="handleClick(item.router)">
                            <template #icon>
                                <i class="bi" :class="item.icon"></i>
                            </template>
                            <span>{{ item.title }}</span>
                        </a-menu-item>
                    </template>
                    <template v-else>
                        <a-sub-menu :key="item.key">
                            <template #icon>
                                <i class="bi" :class="item.icon"></i>
                            </template>
                            <template #title>
                                <span>{{ item.title }}</span>
                            </template>
                            <template v-for="sub in item.children" :key="sub.key">
                                <a-menu-item @click.stop="handleClick(sub.router)">{{ sub.title }}</a-menu-item>
                            </template>
                        </a-sub-menu>
                    </template>
                </template>
            </a-menu>
        </a-layout-sider>

        <a-layout>
            <a-layout-header class="his-layout-header">
                <div class="trigger" @click="toggleCollapsed">
                    <menu-unfold-outlined v-if="collapsed" />
                    <menu-fold-outlined v-else />
                </div>

                <div class="his-layout-header__extra">
                    <a-dropdown>
                        <a-button type="text">
                            <h6>{{ user.username }}</h6>
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

            <a-layout-content class="px-3 py-2">
                <slot></slot>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuth } from '@/stores/auth'
import { useLayoutMenu } from '@/stores/layout-menu'
import type { MenuProps } from 'ant-design-vue';
import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined, UserOutlined, DesktopOutlined } from '@ant-design/icons-vue';


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

        return {
            user,
            collapsed,
            selectedKeys,
            openKeys,
            items,
            toggleCollapsed,
            handleClick,
            handleMenuClick
        }
    },
    components: {
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        LogoutOutlined,
        UserOutlined,
        DesktopOutlined
    }
});
</script>

<style scoped>
.logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
    background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
    background: #141414;
}

.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}


.his-layout-header {
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0px;
}

.his-layout-header__extra {
    padding: 0 24px;
}

.trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

.trigger:hover {
    color: #1890ff;
}
</style>