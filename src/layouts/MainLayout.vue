<script setup lang="ts">
import { defineProps, ref } from "vue";
import { storeToRefs } from "pinia";
import { useLayout } from "../stores/layout";

const layout = useLayout();
const { items, menu } = storeToRefs(layout);

const open = ref<boolean>(false)

</script>

<template>
    <div class="layout-main">
        <div class="layout-topbar">
            <div class="layout-topbar-logo-container">
                <label class="layout-toggle" for="layout-toggle-checkbox">
                    <i class="bi bi-list"></i>
                </label>

                <img class="layout-logo" src="../assets//logo-nav.png" />
            </div>

            <div class="layout-topbar-menu">
                <d-menu :items="items"></d-menu>
            </div>

            <div class="layout-topbar-actions">
                <div class="account-info">
                    <button class="dropbtn" @click="open = !open" @blur="open = false">
                        <i class="bi bi-person-circle"></i>
                    </button>

                    <div class="dropdown-overlay" :class="{ selectHide: !open }">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                </div>

                <v-dropdown :options="menu">
                </v-dropdown>
            </div>
        </div>

        <input id="layout-toggle-checkbox" type="checkbox" hidden />

        <div class="layout-sidebar">
            <div class="layout-sidebar-logo-container">
                <label class="layout-toggle" for="layout-toggle-checkbox">
                    <i class="bi bi-list"></i>
                </label>

                <img class="layout-logo" src="../assets//logo-nav.png" />
            </div>

            <div class="layout-sidebar-menu">

            </div>
        </div>

        <div class="layout-main-container">
            <slot></slot>
        </div>

        <label class="layout-mask animate-fadein" for="layout-toggle-checkbox"></label>
    </div>
</template>

<style scoped>
.selectHide {
    display: none;
}



.layout-main {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.layout-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 1rem;
    height: 100%;
}

.layout-toggle:hover {
    background-color: #00000012;
}

.layout-toggle i {
    font-size: 20px;
}

.layout-logo {
    cursor: pointer;
    height: 48px;
    padding: 8px;
}



.layout-topbar {
    display: flex;
    background-color: #001529;
    border-bottom: 1px solid #00000012;
    justify-content: space-between;
    height: 40px;
}

.layout-topbar-logo-container {
    display: flex;
    align-items: center;
    width: 200px;
}

.layout-topbar-logo-container .layout-toggle {
    display: none;
}

.layout-topbar-menu {
    flex: 1;
    z-index: 999;
}

.layout-topbar-actions {
    display: flex;
    align-items: center;
}


.account-info {
    height: 100%;
    display: inline-block;
}

.account-info .dropbtn {
    background-color: #3498DB;
    color: white;
    border: none;
    cursor: pointer;
    height: 100%;
}

.account-info i {
    font-size: 30px;
}

.dropdown-overlay {
    position: absolute;
    background-color: red;
    min-width: 15rem;
    height: 20rem;
    right: 0;
}



.layout-sidebar {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999;
    height: 100vh;
    width: 20rem;
    overflow-y: auto;
    background-color: #fff;


    transform: translateX(-100%);
    opacity: 0;
    transition: transform linear 0.2s, opacity linear 0.2s;
}

.layout-sidebar-logo-container {
    display: flex;
    background-color: #fff;
    border-bottom: 1px solid #00000012;
    height: 48px;
}


#layout-toggle-checkbox:checked~.layout-mask {
    display: block;
}

#layout-toggle-checkbox:checked~.layout-sidebar {
    transform: translateX(0%);
    opacity: 1;
}


.layout-mask {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 998;
    background-color: #00000014;
}

.animate-fadein {
    animation: fadein .15s linear;
}


.layout-main-container {
    height: 100%;
    width: 100%;
}


@media screen and (max-width: 1023px) {
    .layout-topbar-logo-container .layout-toggle {
        display: flex;
    }

    .layout-topbar-menu {
        display: none;
    }
}

@media screen and (max-width: 540px) {
    .layout-sidebar {
        width: 100%;
    }
}
</style>