<script setup lang="ts">
import { ApplicationMenu, DataSheet, FriendsCircle, Lightning, Page } from '@icon-park/vue-next'
import { computed, defineComponent, h } from 'vue'
import { useRoute } from 'vue-router'
const linkItems = [
  {
    value: 'dataSource',
    label: 'Data',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(0, 196, 83, 0.2) 0%, rgba(0, 196, 83, 0) 100%)`,
    color: 'rgb(0, 196, 83)',
    borderColor: 'radial-gradient(50% 50%, rgb(0, 196, 83) 0%, rgba(0, 196, 83, 0) 100%)'
  },
  {
    value: 'layout',
    label: 'Layout',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(24, 190, 212, 0.2) 0%, rgba(24, 190, 212, 0) 100%)`,
    color: 'rgb(24, 190, 212)',
    borderColor: 'radial-gradient(50% 50%, rgb(24, 190, 212) 0%, rgba(24, 190, 212, 0) 100%)'
  },
  {
    value: 'actions',
    label: 'Actions',
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(241, 60, 11, 0.2) 0%, rgba(241, 60, 11, 0) 100%)`,
    color: 'rgb(241, 60, 11)',
    borderColor: 'radial-gradient(50% 50%, rgb(241, 60, 11) 0%, rgba(241, 60, 11, 0) 100%)'
  }
]

const Icon = defineComponent({
  setup(props) {
    switch (props.type) {
      case 'dataSource':
        return () => h(DataSheet, { size: 16 })
      case 'layout':
        return () => h(Page, { size: 16 })
      case 'actions':
        return () => h(Lightning, { size: 16 })
    }
  },
  props: {
    type: {
      type: String,
      required: true
    }
  }
})

const route = useRoute()

const activeLink = computed(() => {
  return route.name
})

const checkActive = (value: string) => {
  const activeLinkValue = activeLink.value as string
  return activeLinkValue.includes(value)
}
</script>

<template>
  <div class="app-navigator">
    <div class="app-info-wrapper">
      <RouterLink
        to="/app"
        class="icon-button"
      >
        <ApplicationMenu size="16" />
      </RouterLink>
      <div class="app-logo">
        <img
          src="https://functions.prod.internal.glideapps.com/getEmoji/%E2%98%84%EF%B8%8F"
          alt=""
        />
      </div>
    </div>
    <div class="app-navigator-link-wrapper">
      <RouterLink
        v-for="item in linkItems"
        :key="item.value"
        :to="item.value"
        :style="checkActive(item.value) && { background: item.bg }"
        class="app-navigator-link-item"
      >
        <div
          :style="{
            lineHeight: 0.5,
            color: checkActive(item.value) ? item.color : 'var(--color-gray-700)'
          }"
        >
          <Icon :type="item.value" />
        </div>
        <span class="item-title">
          {{ item.label }}
        </span>
        <div
          class="item-border"
          :style="checkActive(item.value) ? { background: item.borderColor } : {}"
        ></div>
      </RouterLink>
    </div>
    <div class="app-setting-wrapper">
      <div class="common-btn">
        <FriendsCircle size="16" />
        <span>Publish</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-navigator {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--navigator-height);
  box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
}

.app-info-wrapper {
  width: 1000px;
  display: flex;
  place-items: center;
}

.app-logo {
  width: 32px;
  height: 32px;
  margin: 10px 8px;
  border-radius: 8px;
  background: #3d6583;
}

.app-logo img {
  width: 100%;
  height: 100%;
  padding: 6px;
}

.app-navigator-link-wrapper {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-self: stretch;
}

.app-navigator-link-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 8px;
  margin: 0 24px;
  align-self: stretch;
  background-color: var(--color-white);
  color: var(--color-text);
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bold);
}

.item-title {
  margin-left: 8px;
  color: var(--color-black);
}

.item-border {
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 1px;
}

.app-setting-wrapper {
  width: 1000px;
  display: flex;
  place-items: center;
  justify-content: flex-end;
  margin-right: 18px;
  gap: 12px;
}

.common-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: 8px;
  background-color: var(--color-black);
  color: var(--color-white);
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-bold);
  cursor: pointer;
  user-select: none;
}
</style>
