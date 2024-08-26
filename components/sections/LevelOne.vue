<script setup>
import { defineProps } from 'vue'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import IconsShare from '@/components/IconsShare.vue'
import { transformImageUrl } from '@/utils'

defineProps({
  title: {
    type: String,
    default: 'Prop Missing',
  },
  img: {
    type: String,
    default: 'Prop Missing',
  },
  descriptions: {
    type: Array,
  },
})
</script>
<template id="LevelOne">
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn md:mt-[10vh]"
  >
    <figure>
      <img
        class="w-full sm:rounded object-cover h-[200px] md:h-full md:max-w-md"
        :src="transformImageUrl(img, 700, 1000)"
        :alt="title"
      />
    </figure>
    <div class="flex flex-col gap-4 py-6 px-6 md:p-0">
      <BreadCrumbs
        :breadcrumbs="[
          { text: 'Home', href: '#' },
          { text: `${title}`, href: '#' },
        ]"
      />
      <h1
        class="font-extrabold tracking-tight text-black text-4xl leading-relaxed text-balance"
      >
        {{ title }} in
        <span
          class="underline underline-offset-3 decoration-8 decoration-secondary"
        >
          Austin, Texas
        </span>
      </h1>

      <IconsShare />

      <p
        v-for="description in descriptions"
        :key="description.id"
        class="text-gray-600 font-medium text-md"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>
