<script setup lang="ts">
import { computed } from 'vue'

import type { HeroTitleBlockInfo } from '../../types/blocks';

const props = defineProps<{
  blockInfo: HeroTitleBlockInfo
}>()

const style = computed(() => {
  return { 'text-align': props.blockInfo.props.align }
})
</script>
<template>
  <div class="hero-title-wrapper">
    <div
      class="hero-title"
      v-bind="{ style }"
    >
      {{ props.blockInfo.props.content }}
    </div>
  </div>
</template>

<style scoped>
.hero-title-wrapper {
  width: 100%;
}
.hero-title {
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
}
</style>
