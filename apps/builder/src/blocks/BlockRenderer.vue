<script setup lang="ts">
import { dropHandlers, smoothDnD } from 'smooth-dnd'
import { defineProps, onMounted } from 'vue'

import { BlockInfo } from '../types/blocks'

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler

defineProps<{
  block: BlockInfo
  i: number
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
