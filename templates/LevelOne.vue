<template id="LevelOne">
  <box>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
      <figure>
        <img
          class="max-w-md w-full rounded"
          :src="transformImageUrl(img, 700, 1000)"
          :alt="title"
        />
      </figure>
      <div class="flex flex-col gap-4">
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
  </box>
</template>

<script setup>
import { defineProps } from 'vue'
import IconsShare from '~/components/IconsShare.vue'
import BreadCrumbs from '~/components/BreadCrumbs.vue'
import { transformImageUrl } from '~/utils'
import box from '~/layouts/box.vue'
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
