<script setup>
import { ref } from 'vue'
import ListItem from '@/components/Navigation/ListItem.vue'
import HamburgerMenu from '@/components/Navigation/HamburgerMenu.vue'
import ModalBackdrop from '@/components/ModalBackdrop.vue'
import ToolTip from '../ToolTip.vue'
import menu from '@/config/menu.json'
const { data } = await useFetch('/api/weather')

const isHamburgerMenuOpen = ref(false)
const menuItems = ref(menu.mainMenu)
const isToolTipVisible = ref(false)
let toolTipTimeout

function showToolTip() {
  isToolTipVisible.value = true
  clearTimeout(toolTipTimeout)
}

function hideToolTip() {
  toolTipTimeout = setTimeout(() => {
    isToolTipVisible.value = false
  }, 300)
}

function toggleHamburgerMenu() {
  isHamburgerMenuOpen.value = !isHamburgerMenuOpen.value
  const body = document.querySelector('body')
  if (isHamburgerMenuOpen.value) {
    body.classList.add('overflow-hidden')
  } else {
    body.classList.remove('overflow-hidden')
  }
}
</script>
<template id="Navigation">
  <nav
    class="w-full top-0 start-0 z-40 bg-gradient-to-r from-primary to-tertiary animate-gradient-x sticky"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 z-40"
    >
      <NuxtLink to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          class="h-[50px] w-auto"
          src="https://res.cloudinary.com/djf9jqpml/image/upload/v1724380981/Austin/i-like-austin_vlvukg-removebg-preview_tmxosz.png"
        />
      </NuxtLink>
      <div
        class="flex md:order-2 space-x-0 md:space-x-0 rtl:space-x-reverse justify-center items-center"
      >
        <span
          v-if="data"
          to="/activities"
          class="text-white text-xl flex justify-center md:justify-end items-center font-semibold leading-tight italic cursor-pointer"
          @mouseenter="showToolTip"
          @mouseleave="hideToolTip"
        >
          {{ data.current.temp_f }} °F
          <img
            :src="data.current.condition.icon"
            alt="Weather in Austin"
            class="filter brightness-0 w-15 h-15 invert"
          />
          <ToolTip v-if="isToolTipVisible" />
        </span>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white hover:text-primary rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
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
        class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0"
        >
          <ListItem
            v-for="menuItem in menuItems"
            :key="menuItem.title"
            :title="menuItem.title"
            :link="menuItem.link"
          />
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

<style>
@keyframes gradient-x {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 8s ease infinite;
}
</style>
