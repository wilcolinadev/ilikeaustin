<script>
import ImagePlaceholder from '@/components/ImagePlaceholder.vue'
import dayjs from 'dayjs'
export default {
  name: 'EventsCard',
  components: {
    ImagePlaceholder,
  },
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    formatDate(date) {
      return dayjs(date).format('DD MMM YYYY')
    },
  },
}
</script>

<template>
  <div class="max-w-sm w-full border border-gray-200 rounded-lg shadow">
    <figure class="overflow-hidden w-full">
      <img
        v-if="event.images?.[0].url"
        class="rounded-t-lg w-full h-64 object-cover"
        :src="event.images?.[0].url"
        :alt="event.name"
      />
      <ImagePlaceholder v-else />
    </figure>

    <div class="p-5">
      <span
        v-if="event.priceRanges"
        class="text-tertiary line-clamp-3 mb-2 font-semibold"
      >
        Prices starts from ${{ event.priceRanges[0].min.toFixed(0) }}
      </span>
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1"
        >
          {{ event.name }}
        </h5>
      </a>
      <div class="flex flex-col gap-3">
        <div v-if="event._embedded.venues[0].name">
          <span class="text-md text-gray-700 font-medium">Location:</span>
          <span class="font-normal text-gray-700 line-clamp-3">
            {{ event._embedded.venues[0].name }}
          </span>
        </div>
        <div>
          <span class="mb-3 text-md text-gray-700 font-medium">Date:</span>
          <span class="mb-3 font-normal text-gray-700 line-clamp-3">
            {{ formatDate(event.dates.start.dateTime) }}
          </span>
        </div>
      </div>
      <div class="flex items-center mb-3 gap-2">
        <a
          v-if="event.url"
          target="_blank"
          :href="event.url"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Get Tickets for {{ event.name }}
        </a>
      </div>
    </div>
  </div>
</template>
