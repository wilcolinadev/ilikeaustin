<template>
  <div>
    <Navigation />
    <div class="flex flex-col min-h-screen">
      <slot />
    </div>

    <Foot />
  </div>
</template>

<script>
import Foot from '@/components/Foot/Foot.vue'

export default {
  name: 'DefaultLayout',
  components: {
    Foot,
  },
  head() {
    return {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-6E6NCQJ8Z3',
          async: true,
        },
      ],
    }
  },
  mounted() {
    window.dataLayer = window.dataLayer || []
    function gtag(...args) {
      dataLayer.push(...args)
    }
    gtag('js', new Date())
    gtag('config', 'G-6E6NCQJ8Z3')
  },
}
</script>

<style>
/* Component styles */
p {
  color: #000;
}

h1 {
  color: #000;
}
</style>
