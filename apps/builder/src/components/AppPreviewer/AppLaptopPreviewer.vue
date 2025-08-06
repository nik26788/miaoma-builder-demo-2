<script setup lang="ts">
import BlocksRenderer from '../../blocks/BlocksRenderer.vue'
</script>
<template>
  <div class="layout-runner-content-wrapper">
    <div class="layout-runner-content">
      <BlocksRenderer />
    </div>
  </div>
</template>

<style scoped>
.layout-runner-content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  height: 100%;
}

.layout-runner-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 90px;
}
</style>
