<template>
    <div class="layout-wrapper">
        <slot></slot>
    </div>
</template>

<style>
.layout-wrapper {
    display: flex;
    flex-direction: column;
    background-color: #f0f4f9;
    height: 100vh;
}
</style>