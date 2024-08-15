<script>
import ListItem from '@/components/Navigation/ListItem.vue'
import menu from '@/config/menu.json'
import EmailNewsletter from './EmailNewsletter.vue'

export default {
  name: 'Foot',
  components: {
    ListItem,
    EmailNewsletter,
  },

  data() {
    return {
      menu: menu.mainMenu,
    }
  },
}
</script>
<template>
  <!-- Footer -->
  <footer class="bg-secondary rounded-lg shadow m-4">
    <EmailNewsletter />
    <div
      class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between border-t-2 border-white"
    >
      <span class="text-sm text-primary text-center block font-medium">
        ©2024 For All Austin Visitors with Love ❤️
      </span>
      <ul
        class="flex flex-col md:flex-row flex-wrap items-center mt-3 text-sm font-medium sm:mt-0"
      >
        <ListItem
          v-for="menuItem in menu"
          :key="menuItem.title"
          :title="menuItem.title"
          :type="true"
          :link="menuItem.link"
        />
      </ul>
    </div>
  </footer>
</template>
