<script>
export default {
  name: 'HighlightTab',

  props: {
    title: {
      type: String,
      default: 'Prop Missing', // Corrected the default value
    },
  },
}
</script>

<template id="HighlightTab">
  <li>
    <a
      href="#"
      class="inline-flex items-center my-1 px-4 py-3 text-primary rounded-lg w-full border-2 border-primary hover:border-tree transition-all"
      aria-current="page"
    >
      <svg
        class="w-4 h-4 me-2 text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
        />
      </svg>
      {{ title }}
    </a>
  </li>
</template>
