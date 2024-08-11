<script setup>
import ActivityCard from '../components/ActivityCard.vue'
const { data: activities } = await useFetch('/api/activities')
</script>

<template>
  <div class="max-w-6xl m-auto py-6 px-6 flex flex-col gap-10">
    <h1 class="text-3xl font-bold">Popular Activities in Austin</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ActivityCard
        v-for="item in activities.data"
        :key="item.id"
        :activity="item"
      />
    </div>
  </div>
</template>
