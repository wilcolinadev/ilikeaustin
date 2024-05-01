<template id="HomeHeader">
  <header class="flex justify-between items-center">
    <div class="flex justify-center items-center gap-3">
      <figure>
        <img
          class="w-10 h-10 p-1 rounded-full ring-2 ring-secondary"
          src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          alt="Bordered avatar"
        >
      </figure>
      <span> Welcome Traveler! </span>
    </div>
    <div>
      <svg
        class="w-6 h-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M10.83 5a3.001 3.001 0 0 0-5.66 0H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17ZM4 11h9.17a3.001 3.001 0 0 1 5.66 0H20a1 1 0 1 1 0 2h-1.17a3.001 3.001 0 0 1-5.66 0H4a1 1 0 1 1 0-2Zm1.17 6H4a1 1 0 1 0 0 2h1.17a3.001 3.001 0 0 0 5.66 0H20a1 1 0 1 0 0-2h-9.17a3.001 3.001 0 0 0-5.66 0Z"
        />
      </svg>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HomeHeader',
}
</script>
