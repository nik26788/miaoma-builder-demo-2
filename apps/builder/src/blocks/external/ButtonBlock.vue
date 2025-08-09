<script setup lang="ts">
import { ButtonBlockInfo } from '../../types/blocks'

const props = defineProps<{
  blockInfo: ButtonBlockInfo
}>()
</script>
<template>
  <button
    class="button"
    @click="props.blockInfo.events.onClick"
  >
    {{ props.blockInfo.props.content }}
  </button>
</template>
<style scoped>
.button {
  border: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 12px;
  border-radius: 8px;
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  background: var(--color-primary);
}
</style>
