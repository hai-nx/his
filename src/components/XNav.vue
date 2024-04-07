<template>
  <div class="nav">
    <nav class="nav-top">
      <label class="nav-top-toggle" for="nav-side-checkbox">
        <i class="bi bi-list" style="font-size: 20px"></i>
      </label>

      <div class="nav-top-brand">
        <img src="../assets//logo-nav.png" alt="logo" />
      </div>

      <ul class="nav-top-item">
        <li v-for="(item, index) in dataSource" :key="index">
          <x-nav-item-a :data-source="item" :depth="0" @click="onClick"></x-nav-item-a>
        </li>
      </ul>

      <div class="nav-top-extra">
        <slot></slot>
      </div>
    </nav>

    <input type="checkbox" hidden id="nav-side-checkbox" />

    <label class="nav-side-overlay" for="nav-side-checkbox"></label>

    <aside class="nav-side">
      <div class="nav-side-header">
        <label class="nav-top-toggle" for="nav-side-checkbox">
          <i class="bi bi-list" style="font-size: 20px"></i>
        </label>
        <a href="#" class="nav-top-brand">
          <img src="../assets//logo-nav.png" alt="logo">
        </a>

      </div>

    </aside>
  </div>
</template>

<script setup lang="ts">
import { PropType, defineEmits, defineProps } from "vue";
import { XItemType } from ".";
import XNavItemA from "../components/XNavItem.vue";

const props = defineProps({
  dataSource: {
    type: Object as PropType<XItemType[]>,
  },
});

const emit = defineEmits<{
  (e: "click", item: XItemType): void;
}>();

function onClick(item: XItemType) {
  emit("click", item);
}
</script>

<style scoped>
/* nav */
.nav-top {
  display: block;
  position: fixed;
  top: 0;
  background-color: var(--his-nav-background-color);
  box-shadow: 0 2px 8px rgba(0,0,0,.15);
  font-weight: 600;
  color: var(--his-nav-color);
  line-height: var(--his-nav-height);
  height: var(--his-nav-height);
  width: 100%;
  z-index: 99;
}

.nav-top-toggle {
  display: none;
  cursor: pointer;
  float: left;
  padding: 0 1rem;
}

.nav-top-brand {
  float: left;
  text-align: center;
  display: flex;
  align-items: center;
  height: var(--his-nav-height);
  line-height: var(--his-nav-height);
  margin: 0 12px;
}

.nav-top-brand img {
  max-height: var(--his-nav-height);
  padding: 4px 0;
}

.nav-top-item {
  background-color: rebeccapurple;
  float: left;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-top-item li {
  display: inline-block;
}

.nav-top-extra {
  float: right;
  margin: 0 12px;
}

/* aside */
.nav-side {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--his-nav-width);
  max-width: 100%;
  background-color: var(--his-nav-background-color);
  color: var(--his-nav-color);

  transform: translateX(-100%);
  opacity: 0;
  transition: transform linear 0.2s, opacity linear 0.2s;
  z-index: 99;
}

.nav-side-overlay {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);

  animation: fadein linear 0.2s;
  z-index: 99;
}

#nav-side-checkbox:checked~.nav-side-overlay {
  display: block;
}

#nav-side-checkbox:checked~.nav-side {
  transform: translateX(0%);
  opacity: 1;
}

.nav-side-header {
    height: var(--his-nav-height);
    line-height: var(--his-nav-height);
}

@media screen and (max-width: 540px) {
  .nav-side {
    width: 100%;
  }
}

@media (max-width: 1023px) {
  .nav-top-toggle {
    display: block;
  }

  .nav-top-item {
    display: none;
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
