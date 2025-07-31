export type BaseBlockType = 'heroTitle' | 'view' | 'chart' | 'quote' | 'image'
export type ExtraBlockType = 'form' | 'button' | 'notes'

export type BlockType = BaseBlockType | ExtraBlockType

export interface BaseBlockProtocol {
  id: string
  label: string
}

const heroTitleBlockAlign = ['left', 'center', 'right'] as const
type HeroTitleBlockAlign = (typeof heroTitleBlockAlign)[number]

export interface HeroTitleBlockProtocol extends BaseBlockProtocol {
  type: 'heroTitle'
  props: {
    align: HeroTitleBlockAlign
  }
}

export interface ViewBlockProtocol extends BaseBlockProtocol {
  type: 'chart'
  props: {
    //
  }
}
