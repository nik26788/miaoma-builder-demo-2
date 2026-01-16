import type { App, Component } from 'vue'

import HeroTitleBlock from '@/blocks/basics/HeroTitleBlock.vue'
import ViewBlock from '@/blocks/basics/ViewBlock.vue'
import ButtonBlock from '@/blocks/external/ButtonBlock.vue'

import type { BlockType } from './types/blocks'

interface BlockModel {
  type: BlockType
  material: Component
}

const basicBlocks: BlockModel[] = [
  {
    type: 'view',
    material: ViewBlock
  },
  {
    type: 'heroTitle',
    material: HeroTitleBlock
  }
]

class BlockSuite {
  blocks = basicBlocks
  constructor() {}

  getBlocksMap() {
    return Object.fromEntries(this.blocks.map((block) => [block.type, block]))
  }

  getBlock(type: BlockType) {
    return this.blocks.find((block) => block.type === type)
  }

  addBlock(block: BlockModel) {
    this.blocks.push(block)
  }

  hasBlock(type: BlockType) {
    return !!this.getBlocksMap()[type]
  }
}

const blockSuite = new BlockSuite()

blockSuite.addBlock({
  type: 'button',
  material: ButtonBlock
})

const blocksMap = blockSuite.getBlocksMap()

export const blocksMapSymbol = Symbol()

export const initBlocks = () => {
  const ins = {
    install(app: App<Element>) {
      app.provide(blocksMapSymbol, blocksMap)
      app.config.globalProperties.$blocksMap = blocksMap
    }
  }
  return ins
}

// Extensions of Vue types to be appended manually
// https://github.com/microsoft/rushstack/issues/2090
// https://github.com/microsoft/rushstack/issues/1709

// TODO: figure out why it cannot be 'vue'
// @ts-ignore: works on Vue 3, fails in Vue 2
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    /**
     * Access to the application's blocksMap
     */
    $blocksMap: string
  }
}
