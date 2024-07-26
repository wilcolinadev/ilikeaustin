<template>
  <li>
    <a
      href="#"
      class="block py-2 px-3 bg-transparent rounded"
      aria-current="page"
      :class="colorclass"
    >
      {{ title }}
    </a>
  </li>
</template>

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
  },
  data() {
    return {
      colorclass: this.type ? 'text-primary' : 'text-white',
    }
  },
}
</script>
