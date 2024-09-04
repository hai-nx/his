<template>
    <div class="layout-wrapper">
        <slot></slot>
    </div>
</template>

<style>
.layout-wrapper {
    display: block;
    background-color: var(---d-main-background-color);
    min-height: 100vh;
}
</style>