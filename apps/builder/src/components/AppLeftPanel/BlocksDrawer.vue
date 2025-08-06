<script setup lang="ts">
import { blocksBaseMetaList, getBlocksDefaultData } from '../../constants/blocksBaseMeta.ts'
import { SmoothDndContainer } from '../SmoothDnd/SmoothDndContainer.ts'
import { SmoothDndDraggable } from '../SmoothDnd/SmoothDndDraggable.ts'
</script>
<template>
  <div class="component-sub-drawer">
    <SmoothDndContainer
      behavior="copy"
      group-name="blocks"
      orientation="vertical"
      :get-child-payload="
        (index: number) => {
          const { type } = blocksBaseMetaList[index]
          return getBlocksDefaultData(type)
        }
      "
      tag="div"
      class="blocks-list"
    >
      <SmoothDndDraggable
        v-for="block in blocksBaseMetaList"
        :key="block.type"
      >
        <div class="block-item">
          <div class="block-icon-wrapper">
            <component :is="block.icon"></component>
          </div>
          <span class="block-label">{{ block.label }}</span>
        </div>
      </SmoothDndDraggable>
    </SmoothDndContainer>
  </div>
</template>

<style scoped>
.component-sub-drawer {
  height: 100%;
}

.blocks-list {
  --grid-item-color: #ef5f4f;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
  padding-bottom: 8px;
}

.block-item {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 8px 0;
  border-radius: 9px;
  cursor: grab;
  user-select: none;
}

.block-item:hover {
  background-color: var(--color-gray-200);
}

.block-icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  color: var(--color-white);
  background-color: var(--grid-item-color);
  font-size: var(--font-size-large);
  margin-bottom: 8px;
}

.block-label {
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
}
</style>
