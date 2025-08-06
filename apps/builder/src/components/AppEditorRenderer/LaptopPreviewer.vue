<script setup lang="ts">
import AppLaptopPreviewer from '../AppPreviewer/AppLaptopPreviewer.vue'
</script>
<template>
  <div class="layout-runner">
    <AppLaptopPreviewer />
  </div>
</template>

<style scoped>
.layout-runner {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  margin: 8px 3%;
  height: 100%;
  background-color: var(--color-white);
  border-radius: 8px;
  box-shadow:
    0 0 1px rgb(62 65 86 / 37.5%),
    0 12px 24px rgb(62 65 86 / 15%),
    0 20px 40px rgb(62 65 86 / 10%);
}
</style>
