<template id="CardStyleOne">
  <div class="grid grid-cols-2 border-2 border-secondary rounded-lg">
    <!-- Image -->
    <figure>
      <img
        class="rounded-lg w-full max-h-[200px] object-cover"
        src="https://res.cloudinary.com/djf9jqpml/image/upload/v1722710021/Austin/jeremy-doddridge-DnHUeDYzpUo-unsplash_z8nxru.jpg"
        alt=" Trending Activities"
      />
    </figure>
    <!-- Image Details -->
    <div class="flex flex-col justify-center items-center gap-2">
      <span>Central Austin</span>
      <span>Explore now!</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardStyleOne',
}
</script>
