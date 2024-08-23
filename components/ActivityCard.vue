<script>
export default {
  name: 'ActivityCard',

  props: {
    activity: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    backgroundStyle() {
      return {
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${this.activity.pictures?.[0]})`,
        backgroundSize: 'cover', // Ensures the image covers the entire container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      }
    },
  },
}
</script>

<template id="ActivityCard">
  <div
    v-if="activity.bookingLink || activity.pictures?.[0]"
    class="max-w-sm w-full border border-gray-200 rounded-lg shadow min-h-[250px] flex flex-col justify-end"
    :style="backgroundStyle"
  >
    <div class="p-5">
      <div>
        <span
          v-if="activity.description"
          class="mb-3 font-normal text-white line-clamp-3"
        >
          {{
            activity.shortDescription
              ? activity.shortDescription
              : 'Un-categorized activity'
          }}.
        </span>
      </div>
      <a href="#">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-white line-clamp-1"
        >
          {{ activity.name }}
        </h5>
      </a>

      <div class="flex items-center mb-3 gap-2">
        <a
          v-if="activity.bookingLink"
          target="_blank"
          :href="activity.bookingLink"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-secondary hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Visit {{ activity.name }}
        </a>
      </div>
    </div>
  </div>
</template>
