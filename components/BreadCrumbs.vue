<!-- Breadcrumb.vue -->
<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol
      class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
    >
      <li
        v-for="(item, index) in breadcrumbs"
        :key="index"
        class="inline-flex items-center"
      >
        <NuxtLink
          v-if="item.href"
          :to="item.href"
          class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-tree"
        >
          {{ item.text }}
        </NuxtLink>
        <span v-else class="text-sm font-medium text-gray-500">
          {{ item.text }}
        </span>
        <svg
          v-if="index < breadcrumbs.length - 1"
          class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </li>
    </ol>
  </nav>
</template>

<script setup>
defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
})
</script>
