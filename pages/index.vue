<script>
import HomeHeader from '@/components/Header/HomeHeader.vue'
import SearchInput from '@/components/SearchInput/SearchInput.vue'
import Destinations from '@/components/Destinations/Destinations.vue'
export default {
  components: {
    HomeHeader,
    SearchInput,
    Destinations,
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

        <SearchInput />
        <Destinations />
      </div>
    </div>
  </div>
</template>
