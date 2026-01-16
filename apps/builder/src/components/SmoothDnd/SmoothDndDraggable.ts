import { defineComponent, h } from 'vue'

export const SmoothDndDraggable = defineComponent({
  name: 'SmoothDndDraggable',
  setup() {},
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  },
  render() {
    return h(this.$props.tag, {}, this.$slots.default?.())
  }
})
