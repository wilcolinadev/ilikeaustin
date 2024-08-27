<script setup>
import HomeHeader from '@/components/HomeHeader/HomeHeader.vue'
import AustinOverview from '@/components/sections/AustinOverview.vue'
import Highlights from '@/components/sections/Highlights/Highlights.vue'
import GiantCard from '@/components/sections/GiantCard.vue'
useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? ` Home - ${titleChunk}` : 'Home'
  },
})
</script>

<template>
  <div>
    <HomeHeader />
    <div class="max-w-6xl m-auto py-6 px-6 flex flex-col gap-24">
      <AustinOverview />

      <Highlights />
      <GiantCard
        link="/eat-and-drink"
        title="Food & drink"
        color="bg-tree"
        description="Austin's food scene is as casual and unique as the city itself. From food trucks to cozy diners, every meal offers a taste of the city's laid-back and diverse culture, ensuring an authentic Austin experience."
        img="https://res.cloudinary.com/djf9jqpml/image/upload/v1722715864/Austin/krisztian-tabori-ZQf4jzkpz1k-unsplash_xpc7cb.jpg"
      />
      <GiantCard
        link="/places-to-stay"
        color="bg-tertiary"
        title="Places to stay"
        description="Austin offers places to stay that have just as much personality as the city itself. So no matter where you spend the night after a day in the Live Music Capital of the World®, you’re in for an authentic Austin experience."
        img="https://res.cloudinary.com/djf9jqpml/image/upload/v1722716734/Austin/jeremy-doddridge-1jEWc28GxVs-unsplash_qcxaqz.jpg"
      />
      <GiantCard
        link="/events"
        title="Austin Events"
        color="bg-tree"
        description="Austin’s got events that match its lively vibe. Whether it’s a music festival, a local art fair, or a food truck rally, there’s always something cool going on. Dive into the city’s energetic scene and catch some of its unique events."
        img="https://res.cloudinary.com/djf9jqpml/image/upload/v1722717033/Austin/tomek-baginski-2g7CAh4jzeY-unsplash_di1g4x.jpg"
      />
    </div>
  </div>
</template>
