import type { SmoothDnD } from 'smooth-dnd'
import { smoothDnD } from 'smooth-dnd'
import { defineComponent, h } from 'vue'

type EventKey = 'drop'
const eventEmitterMap: Record<EventKey, string> = {
  drop: 'onDrop'
}

export const SmoothDndContainer = defineComponent({
  name: 'SmoothDndContainer',
  setup() {
    return {
      container: null as SmoothDnD | null
    }
  },
  mounted() {
    const containerElement = this.$refs.container || this.$el
    const options: any = {}
    for (const key in eventEmitterMap) {
      const eventKey = key as EventKey
      options[eventEmitterMap[eventKey]] = (props: any) => {
        this.$emit(eventKey, props)
      }
    }
    this.container = smoothDnD(containerElement, options)
  },
  unmounted() {
    if (this.container) {
      try {
        this.container.dispose()
      } catch {
        // ignore
      }
    }
  },
  props: {
    behavior: { type: String, default: '' },
    groupName: { type: String, default: '' },
    getChildPayload: {
      type: Function,
      default: () => {}
    },
    orientation: { type: String, default: 'vertical' },
    tag: {
      type: String,
      default: 'div'
    }
  },
  render() {
    return h(this.$props.tag, Object.assign({}, { ref: 'container' }), this.$slots.default?.())
  }
})
