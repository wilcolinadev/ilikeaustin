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
      const width = 300
      const height = 300
      return url
        ? url.replace('{width}', width).replace('{height}', height)
        : ''
    },
  },
}
</script>

<template id="HotelCard">
  <ClientOnly>
    <a
      class="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
    >
      <img
        v-if="hotel.cardPhotos?.[0]?.sizes?.urlTemplate"
        class="object-cover w-full rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-s-lg"
        :src="formatImageUrl(hotel.cardPhotos?.[0].sizes.urlTemplate)"
        alt=""
      />
      <div class="md:flex flex-col md:justify-between p-4 leading-normal">
        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {{ hotel.title || 'No Title Available' }}
        </h5>
        <p class="mb-3 text-gray-500 dark:text-gray-400">
          {{ hotel.secondaryInfo || 'No Information Available' }}
        </p>
        <span class="text-3xl font-bold text-gray-900">
          From {{ hotel.priceForDisplay || 'N/A' }}
        </span>
        <StarRating :rating="hotel.bubbleRating?.rating || 0" />
        <div class="flex items-center mb-3 mt-2 gap-2">
          <a
            v-if="hotel.commerceInfo?.externalUrl"
            target="_blank"
            :href="hotel.commerceInfo.externalUrl"
            class="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-tertiary rounded-lg hover:bg-secondary hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Book Now!
          </a>
        </div>
      </div>
    </a>
  </ClientOnly>
</template>
