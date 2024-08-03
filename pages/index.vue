<script>
import HomeHeader from '@/components/HomeHeader/HomeHeader.vue'
import AustinOverview from '@/components/sections/AustinOverview.vue'
import Highlights from '@/components/sections/Highlights/Highlights.vue'
export default {
  components: {
    HomeHeader,
    AustinOverview,
    Highlights,
  },
  data() {},
}
</script>

<template>
  <div>
    <HomeHeader />
    <div class="max-w-6xl m-auto py-6 px-6">
      <AustinOverview />
      <Highlights />
    </div>
  </div>
</template>
