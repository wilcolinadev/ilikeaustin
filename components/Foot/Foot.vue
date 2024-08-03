<template>
  <div class="flex-grow" />
  <!-- Footer -->
  <footer class="bg-secondary rounded-lg shadow m-4">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-primary text-center block"
        >©2024 For All Austin Visitors with Love ❤️
      </span>
      <ul
        class="flex flex-col md:flex-row flex-wrap items-center mt-3 text-sm font-medium sm:mt-0"
      >
        <ListItem title="Things to do" type="{{ false }}" />
        <ListItem title="Places to Stay" type="{{ false }}" />
        <ListItem title="Where to eat and Drink" type="{{ false }}" />
        <ListItem title="Events" type="{{ false }}" />
        <ListItem title="Contact" type="{{ false }}" />
      </ul>
    </div>
  </footer>
</template>

<script>
import ListItem from '@/components/Navigation/ListItem.vue'
export default {
  name: 'Foot',
  components: {
    ListItem,
  },
}
</script>
