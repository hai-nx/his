<script setup lang="ts">
import { defineProps } from 'vue'    
import DxNumberBox from 'devextreme-vue/number-box';



</script>

<template>
    <!-- <input type="number"> -->
    <div>
        <DxNumberBox class="x-input-number" :value="-2314.12" format="###,###,###.###,##" />
    </div>
</template>

<style scoped>
.x-input-number {
    padding: 2px 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: 14px;
        line-height: 20px;
        color: #24292e;
        vertical-align: middle;
        background-color: #ffffff;
        background-repeat: no-repeat;
        background-position: right 8px center;
        /* border: 1px solid #e1e4e8; */
        border: 1px solid #BDBDBD;
        border-radius: 2px;
        outline: none;
        box-shadow: rgba(225, 228, 232, 0.2) 0px 1px 0px 0px inset;
        height: 26px;
}

.x-input-number:hover,
.x-input-number:focus-visible {
    border-color: #0366d6;
    box-shadow: 0 0 0 1px #0366d6;
    outline: none;
}

.x-input-number:disabled {
    background-color: #f1f1f1;
}
</style>