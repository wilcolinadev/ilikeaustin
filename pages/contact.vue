<template>
  <div class="min-h-screen py-16">
    <div class="max-w-4xl mx-auto px-6">
      <h1 class="text-4xl font-bold text-gray-900 leading-tight">
        Get in touch
      </h1>
      <p class="text-gray-600 font-medium text-md mb-6">
        Let's collaborate and achieve something great! <span>👋</span>
      </p>
      <form>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <label
              for="name"
              class="block text-black text-md font-semibold mb-2"
              >Your name</label
            >
            <input
              id="name"
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
              name="category"
              class="w-full border border-gray-300 p-4 rounded-lg text-black"
            >
              <option value="">Select an option</option>
              <option value="Live Music Events">Live Music Events</option>
              <option value="Food & Drink Experiences">
                Food & Drink Experiences
              </option>
              <option value="Outdoor Activities">Outdoor Activities</option>
              <option value="Local Attractions">Local Attractions</option>
              <option value="Cultural Tours">Cultural Tours</option>
              <option value="Austin Nightlife">Austin Nightlife</option>
              <option value="Historical Sites">Historical Sites</option>
              <option value="Shopping Hotspots">Shopping Hotspots</option>
              <option value="Family-Friendly Activities">
                Family-Friendly Activities
              </option>
              <option value="Festivals & Celebrations">
                Festivals & Celebrations
              </option>
              <option value="Other">Other</option>
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
              name="purpose"
              class="w-full border border-gray-300 p-4 rounded-lg text-black"
            >
              <option value="">Select an option</option>
              <option value="Write about Austin">Write about Austin</option>
              <option value="Include your Business in here">
                Include your Business in here
              </option>
              <option value="Collaborate with us">Collaborate with us</option>
              <option value="Other">Other</option>
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

<script setup>
useHead({
  titleTemplate: titleChunk => {
    return titleChunk ? ` Contact - ${titleChunk}` : 'Contact'
  },
})
</script>
