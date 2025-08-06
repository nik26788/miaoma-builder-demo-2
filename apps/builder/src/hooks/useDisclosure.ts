import { ref } from 'vue'

export function useDisclosure() {
  const isOpened = ref(false)
  const toggle = () => {
    isOpened.value = !isOpened.value
  }

  return {
    isOpened,
    toggle
  }
}
