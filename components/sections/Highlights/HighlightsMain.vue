<script>
import CardStyleOne from '@/components/sections/Highlights/CardStyleOne.vue'
import CardStyleTwo from '@/components/sections/Highlights/CardStyleTwo.vue'
import highlights from '../../../config/highligths.json'
export default {
  name: 'HighlightsMain',
  components: {
    CardStyleOne,
    CardStyleTwo,
  },
  props: {
    activeKey: {
      type: String,
      default: '1',
    },
  },
  data() {
    return {
      highlights,
    }
  },
}
</script>

<template id="HighlightsMain">
  <h2 class="text-lg font-bold text-primary mb-4">Explore Trending</h2>

  <!-- Desktop Version will have one larger column and Two smaller columns -->
  <div class="grid md:grid-cols-4 gap-5">
    <!-- Column Container -->
    <div class="col-span-2 flex flex-col gap-6">
      <!-- First Two Cards -->
      <CardStyleOne
        v-for="highlight in highlights[activeKey].slice(0, 2)"
        :key="highlight.title"
        :title="highlight.title"
        :img="highlight.img"
        :link="highlight.link"
      />
    </div>
    <!-- Second Two Cards -->
    <CardStyleTwo
      v-for="highlight in highlights[activeKey].slice(2, 4)"
      :key="highlight.title"
      :title="highlight.title"
      :img="highlight.img"
      :link="highlight.link"
    />
  </div>
</template>
