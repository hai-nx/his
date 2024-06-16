<script setup lang="ts">
import { defineProps } from 'vue'    
import DxNumberBox from 'devextreme-vue/number-box';



</script>

<template>
    <!-- <input type="number"> -->
    <div class="x-input-number">
        <DxNumberBox :value="-2314.12" format="###,###,###.###,##"
            :input-attr="{ 'aria-label': 'Accounting Format' }" />
    </div>
</template>

<style scoped>
.x-input-number {
    padding: 2px 5px;
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
}

</style>