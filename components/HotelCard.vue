<script>
import StarRating from '@/components/StarRating.vue'
export default {
  name: 'HotelCard',
  components: {
    StarRating,
  },
  props: {
    hotel: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    formatImageUrl(url) {
      //https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/e8/4e/63/exterior.jpg?w={width}&h={height}&s=1
      const width = 300
      const height = 300
      return url.replace('{width}', width).replace('{height}', height)
    },
  },
}
</script>

<template id="HotelCard">
  <a
    href="#"
    class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
  >
    <img
      v-if="hotel.cardPhotos?.[0].sizes.urlTemplate"
      class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
      :src="formatImageUrl(hotel.cardPhotos?.[0].sizes.urlTemplate)"
      alt=""
    />
    <div class="flex flex-col justify-between p-4 leading-normal">
      <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
        {{ hotel.title }}
      </h5>
      <p class="mb-3 text-gray-500 dark:text-gray-400">
        {{ hotel.secondaryInfo }}
      </p>
      <span class="text-3xl font-bold text-gray-900 dark:text-white">{{
        hotel.priceForDisplay
      }}</span>
      <StarRating :rating="hotel.bubbleRating?.rating" />
      <div class="flex items-center mb-3 mt-2 gap-2">
        <a
          target="_blank"
          :href="hotel.commerceInfo?.externalUrl"
          class="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-tertiary rounded-lg hover:bg-secondary hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Learn more
        </a>
      </div>
    </div>
  </a>
</template>
