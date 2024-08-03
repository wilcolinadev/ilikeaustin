<script>
import CardStyleOne from '@/components/sections/Highlights/CardStyleOne.vue'
import CardStyleTwo from '@/components/sections/Highlights/CardStyleTwo.vue'
export default {
  name: 'HighlightsMain',
  components: {
    CardStyleOne,
    CardStyleTwo,
  },
}
</script>

<template id="HighlightsMain">
  <h3 class="text-lg font-bold text-gray-900 mb-4">Explore Trending</h3>

  <!-- Desktop Version will have one larger column and Two smaller columns -->
  <div class="grid md:grid-cols-4 gap-5">
    <!-- Column Container -->
    <div class="col-span-2 flex flex-col gap-6">
      <!-- First Box -->
      <CardStyleOne />
      <!-- Second Box -->
      <CardStyleOne />
    </div>
    <!-- Second Column -->
    <CardStyleTwo />
    <!-- Third Column -->
    <CardStyleTwo />
  </div>
</template>
