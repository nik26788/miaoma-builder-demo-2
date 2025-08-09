<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { dropHandlers, type DropResult, smoothDnD } from 'smooth-dnd'
import { toRaw } from 'vue'

import { SmoothDndContainer } from '../components/SmoothDnd/SmoothDndContainer.ts'
import { SmoothDndDraggable } from '../components/SmoothDnd/SmoothDndDraggable.ts'
import { useAppEditorStore } from '../stores/appEditor'
import { arrayMove } from '../utils/array'
import BlockRenderer from './BlockRenderer.vue'

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler

const appEditorStore = useAppEditorStore()
const { blocks } = storeToRefs(appEditorStore)
const { updateBlocks, unselectBlock } = appEditorStore

const applyDrag = <T extends any[]>(arr: T, dragResult: DropResult) => {
  const { removedIndex, addedIndex, payload } = dragResult

  const result = [...arr]

  // 没做操作
  if (addedIndex === null) return result

  // 添加
  if (addedIndex !== null && removedIndex === null) {
    result.splice(addedIndex, 0, {
      id: `${Math.random()}`,
      ...payload
    })
  }

  // 移动
  if (addedIndex !== null && removedIndex !== null) {
    return arrayMove(result, removedIndex, addedIndex)
  }

  return result
}
</script>

<template>
  <SmoothDndContainer
    drag-handle-selector=".handle"
    group-name="blocks"
    orientation="vertical"
    tag="div"
    class="renderer-dnd-container"
    @drop="updateBlocks(applyDrag(toRaw(blocks), $event))"
    v-clickOutside="unselectBlock"
  >
    <SmoothDndDraggable
      v-for="(block, index) in blocks"
      :key="block.id"
    >
      <div class="block-item">
        <BlockRenderer
          :block="block"
          :i="index"
        />
      </div>
    </SmoothDndDraggable>
  </SmoothDndContainer>
</template>
<style scoped>
.renderer-dnd-container {
  width: 100%;
}
</style>

<style lang="css">
.smooth-dnd-draggable-wrapper {
  overflow: visible !important;
}
</style>
