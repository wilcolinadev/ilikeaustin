<script setup>
import HotelCard from '../components/HotelCard.vue'
import LevelOne from '../components/sections/LevelOne.vue'

useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? ` Places to Stay - ${titleChunk}` : 'Places to Stay'
  },
})

const descriptions = [
  `Austin offers a range of accommodations to suit every traveler’s needs, from chic downtown hotels to cozy boutique inns. Whether you’re looking for a place with a vibrant atmosphere or a quiet retreat, Austin has the perfect spot for you.`,
  `Experience the charm of Austin with a stay in one of its historic hotels. These unique properties blend classic elegance with modern amenities, providing a memorable and comfortable stay while immersing you in the city’s rich history.`,
  `For those who prefer a more contemporary experience, Austin’s stylish condos and modern hotels offer sleek designs and top-notch facilities. These options are perfect for enjoying the city's dynamic vibe while having easy access to its many attractions.`,
  `If you’re seeking a home-away-from-home experience, Austin has a variety of vacation rentals and charming bed and breakfasts. These accommodations offer a personalized touch and are great for families, groups, or couples looking for a cozy, welcoming environment.`,
]

// Fetching the data using useFetch, which returns data, error, and pending
const { data: hotels, error, status } = await useFetch('/api/hotels')
</script>

<template>
  <div class="max-w-6xl m-auto">
    <LevelOne
      title="Places to Stay"
      img="https://res.cloudinary.com/djf9jqpml/image/upload/v1724293445/Austin/places-to-stay.jpg"
      :descriptions="descriptions"
    />
    <div class="py-6 px-6 flex flex-col gap-10">
      <hr class="h-px my-8 bg-gray-400 border-1" />
      <h3 class="text-3xl font-bold text-black capitalize">
        Explore the best places to stay in Austin
      </h3>
      <p v-if="status === 'pending'" class="text-xl">Loading hotels...</p>
      <div v-if="error" class="text-red-500">{{ error.message }}</div>

      <div
        v-else-if="hotels && hotels.data && hotels.data.data"
        class="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <HotelCard
          v-for="item in hotels.data.data"
          :key="item.name"
          :hotel="item"
        />
      </div>
    </div>
  </div>
</template>
