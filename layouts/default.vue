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
