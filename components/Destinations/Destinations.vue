<template>
  <div class="flex gap-5" data-carousel="slide">
    <figure
      v-for="(item, index) in items"
      :key="index"
      class="flex justify-center flex-col gap-1"
    >
      <img
        :src="item.imageUrl"
        :alt="item.alt"
        class="w-15 h-15 rounded-full"
        :data-tooltip-target="'tooltip-' + index"
      />
      <figurecaption class="w-15 leading-5 text-sm">
        {{ item.caption }}
      </figurecaption>
    </figure>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          imageUrl:
            'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Paris, France',
          caption: 'Paris, France',
        },
        {
          imageUrl:
            'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'New York City, USA',
          caption: 'New York City, USA',
        },
        {
          imageUrl:
            'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Kyoto, Japan',
          caption: 'Kyoto, Japan',
        },
        {
          imageUrl:
            'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          alt: 'Santorini, Greece',
          caption: 'Santorini, Greece',
        },
        // Add more destinations as needed
      ],
    }
  },
}
</script>
