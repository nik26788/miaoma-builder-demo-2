<script setup lang="ts">
import { Plus } from '@icon-park/vue-next'

import { useDisclosure } from '../../hooks/useDisclosure'
import BlocksDrawer from './BlocksDrawer.vue'
import Navigation from './Navigation.vue'

const { isOpened: isComponentDrawerOpened, toggle } = useDisclosure()
</script>
<template>
  <div class="app-left-panel-wrapper">
    <div class="app-left-panel-drawer">
      <div class="app-left-panel-split tiny-scrollbar">
        <div class="drawer-header">
          <h3 class="drawer-title">NAVIGATION</h3>
        </div>
        <div class="drawer-content">
          <Navigation />
        </div>
      </div>
      <div class="app-left-panel-split tiny-scrollbar">
        <div class="drawer-header">
          <h3 class="drawer-title">COMPONENT</h3>
          <button
            :class="['drawer-component-adder', isComponentDrawerOpened && 'opened']"
            @click="toggle"
          >
            <Plus size="18" />
          </button>
        </div>
        <div class="drawer-content">Content</div>
      </div>
    </div>
    <Transition name="sub-panel-drawer">
      <div
        class="sub-panel-drawer-content"
        v-if="isComponentDrawerOpened"
      >
        <BlocksDrawer />
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.app-left-panel-wrapper {
  position: relative;
  display: flex;
  z-index: 4;
  height: 100%;
}

.app-left-panel-drawer {
  width: 320px;
  height: 100%;
  overflow: hidden;
}

.app-left-panel-split {
  height: 50%;
  overflow: auto;
  border-bottom: 1px solid var(--color-gray-200);
  border-right: 1px solid var(--color-gray-200);
}

.drawer-header {
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  height: 52px;
  padding: 0 10px 0 20px;
  font-weight: var(--font-weight-bolder);
  background-color: var(--color-white);
}

.drawer-content {
  padding: 0 10px;
}

.drawer-component-adder {
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  color: var(--color-white);
  background: var(--color-black);
  cursor: pointer;
  box-shadow:
    rgb(62 65 86 / 25%) 0 0 1px,
    rgb(62 65 86 / 10%) 0 4px 8px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  &.opened {
    background: var(--color-gray-300);
    color: var(--color-black);
    border-radius: 50%;
    transform: rotate(-45deg);
    transition: all 0.3s ease;
  }
}

.sub-panel-drawer-enter-active,
.sub-panel-drawer-leave-active {
  transition: 0.3s;
}

.sub-panel-drawer-enter-from,
.sub-panel-drawer-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.sub-panel-drawer-content {
  position: relative;
  z-index: -1;
  width: 300px;
  height: 100%;
  padding: 16px;
  box-shadow: var(--color-gray-300) 1px 0 0;
  overflow: hidden;
}
</style>
