<script setup lang="ts">
import { Delete, Drag } from '@icon-park/vue-next'
import { storeToRefs } from 'pinia'
import { dropHandlers, smoothDnD } from 'smooth-dnd'
import { defineProps, onMounted } from 'vue'
import { inject } from 'vue'

import { useAppEditorStore } from '../stores/appEditor'
import { BlockInfo } from '../types/blocks'

const appEditorStore = useAppEditorStore()
const { selectBlock } = appEditorStore
const { currentBlockId } = storeToRefs(appEditorStore)

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler

defineProps<{
  block: BlockInfo
  i: number
}>()

onMounted(() => {})

const editable = inject('editable', true)
</script>

<template>
  <div
    class="block-wrapper"
    @click="selectBlock(block.id)"
  >
    <component
      :is="$blocksMap[block.type].material"
      :block-info="block"
      class="block"
    ></component>
    <div
      v-if="editable"
      :class="['block-wrapper-indicator', { selected: currentBlockId === block.id }]"
    >
      <div
        class="block-toolbar"
        v-if="currentBlockId === block.id"
      >
        <div class="block-toolbar-item handle">
          <Drag />
        </div>
        <div class="block-toolbar-item">
          <Delete />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  margin-top: 16px;
  padding: 6px 4px;
  border-radius: 8px;
  background-color: var(--color-white);
  transition: box-shadow 0.2s ease-in-out;
}

.block {
  position: relative;
  z-index: 1;
}
.block-wrapper-indicator {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  /* border-radius: 8px; */
  pointer-events: none;
  user-select: none;
}
.block-wrapper-indicator.selected {
  border: 1px solid var(--color-primary);
}
.block-toolbar {
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: -36px;
  z-index: 1;
  padding: 4px 8px;
  gap: 4px;
  background-color: var(--color-black);
  border-radius: 6px;
  pointer-events: visible;
}
.block-toolbar-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  border-radius: 4px;
  color: var(--color-white);
  cursor: pointer;
}
.block-toolbar-item:nth-of-type(1) {
  cursor: grab;
}

.block-toolbar-item:hover {
  background-color: var(--color-gray-800);
  transition: all 0.2s ease-in-out;
}
</style>
