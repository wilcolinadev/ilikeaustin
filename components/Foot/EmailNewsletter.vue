<template id="EmailNewsletter">
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 relative">
    <NuxtLink
      to="/events"
      class="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-black bg-white rounded-full"
    >
      <span class="text-xs bg-primary rounded-full text-white px-4 py-1.5 me-3"
        >New</span
      >
      <span class="text-sm font-medium text-balance"
        >There is always something to explore in Austin!</span
      >
      <svg
        class="w-2.5 h-2.5 ms-2 rtl:rotate-180"
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
    </NuxtLink>
    <h1
      class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-primary md:text-5xl lg:text-6xl"
    >
      Austin Information and Events
    </h1>
    <p
      class="mb-8 text-sm font-normal text-primary lg:text-xl lg:px-48 text-balance"
    >
      Sign up for our newsletter, and get access to exclusive content and
      updates right on your Inbox.
    </p>
    <form class="w-full max-w-md mx-auto">
      <label
        for="default-email"
        class="mb-2 text-sm font-medium text-gray-900 sr-only"
        >Email sign-up</label
      >
      <div class="relative">
        <div
          class="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path
              d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
            />
            <path
              d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
            />
          </svg>
        </div>
        <input
          id="default-email"
          type="email"
          class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 border-blue-500"
          placeholder="Enter your email here..."
          required
        />
        <button
          type="submit"
          class="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-tertiary focus:ring-4 focus:outline-none focus:ring-tertiary font-medium rounded-lg text-sm px-4 py-2"
        >
          Sign up
        </button>
      </div>
    </form>
  </div>
</template>
