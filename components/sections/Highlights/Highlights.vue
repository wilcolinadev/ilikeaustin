<script>
import HighlightsTab from '~/components/sections/Highlights/HighlightsTab.vue'
import HighlightsMain from '@/components/sections/Highlights/HighlightsMain.vue'

export default {
  name: 'Highlights',
  components: {
    HighlightsTab,
    HighlightsMain,
  },
  data() {
    return {
      activeKey: '1',
      tabs: [
        {
          title: 'Destinations',
        },
        {
          title: 'Stays',
        },
        {
          title: 'Cuisine',
        },
        {
          title: 'Events',
        },
      ],
    }
  },
  methods: {
    setActiveKey(key) {
      this.activeKey = key
    },
  },
}
</script>

<template id="Highlights">
  <section>
    <div class="md:flex">
      <ul
        class="flex flex-wrap md:flex-col md:space-y-2 gap-3 justify-stretch text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0"
      >
        <HighlightsTab
          v-for="(tab, index) in tabs"
          :key="tab.title"
          :title="tab.title"
          :active="activeKey == index + 1"
          @click="setActiveKey(index + 1)"
        />
      </ul>
      <div
        class="bg-gradient-to-b from-secondary to-yellow-300 via-secondary/95 text-medium text-gray-500 rounded-lg w-full p-4 md:p-6"
      >
        <HighlightsMain :active-key="activeKey" />
      </div>
    </div>
  </section>
</template>
