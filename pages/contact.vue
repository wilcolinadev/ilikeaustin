<template>
  <div class="min-h-screen py-16">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-4xl font-bold text-gray-900 leading-tight">
        Get in touch
      </h1>
      <p class="text-gray-600 font-medium text-md mb-6">
        Let's collaborate and achieve something great! <span>👋</span>
      </p>
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <label
              for="name"
              class="block text-black text-md font-semibold mb-2"
              >Your name</label
            >
            <input
              id="name"
              v-model="form.name"
              type="text"
              class="w-full border border-gray-300 p-4 rounded-lg text-black"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block text-black text-md font-semibold mb-2"
              >Your email</label
            >
            <input
              id="email"
              v-model="form.email"
              type="email"
              class="w-full border border-gray-300 p-4 rounded-lg text-black"
              placeholder="Your Email"
              required
            />
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <label
              for="interest"
              class="block text-black text-md font-semibold mb-2"
              >Area of Interest</label
            >
            <select
              id="interest"
              v-model="form.interest"
              class="w-full border border-gray-300 p-4 rounded-lg"
            >
              <option>Live Music Events</option>
              <option>Food & Drink Experiences</option>
              <option>Outdoor Activities</option>
              <option>Local Attractions</option>
              <option>Cultural Tours</option>
              <option>Austin Nightlife</option>
              <option>Historical Sites</option>
              <option>Shopping Hotspots</option>
              <option>Family-Friendly Activities</option>
              <option>Festivals & Celebrations</option>

              <option>Other</option>
            </select>
          </div>
          <div>
            <label
              for="budget"
              class="block text-black text-md font-semibold mb-2"
              >Collaboration Objective</label
            >
            <select
              id="budget"
              v-model="form.budget"
              class="w-full border border-gray-300 p-4 rounded-lg text-black"
            >
              <option>Select your Goal</option>
              <option>Write about Austin</option>
              <option>Include your Business in here</option>
              <option>Collaborate with us</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <div class="mb-6">
          <label
            for="message"
            class="block text-black text-md font-semibold mb-2"
            >Message</label
          >
          <textarea
            id="message"
            v-model="form.message"
            class="w-full border border-gray-300 p-4 rounded-lg text-black"
            rows="5"
            placeholder="Let us know your project about"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-primary text-white p-4 rounded-lg font-semibold hover:bg-tree transition"
        >
          Just Send <span class="ml-2">↗</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? ` Contact - ${titleChunk}` : 'Contact'
  },
})
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        interest: '',
        budget: '',
        message: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      console.log('Form submitted', this.form)
      // Add your form submission logic here
    },
  },
}
</script>
