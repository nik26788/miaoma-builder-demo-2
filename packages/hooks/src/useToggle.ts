import { ref } from 'vue'

export const useToggle = () => {
  const isToggle = ref(false)
  const toggle = () => {
    isToggle.value = !isToggle.value
  }

  return {
    isToggle,
    toggle
  }
}
