<script setup>
import ActivityCard from '../components/ActivityCard.vue'
const { data: activities, error } = await useFetch('/api/activities')
</script>

<template>
  <div class="max-w-6xl m-auto py-6 px-6 flex flex-col gap-10">
    <h1 class="text-3xl font-bold">Places to Eat and Drink</h1>
    <!-- Display error message if fetching fails -->
    <div v-if="error" class="text-red-500">{{ error.message }}</div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ActivityCard
        v-for="item in activities.data"
        :key="item.id"
        :activity="item"
      />
    </div>
  </div>
</template>
