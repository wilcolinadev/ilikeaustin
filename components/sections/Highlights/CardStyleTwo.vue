<script>
export default {
  name: 'CardStyleTwo',
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
<template id="CardStyleTwo">
  <div
    class="min-h-[300px] flex flex-col justify-end col-span-1 bg-cover bg-center bg-no-repeat rounded-lg"
    :style="{ backgroundImage: `url(${img})` }"
  >
    <div
      class="bg-white bg-opacity-80 rounded-full p-3 text-black m-2 flex flex-col justify-center items-center"
    >
      <span class="block text-sm">{{ title }}</span>
      <a href="{{ link }}" class="underline">
        <span class="block text-xs text-primary">Explore now!</span>
      </a>
    </div>
  </div>
</template>
