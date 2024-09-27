<script setup lang="ts">
import { computed, defineProps, PropType } from 'vue'
import { MenuItem } from '../menuitem';

const props = defineProps({
    breadcrumb: {
        type: Array as PropType<MenuItem[]>
    },
    extra: {
        type: Array as PropType<MenuItem[]>
    },
    title: { type: String },
    fluid: {
        type: Boolean, 
        default: true
    }
})

const cls = computed(() => {
    return {
        'el-container-fluid': props.fluid
    }
})

</script>

<template>
    <div class="el-page-container" :class="cls">
        <div class="el-page-container-topbar">
            <div class="el-page-container-breadcrumb">
                <d-breadcrumb :items="breadcrumb"></d-breadcrumb>
            </div>
            <div class="el-page-container-extra">
                <ul>
                    <li v-for="(item, index) in extra" :key="index">
                        <i :class="item.icon"></i>
                    </li>
                </ul>
            </div>
        </div>
        <div class="d-page-container-main">
            <div class="d-page-header"></div>
            <div class="d-page-body"></div>
            <div class="d-page-footer"></div>
        </div>
    </div>
</template>