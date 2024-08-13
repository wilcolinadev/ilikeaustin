<script setup>
import HotelCard from '../components/HotelCard.vue'
const { data: hotels } = await useFetch('/api/hotels')
</script>

<template>
  <div class="max-w-6xl m-auto py-6 px-6 flex flex-col gap-10">
    <h1 class="text-3xl font-bold">Places to Stay</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- <ActivityCard
        v-for="item in activities.data"
        :key="item.id"
        :activity="item"
      /> -->
      <HotelCard
        v-for="item in hotels.data.data"
        :key="item.id"
        :hotel="item"
      />
    </div>
  </div>
</template>
