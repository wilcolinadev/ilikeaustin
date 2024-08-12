<script>
import ImagePlaceholder from '@/components/ImagePlaceholder.vue'
export default {
  name: 'ActivityCard',
  components: {
    ImagePlaceholder,
  },
  props: {
    activity: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<template id="ActivityCard">
  <div
    v-if="activity.bookingLink"
    class="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow"
  >
    <figure class="overflow-hidden w-full">
      <img
        v-if="activity.pictures?.[0]"
        class="rounded-t-lg w-full h-64 object-cover"
        :src="activity.pictures?.[0]"
        :alt="activity.name"
      />
      <ImagePlaceholder v-else />
    </figure>

    <div class="p-5">
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1"
        >
          {{ activity.name }}
        </h5>
      </a>
      <span class="inline-block mb-3 text-sm font-normal text-gray-700"
        >Category</span
      >
      <p
        v-if="activity.description"
        class="mb-3 font-normal text-gray-700 line-clamp-3"
      >
        {{
          activity.shortDescription
            ? activity.shortDescription
            : 'Un-categorized activity'
        }}.
      </p>

      <div class="flex items-center mb-3 gap-2">
        <a
          v-if="activity.bookingLink"
          target="_blank"
          :href="activity.bookingLink"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-tertiary rounded-lg hover:bg-secondary hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Reserve a visit
        </a>
      </div>
    </div>
  </div>
</template>
