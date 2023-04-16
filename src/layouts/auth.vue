<template>
    <a-layout class="h-100">
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
            <div class="logo"></div>
            <!--menu-->
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
                                <a-menu-item @click="handleClick(sub.router)">{{ sub.title }}</a-menu-item>
                            </template>
                        </a-sub-menu>
                    </template>
                </template>
            </a-menu>
        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <menu-unfold-outlined v-if="collapsed" class="trigger" @click="toggleCollapsed" />
                <menu-fold-outlined v-else class="trigger" @click="toggleCollapsed" />
            </a-layout-header>
            <a-layout-content>
                <slot></slot>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { useLayoutSider } from '@/stores/layout-sider.js'

export default defineComponent({
    setup() {
        const router = useRouter()
        const layoutSiderStore = useLayoutSider();
        const { collapsed, selectedKeys, openKeys, items } = storeToRefs(layoutSiderStore)
        const { toggleCollapsed } = layoutSiderStore

        const handleClick = (name) => {
            router.push({name: name});
        }

        return {
            collapsed,
            selectedKeys,
            openKeys,
            items,
            toggleCollapsed,
            handleClick
        }
    },
    components: {
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    }
})
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

.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}

.site-layout .site-layout-background {
    background: #fff;
}
</style>