<script setup>
import LevelOne from '../templates/LevelOne.vue'
import EventsCard from '~/components/EventsCard.vue'
useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? ` Events - ${titleChunk}` : 'Events'
  },
})
const { data: events, error } = await useFetch('/api/events')
const descriptions = [
  `Austin's vibrant music scene is alive and well, with upcoming events at iconic venues like ACL Live at The Moody Theater, Stubb's Waller Creek Amphitheater, and the Continental Club. These spots are at the heart of the city's cultural landscape, offering live performances that showcase both local talent and internationally renowned artists. Whether you're a music lover or just looking to experience Austin's energy, these venues provide the perfect setting for unforgettable nights.`,

  `This season, Austin offers a blend of cultural and outdoor activities that cater to every interest. You can explore the historic State Capitol, take in the city's vibrant street art, or enjoy a peaceful paddle on Lady Bird Lake. With events like the annual Austin Parks Foundation's It’s My Park Day and outdoor movie nights at Zilker Park, there's no shortage of ways to experience the best of what Austin has to offer. Whether you're in town for a weekend or a longtime resident, there's always something new to discover.`,

  `Austin's outdoor spaces are perfect for those looking to connect with nature while enjoying the city's unique vibe. Upcoming events like guided hikes through the Barton Creek Greenbelt or yoga sessions in one of Austin's many parks offer a chance to unwind and explore. For a more leisurely experience, you can relax by Lady Bird Lake or take a stroll through Zilker Botanical Garden. These activities highlight Austin's commitment to preserving its natural beauty while providing residents and visitors with a variety of ways to enjoy the outdoors.`,
]
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <LevelOne
      title="Upcoming Events"
      img="https://res.cloudinary.com/djf9jqpml/image/upload/v1724444980/Austin/events-austin.jpg"
      :descriptions="descriptions"
    />
    <hr class="h-px my-8 bg-gray-400 border-1" />
    <div class="max-w-6xl m-auto py-6 px-6 flex flex-col gap-10">
      <h3 class="text-3xl font-bold text-black capitalize">
        Explore the latest events in Austin
      </h3>
      <!-- Display error message if fetching fails -->
      <div v-if="error" class="text-red-500">{{ error.message }}</div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <EventsCard
          v-for="item in events._embedded.events"
          :key="item.id"
          :event="item"
        />
      </div>
    </div>
  </div>
</template>
