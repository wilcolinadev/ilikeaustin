<template>
  <li>
    <a
      href="#"
      class="block py-2 px-3 text-blue-700 bg-transparent rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
      aria-current="page"
    >
      {{ title }}
    </a>
  </li>
</template>

<script>

export default {
  name: 'ListItem', // Corrected the option to 'name'
  props: {
    title: {
      type: String,
      default: 'Hello', // Corrected the default value
    },
  },
}
</script>
