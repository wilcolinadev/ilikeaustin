<script setup>
import { ref } from 'vue'
import HighlightsTab from '~/components/sections/Highlights/HighlightsTab.vue'
import HighlightsMain from '@/components/sections/Highlights/HighlightsMain.vue'

const tabs = [
  { key: '1', title: 'Outdoors' },
  { key: '2', title: 'Stays' },
  { key: '3', title: 'Cuisine' },
  { key: '4', title: 'Nightlife' },
]

const activeKey = ref(tabs[0].key) // Default to the first tab

const setActiveKey = key => {
  activeKey.value = key
}
</script>

<template id="Highlights">
  <section>
    <div class="md:flex">
      <ul
        class="flex flex-wrap md:flex-col md:space-y-2 gap-3 justify-stretch text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0"
      >
        <HighlightsTab
          v-for="tab in tabs"
          :key="tab.key"
          :title="tab.title"
          :active="activeKey === tab.key"
          @click="setActiveKey(tab.key)"
        />
      </ul>
      <div
        class="bg-gradient-to-b from-primary to-tertiary text-medium text-gray-500 rounded-lg w-full p-4 md:p-6"
      >
        <HighlightsMain
          :active-key="activeKey"
          :title="tabs[activeKey].title"
        />
      </div>
    </div>
  </section>
</template>
