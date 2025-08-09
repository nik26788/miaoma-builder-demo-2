import type { DirectiveBinding } from 'vue'

interface ClickOutsideElement extends HTMLElement {
  /* eslint-disable no-unused-vars */
  clickOutsideEvent?: (event: MouseEvent) => void
}

export default {
  beforeMount(el: ClickOutsideElement, binding: DirectiveBinding) {
    el.clickOutsideEvent = function (event: MouseEvent) {
      // Check if clicked element is outside the bound element
      if (!(el === event.target || el.contains(event.target as Node))) {
        // Invoke the provided method
        binding.value(event)
      }
    }

    // Add click event listener
    document.addEventListener('click', el.clickOutsideEvent)
  },
  unmounted(el: ClickOutsideElement) {
    // Clean up event listener
    if (el.clickOutsideEvent) {
      document.removeEventListener('click', el.clickOutsideEvent)
      delete el.clickOutsideEvent
    }
  }
}
