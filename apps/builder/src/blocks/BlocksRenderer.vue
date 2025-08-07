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
const { updateBlocks } = appEditorStore

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
    group-name="blocks"
    orientation="vertical"
    tag="div"
    @drop="updateBlocks(applyDrag(toRaw(blocks), $event))"
  >
    <SmoothDndDraggable
      v-for="(block, index) in blocks"
      :key="`${block.id}_${index}`"
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
