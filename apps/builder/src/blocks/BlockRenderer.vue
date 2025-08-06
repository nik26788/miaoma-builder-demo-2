<script setup lang="ts">
import { defineProps, onMounted } from 'vue'

import { BlockInfo } from '../types/blocks'
defineProps<{
  block: BlockInfo
  index: number
}>()

onMounted(() => {})
</script>

<template>
  <div class="block-wrapper">
    <component
      :is="$blocksMap[block.type].material"
      :block-info="block"
      class="block"
    ></component>
  </div>
</template>
