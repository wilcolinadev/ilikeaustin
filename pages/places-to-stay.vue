<script setup>
import HotelCard from '../components/HotelCard.vue'

// Fetching the data using useFetch, which returns data, error, and pending
const { data: hotels, error, status } = await useFetch('/api/hotels')
</script>

<template>
  <div class="max-w-6xl m-auto py-6 px-6 flex flex-col gap-10">
    <h1 class="text-3xl font-bold">Places to Stay</h1>
    <p v-if="status === 'pending'" class="text-xl">Loading hotels</p>
    <!-- Display error message if fetching fails -->
    <div v-if="error" class="text-red-500">{{ error.message }}</div>

    <!-- Display hotels if data is loaded successfully -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <HotelCard v-for="item in hotels" :key="item.id" :hotel="item" />
    </div>
  </div>
</template>
