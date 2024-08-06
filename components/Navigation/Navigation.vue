<template id="Navigation">
  <nav class="bg-primary w-full top-0 start-0 z-40 relative">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-40"
    >
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >Austin TX</span
        >
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button
          type="button"
          class="text-primary bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
        >
          Plan your visit
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:text-primary rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          @click="toggleHamburgerMenu"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        id="navbar-sticky"
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <ListItem title="Things to do" />
          <ListItem title="Places to Stay" />
          <ListItem title="Where to eat and Drink" />
          <ListItem title="Events" />
        </ul>
      </div>
    </div>
    <HamburgerMenu
      v-if="isHamburgerMenuOpen"
      :menu="sampleMenu"
      @close="toggleHamburgerMenu"
    />
  </nav>
  <ModalBackdrop v-if="isHamburgerMenuOpen" @close="toggleHamburgerMenu" />
</template>

<script>
import ListItem from '@/components/Navigation/ListItem.vue'
import HamburgerMenu from '@/components/Navigation/HamburgerMenu.vue'
import ModalBackdrop from '@/components/ModalBackdrop.vue'
const sampleMenu = [
  {
    title: 'Home ',
    link: '#',
  },
  {
    title: 'Things to do ',
    link: '#',
  },
  {
    title: 'Places to stay ',
    link: '#',
  },
  {
    title: 'Where to eat and drink ',
    link: '#',
  },
  {
    title: 'Events ',
    link: '#',
  },
  {
    title: 'Contact ',
    link: '#',
  },
]
export default {
  name: 'Navigation',
  components: {
    ListItem,
    HamburgerMenu,
    ModalBackdrop,
  },
  data() {
    return {
      isHamburgerMenuOpen: false,
      sampleMenu,
    }
  },
  methods: {
    toggleHamburgerMenu() {
      this.isHamburgerMenuOpen = !this.isHamburgerMenuOpen
      const body = document.querySelector('body')
      if (this.isHamburgerMenuOpen) {
        body.classList.add('overflow-hidden')
      } else {
        body.classList.remove('overflow-hidden')
      }
    },
  },
}
</script>
