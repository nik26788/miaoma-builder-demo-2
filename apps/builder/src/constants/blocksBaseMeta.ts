import {
  ChartLine,
  Form,
  HamburgerButton,
  ImageFiles,
  Notes,
  Quote,
  Table,
  TitleLevel
} from '@icon-park/vue-next'
import type { Icon } from '@icon-park/vue-next/lib/runtime'
import { nanoid } from 'nanoid'

import type { BlockType } from '../types/blocks'

type BlockBaseMeta = {
  type: BlockType
  label: string
  icon: Icon
}

export const blocksBaseMetaList: BlockBaseMeta[] = [
  {
    type: 'quote',
    label: 'Quote',
    icon: Quote
  },
  {
    type: 'heroTitle',
    label: 'Hero Title',
    icon: TitleLevel
  },
  {
    type: 'image',
    label: 'Image',
    icon: ImageFiles
  },
  {
    type: 'chart',
    label: 'Charts',
    icon: ChartLine
  },
  {
    type: 'button',
    label: 'Button',
    icon: HamburgerButton
  },
  {
    type: 'form',
    label: 'Form',
    icon: Form
  },
  {
    type: 'notes',
    label: 'Notes',
    icon: Notes
  },
  {
    type: 'view',
    label: 'View',
    icon: Table
  }
]

export const blocksBaseMeta = Object.fromEntries(
  blocksBaseMetaList.map((item) => [item.type, item])
)

export const getBlocksDefaultData = (type: BlockType) => {
  const id = nanoid()

  switch (type) {
    case 'quote':
      return {
        id,
        type: 'quote',
        label: 'Quote',
        prop: {
          content: 'Quote Content',
          status: 'success'
        }
      }
    case 'notes':
      return {
        id,
        type: 'notes',
        label: 'Notes',
        prop: {
          content: ''
        }
      }
    case 'heroTitle':
      return {
        id,
        type: 'heroTitle',
        label: 'Hero Title',
        prop: {
          align: 'center',
          content: 'Hero Title'
        }
      }
    case 'image':
      return {
        id,
        type: 'image',
        label: 'Image',
        prop: {
          url: ''
        }
      }
    case 'view':
      return {
        id,
        type: 'view',
        label: 'View',
        prop: {
          fields: {
            id: {
              type: 'text'
            }
          },
          fieldProps: [],
          data: []
        }
      }
    case 'button':
      return {
        id,
        type: 'button',
        label: 'Button',
        prop: {
          chartType: 'echarts'
        }
      }
    case 'chart':
      return {
        id,
        type: 'chart',
        label: 'Chart',
        prop: {
          content: 'Button'
        }
      }
    case 'form':
      return {
        id,
        type: 'form',
        label: 'Form',
        prop: {
          fields: []
        }
      }
  }
}
