<template>
  <div class="flex-grow" />
  <!-- Footer -->
  <footer class="bg-secondary rounded-lg shadow m-4">
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"
    >
      <span class="text-sm text-gray-500 sm:text-center"
        >©2024 For All Austin Visitors with Love ❤️
      </span>
      <ul
        class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0"
      >
        <ListItem title="Things to do" />
        <ListItem title="Places to Stay" />
        <ListItem title="Where to eat and Drink" />
        <ListItem title="Events" />
        <ListItem title="Contact" />
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
