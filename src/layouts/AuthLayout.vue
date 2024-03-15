<template>
    <div class="app-layout">
        <x-nav :data-source="items" @click="handleClick">
            <a-dropdown>
                <a-button type="text" class="h100">
                    <span class="text-white">{{ user.username }}</span>
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

    <subsystem-option-view :visible="visibleSubsystemOptionView" @cancel="handleVisibleSubsystemOptionView" />
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useLayout } from "../stores/layout";
import { storeToRefs } from "pinia";
import { useAuth } from "@/stores/auth";
import { Modal, type MenuProps } from "ant-design-vue";
import {
    LogoutOutlined,
    UserOutlined,
    DesktopOutlined,
} from "@ant-design/icons-vue";
import { XItemType } from "@/components";

import SubsystemOptionView from "@/views/auth/system/SubsystemOptionView.vue";

export default defineComponent({
    name: "AuthLayout",
    components: {
        LogoutOutlined,
        UserOutlined,
        DesktopOutlined,
        SubsystemOptionView
    },
    setup() {
        const router = useRouter();
        const authStore = useAuth();
        const layout = useLayout();
        // const [modal, contextHolder] = Modal.useModal();

        const { items } = storeToRefs(layout);
        const user = computed(() => authStore.user);

        // xử lý khi chọn item
        const handleClick = (item: XItemType) => {
            let path = item?.path;
            if (path !== null) router.push({ name: path });
        };

        const handleMenuClick: MenuProps["onClick"] = (e) => {
            if (e.key === "1") {
                // router.push({ name: 'workplace-option' });
                visibleSubsystemOptionView.value = true;
            } else if (e.key === "2") {
                router.push({ name: "option" });
            } else if (e.key === "3") {
                Modal.confirm({
                    title: "Xác nhận",
                    content: "Xác nhận thoát phần mềm?",
                    onOk: () => {
                        router.push({ name: "login" });
                    },
                });
            }
        };

        const handleBrandClick = () => {
            router.push({ name: "dashboard" });
        };

        const visibleSubsystemOptionView = ref(true);
        const handleVisibleSubsystemOptionView = () => {
            visibleSubsystemOptionView.value = false;
        };

        return {
            user,
            items,
            handleClick,
            handleMenuClick,
            handleBrandClick,

            visibleSubsystemOptionView,
            handleVisibleSubsystemOptionView,
        };
    },
});
</script>

<style scoped>
.app-layout {
    height: 100%;
    background-color: #ececec;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-color: #ececec;
}

.app-layout-content {
    margin-top: var(--his-nav-height);
    margin-bottom: 0;
    padding: 0.5rem 1rem;
    height: calc(100vh - var(--his-nav-height));
    overflow: auto;
}

@media screen and (max-width: 720px) {
    .app-layout-content {
        padding: .5rem;
    }
}
</style>
