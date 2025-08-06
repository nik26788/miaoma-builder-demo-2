<script setup lang="ts">
import { ref } from 'vue'

import LaptopPreviewer from './LaptopPreviewer.vue'
import MobilePreviewer from './MobilePreviewer.vue'
import { PreviewerType } from './type'

const previewMode = ref<PreviewerType>('laptop')
</script>
<template>
  <div class="layout-content">
    <div class="layout-simulator-wrapper">
      <component :is="previewMode === 'laptop' ? LaptopPreviewer : MobilePreviewer"></component>
    </div>
  </div>
</template>

<style scoped>
.layout-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: var(--color-gray-100);
  position: relative;
}

.layout-simulator-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
