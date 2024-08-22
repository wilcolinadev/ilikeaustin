<script>
export default {
  name: 'GlobalHeader',
  props: {
    title: {
      type: String,
      default: 'Prop Missing',
    },
  },
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold">{{ title }}</h1>
  </div>
</template>
