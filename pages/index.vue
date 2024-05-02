<script>
import HomeHeader from '@/components/Header/HomeHeader.vue'
import SearchInput from '@/components/SearchInput/SearchInput.vue'
import Destinations from '@/components/Destinations/Destinations.vue'
import Chip from '@/components/Chip/Chip.vue'
const chips = ['Default', 'Dark', 'Red', 'Green', 'Yellow', 'Indigo', 'Purple']
export default {
  components: {
    HomeHeader,
    SearchInput,
    Destinations,
    Chip,
  },
  data() {
    return {
      chips: chips,
    }
  },
}
</script>

<template>
  <div class="bg-gradient-to-b from-primary to-secondary">
    <div class="bg-hero-pattern">
      <div
        class="max-w-screen-xl h-screen p-4 leading-none flex flex-col gap-5 mx-auto"
      >
        <div class="text-center">
          <h1 class="text-3xl text-white font-bold">Itravelott.com</h1>
          <h2 class="text-1xl text-white leading-8">
            Top Destinations for your next adventure
          </h2>
        </div>
        <HomeHeader />
        <div class="flex overflow-hidden" data-carousel="slide">
          <div v-for="chip in chips" :key="chip">
            <Chip :chip="chip" />
          </div>
        </div>

        <Carousel />

        <SearchInput />
        <Destinations />
      </div>
    </div>
  </div>
</template>
