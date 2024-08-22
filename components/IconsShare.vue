<script>
export default {
  data() {
    return {
      currentUrl: '',
    }
  },
  mounted() {
    this.currentUrl = window.location.href
  },
}
</script>

<template id="IconsShare">
  <div class="text-primary text-sm flex items-center gap-3">
    <!-- Email Share -->
    <a
      :href="`mailto:?subject=Check%20this%20out&body=Here%20is%20something%20interesting:%20${encodeURIComponent(currentUrl)}`"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-8 h-8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>
    </a>

    <!-- Facebook Share -->
    <a
      :href="`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        class="w-8 h-8"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fill-rule="evenodd"
          d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
          clip-rule="evenodd"
        />
      </svg>
    </a>

    <!-- X (Twitter) Share -->
    <a
      :href="`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check%20this%20out!`"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        class="w-8 h-8"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"
        />
      </svg>
    </a>

    <span class="text-lg"> Share </span>
  </div>
</template>
