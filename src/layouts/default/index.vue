<template>
    <div class="layout-wrapper">
        <slot></slot>
    </div>
</template>

<style>
.layout-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    background-color: var(---d-main-background-color);
    height: 100vh;
}
</style>