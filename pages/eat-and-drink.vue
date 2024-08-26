<script setup>
import ActivityCard from '../components/ActivityCard.vue'
import LevelOne from '../components/sections/LevelOne.vue'
useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? ` Eat and Drink - ${titleChunk}` : 'Eat and Drink'
  },
})
const { data: activities, error } = await useFetch('/api/activities')

const descriptions = [
  `Austin is a culinary haven where foodies can indulge in a diverse array of dining experiences. From renowned barbecue joints and food trucks offering mouthwatering bites to upscale eateries serving innovative dishes, there's something to satisfy every palate. Enjoy vibrant flavors, local ingredients, and a dining scene that's as lively as the city itself.`,

  `In Austin, the food and drink scene is as dynamic and eclectic as the city itself. Whether you're craving a delicious taco from a beloved food truck, a gourmet meal at a trendy restaurant, or a crafted cocktail at a stylish bar, Austin's diverse options promise a memorable culinary adventure. Experience the blend of traditional Texas flavors with modern twists in a city known for its passion for food and drink.`,

  `From casual eats to fine dining, Austin offers a rich tapestry of culinary delights. Explore the bustling food truck parks, savor the best Tex-Mex and barbecue, or discover hidden gems serving international cuisine. With a thriving craft beer scene and innovative cocktail bars, Austin’s food and drink scene ensures that every meal is an adventure.`,
]
</script>

<template>
  <div class="max-w-6xl mx-auto flex flex-col gap-10">
    <LevelOne
      title="Eat and Drink"
      img="https://res.cloudinary.com/djf9jqpml/image/upload/v1724294408/Austin/eat%20and%20drink.jpg"
      :descriptions="descriptions"
    />
    <hr class="h-px my-8 bg-gray-400 border-1" />
    <div class="max-w-6xl m-auto py-6 px-6 flex flex-col gap-10">
      <h3 class="text-3xl font-bold text-black capitalize">
        Explore the best food and drink in Austin
      </h3>
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
  </div>
</template>
