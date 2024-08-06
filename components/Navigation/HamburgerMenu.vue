<template id="HamburgerMenu">
  <div id="navbar-hamburger" class="w-full absolute md:hidden">
    <ul
      class="flex flex-col font-medium bg-gray-50 border-t-2 border-white gap-3"
    >
      <li v-for="item in menu" :key="item.title">
        <a
          :href="item.link"
          class="block py-3 px-3 text-gray-900 hover:bg-gray-100 hover:text-primary"
          aria-current="page"
          >{{ item.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HamburgerMenu',
  components: {},
  props: {
    menu: {
      type: Array,
      default: () => [
        {
          title: 'Home ',
          link: '#',
        },
      ],
    },
  },
}
</script>
