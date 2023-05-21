<template>
    <div class="card-container">
        <a-tabs v-model:activeKey="activeKey" type="card">
            <a-tab-pane key="1" tab="Tiếp nhận bệnh nhân">
                <AdmissionRegisterView />
            </a-tab-pane>
            <a-tab-pane key="2" tab="Danh sách bệnh nhân tiếp nhận">
                <AdmissionRegisterPatientView />
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import AdmissionRegisterView from './AdmissionRegisterView.vue'
import AdmissionRegisterPatientView from './AdmissionRegisterPatientView.vue'

export default defineComponent({
    name: 'AdmissionView',
    setup() {
        return {
            activeKey: ref('1'),
        }
    },
    components: {
        AdmissionRegisterView,
        AdmissionRegisterPatientView,
    }
});
</script>

<style>
.card-container p {
    margin: 0px;
}

.card-container>.ant-tabs-card .ant-tabs-content {
    margin-top: -16px;
}

.card-container>.ant-tabs-card .ant-tabs-content>.ant-tabs-tabpane {
    padding: 16px;
    background: #fff;
}

.card-container>.ant-tabs-card>.ant-tabs-nav::before {
    display: none;
}

.card-container>.ant-tabs-card .ant-tabs-tab,
[data-theme='compact'] .card-container>.ant-tabs-card .ant-tabs-tab {
    background: transparent;
    border-color: transparent;
}

.card-container>.ant-tabs-card .ant-tabs-tab-active,
[data-theme='compact'] .card-container>.ant-tabs-card .ant-tabs-tab-active {
    background: #fff;
    border-color: #fff;
}

#components-tabs-demo-card-top .code-box-demo {
    padding: 24px;
    overflow: hidden;
    background: #f5f5f5;
}

[data-theme='compact'] .card-container>.ant-tabs-card .ant-tabs-content {
    height: 120px;
    margin-top: -8px;
}

[data-theme='dark'] .card-container>.ant-tabs-card .ant-tabs-tab {
    background: transparent;
    border-color: transparent;
}

[data-theme='dark'] #components-tabs-demo-card-top .code-box-demo {
    background: #000;
}

[data-theme='dark'] .card-container>.ant-tabs-card .ant-tabs-content>.ant-tabs-tabpane {
    background: #141414;
}

[data-theme='dark'] .card-container>.ant-tabs-card .ant-tabs-tab-active {
    background: #141414;
    border-color: #141414;
}
</style>