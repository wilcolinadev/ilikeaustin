<script>
export default {
  name: 'CardStyleOne',
  props: {
    title: {
      type: String,
      default: 'Prop Missing', // Corrected the default value
    },
    img: {
      type: String,
      default: '', // Corrected the default value
    },
    link: {
      type: String,
      default: '#', // Corrected the default value
    },
  },
}
</script>
<template id="CardStyleOne">
  <div class="grid grid-cols-2 border-2 border-white rounded-lg">
    <!-- Image -->
    <figure>
      <img
        class="rounded-lg w-full max-h-[200px] object-cover"
        :src="img"
        alt=" Trending Activities"
      />
    </figure>
    <!-- Image Details -->
    <div class="flex flex-col justify-center items-center gap-2 bg-white">
      <span>{{ title }}</span>
      <a :href="link" class="underline">
        <span>Explore now!</span>
      </a>
    </div>
  </div>
</template>
