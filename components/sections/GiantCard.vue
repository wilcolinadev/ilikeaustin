<script>
import { transformImageUrl } from '~/utils'
export default {
  name: 'GiantCard',
  props: {
    title: {
      type: String,
      default: 'Prop Missing', // Corrected the default value
    },
    img: {
      type: String,
      default: 'Prop Missing', // Corrected the default value
    },
    description: {
      type: String,
      default: 'Prop Missing', // Corrected the default value
    },
    link: {
      type: String,
      default: '#', // Corrected the default value
    },
    color: {
      type: String,
      default: 'bg-tertiary', // Corrected the default value
    },
  },
  methods: {
    transformImageUrl,
  },
}
</script>

<template id="GiantCard">
  <div class="grid grid-cols-1 md:grid-cols-5">
    <figure class="col-span-3">
      <img
        class="max-w-[100%] max-h-[440px] max object-cover rounded-tl-[30px] rounded-br-[30px]"
        :src="transformImageUrl(img, 1000, 600)"
      />
    </figure>
    <div class="col-span-2 grid items-center md:ml-[-20%]">
      <div
        class="flex flex-col justify-center items-center rounded-tl-[30px] rounded-br-[30px] py-20 px-5 gap-4"
        :class="color"
      >
        <h2 class="text-3xl">{{ title }}</h2>
        <p class="text-white mb-4">
          {{ description }}
        </p>
        <a :href="link">
          <button
            class="text-primary bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none font-medium rounded-lg text-lg px-4 py-2 text-center"
          >
            Learn more
          </button>
        </a>
      </div>
    </div>
  </div>
</template>
