<template>
    <a-layout class="h-100">
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
                                <!-- <a-menu-item @click.stop="handleClick(sub.router)">{{ sub.title }}</a-menu-item> -->
                                <!--
                                    chỗ này đáng ra là để đệ quy control nhưng mà để sau :D
                                    giờ làm tạm 2 bậc
                                -->
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

        <a-layout-content class="x-layout-content">
            <slot></slot>
        </a-layout-content>

        <!-- <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>

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
        </a-layout-sider> -->

        <!-- <a-layout>
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
        </a-layout> -->
    </a-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuth } from '@/stores/auth'
import { useLayoutMenu } from '@/stores/layout-menu'
import type { MenuProps } from 'ant-design-vue';
//import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined, UserOutlined, DesktopOutlined } from '@ant-design/icons-vue';
import { LogoutOutlined, UserOutlined, DesktopOutlined } from '@ant-design/icons-vue';

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
        // MenuUnfoldOutlined,
        // MenuFoldOutlined,
        LogoutOutlined,
        UserOutlined,
        DesktopOutlined
    }
});
</script>

<style scoped>
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

.x-layout-content {
    margin-top: var(--x-layout-header-height);
    padding: 1rem 1rem;
}
</style>