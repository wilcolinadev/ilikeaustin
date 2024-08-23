<script>
export default {
  name: 'ListItem',
  props: {
    title: {
      type: String,
      default: 'Prop Missing', // Corrected the default value
    },
    type: {
      type: Boolean,
      default: false,
    },
    link: {
      type: String,
      default: '#', // Corrected the default value
    },
  },
  data() {
    return {
      colorclass: this.type
        ? 'text-primary hover:text-tertiary'
        : 'text-white hover:text-secondary',
    }
  },
}
</script>

<template>
  <li
    class="flex flex-col md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 hover:scale-110 transform transition-all duration-300"
  >
    <NuxtLink
      :to="link"
      class="block py-2 px-3 bg-transparent rounded"
      aria-current="page"
      :class="colorclass"
    >
      {{ title }}
    </NuxtLink>
  </li>
</template>
