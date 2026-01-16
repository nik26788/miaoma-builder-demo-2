<script setup lang="ts">
import { useTitle, useToggle } from '@demos-vbuilder/hooks'

const { isToggle, toggle } = useToggle()
useTitle('Hello title...')
</script>
<template>
  <div>
    <h3>DataSource Left Panel</h3>
    <div>
      <button
        @click="toggle"
        :style="{ color: isToggle ? 'tomato' : 'black' }"
      >
        Click me
      </button>
    </div>
  </div>
</template>
