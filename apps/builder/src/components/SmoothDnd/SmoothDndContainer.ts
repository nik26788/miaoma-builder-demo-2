import type { SmoothDnD } from 'smooth-dnd'
import { dropHandlers, smoothDnD } from 'smooth-dnd'
import { defineComponent, h } from 'vue'

type EventKey =
  | 'test-event'
  | 'drag-start'
  | 'drag-end'
  | 'drop'
  | 'drag-enter'
  | 'drag-leave'
  | 'drop-ready'

const eventEmitterMap: Record<EventKey, string> = {
  'test-event': 'onTestEvent',
  'drag-start': 'onDragStart',
  'drag-end': 'onDragEnd',
  drop: 'onDrop',
  'drag-enter': 'onDragEnter',
  'drag-leave': 'onDragLeave',
  'drop-ready': 'onDropReady'
}

smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler
// smoothDnD.wrapChild = false

export const SmoothDndContainer = defineComponent({
  name: 'SmoothDndContainer',
  setup() {
    return {
      container: null as SmoothDnD | null
    }
  },
  mounted() {
    const containerElement = this.$refs.container || this.$el
    const options: any = Object.assign({}, this.$props)
    for (const key in eventEmitterMap) {
      const eventKey = key as EventKey
      options[eventEmitterMap[eventKey]] = (props: any) => {
        this.$emit(eventKey, props)
        this.$emit('test-event', props)
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
  emits: ['test-event', 'drop', 'drag-start', 'drag-end', 'drag-enter', 'drag-leave', 'drop-ready'],
  props: {
    getChildPayload: {
      type: Function,
      default: () => {}
    },
    orientation: { type: String, default: 'vertical' },
    removeOnDropOut: { type: Boolean, default: false },
    autoScrollEnabled: { type: Boolean, default: true },
    animationDuration: { type: Number, default: 250 },
    /* eslint-disable */
    // vue/require-default-prop
    behaviour: String,
    groupName: String,
    dragHandleSelector: String,
    nonDragAreaSelector: String,
    lockAxis: String,
    dragClass: String,
    dropClass: String,
    dragBeginDelay: Number,
    shouldAnimateDrop: Function,
    shouldAcceptDrop: Function,
    getGhostParent: Function,
    dropPlaceholder: [Object, Boolean],
    /* eslint-enable */
    tag: {
      type: String,
      default: 'div'
    }
  },
  render() {
    return h(this.$props.tag, Object.assign({}, { ref: 'container' }), this.$slots.default?.())
  }
})
