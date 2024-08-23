<script setup>
import LevelOne from '../templates/LevelOne.vue'
useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? ` Things to do - ${titleChunk}` : 'Things to do'
  },
})
const descriptions = [
  ` Austin is a city where live music, outdoor adventures, and cultural
        landmarks come together. Whether you're enjoying a live show at a local
        venue, exploring the historic State Capitol, or taking a peaceful paddle
        on Lady Bird Lake, there's always something to discover.`,
  ` Austin is a city where the energy of live music, outdoor adventures, and
        cultural landmarks all come together. Whether you're catching a live
        show at a cozy venue, exploring the State Capitol's historic halls, or
        taking in the city's vibrant street art, there's something for everyone.`,
  ` For those who love the outdoors, Austin's trails, parks, and green
        spaces provide the perfect escape. You can paddle on Lady Bird Lake,
        hike through the city's scenic areas, or simply relax in one of its many
        parks. Austin's laid-back vibe makes it easy to feel at home while still
        discovering something new around every corner.`,
]
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <LevelOne
      title="Things to do"
      img="https://res.cloudinary.com/djf9jqpml/image/upload/v1724288434/Austin/things-to-do.jpg"
      :descriptions="descriptions"
    />
  </div>
</template>
