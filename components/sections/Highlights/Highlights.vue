<script>
import HighlightsTab from '~/components/sections/Highlights/HighlightsTab.vue'
import HighlightsMain from '@/components/sections/Highlights/HighlightsMain.vue'
export default {
  name: 'Highlights',
  components: {
    HighlightsTab,
    HighlightsMain,
  },
}
</script>

<template id="Highlights">
  <section>
    <div class="md:flex">
      <ul
        class="flex-column space-y space-y text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0"
      >
        <HighlightsTab title="Trending Activities" />
        <HighlightsTab title="Popular Stays" />
        <HighlightsTab title="Delicious Food" />
        <HighlightsTab title="Hot events" />
      </ul>
      <div
        class="bg-tree text-medium text-gray-500 rounded-lg w-full p-4 md:p-6"
      >
        <HighlightsMain />
      </div>
    </div>
  </section>
</template>
