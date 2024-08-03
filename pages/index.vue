<script>
import HomeHeader from '@/components/HomeHeader/HomeHeader.vue'
import AustinOverview from '@/components/sections/AustinOverview.vue'
import Highlights from '@/components/sections/Highlights/Highlights.vue'
import GiantCard from '@/components/sections/GiantCard.vue'
export default {
  components: {
    HomeHeader,
    AustinOverview,
    Highlights,
    GiantCard,
  },
  data() {},
}
</script>

<template>
  <div>
    <HomeHeader />
    <div class="max-w-6xl m-auto py-6 px-6 flex flex-col gap-24">
      <AustinOverview />
      <Highlights />
      <GiantCard
        title="Food & drink"
        description="Life can be sweet. Or a little spicy. And sometimes, there’s french fries in your burrito. Whatever. It’s all good."
        img="https://res.cloudinary.com/djf9jqpml/image/upload/v1722715864/Austin/krisztian-tabori-ZQf4jzkpz1k-unsplash_xpc7cb.jpg"
      />
      <GiantCard
        title="Places to stay"
        description="Austin offers places to stay that have just as much personality as the city itself. So no matter where you spend the night after a day in the Live Music Capital of the World®, you’re in for an authentic Austin experience."
        img="https://res.cloudinary.com/djf9jqpml/image/upload/v1722716734/Austin/jeremy-doddridge-1jEWc28GxVs-unsplash_qcxaqz.jpg"
      />
      <GiantCard
        title="Outdoor activities"
        description="Austin is known for its great outdoors, both within the city limits and in the nearby rural Texas Hill Country. Get out and explore the best things to do outside, from winding hiking and biking trails to cool swimming holes and lakes perfect for paddling."
        img="https://res.cloudinary.com/djf9jqpml/image/upload/v1722717033/Austin/tomek-baginski-2g7CAh4jzeY-unsplash_di1g4x.jpg"
      />
    </div>
  </div>
</template>
