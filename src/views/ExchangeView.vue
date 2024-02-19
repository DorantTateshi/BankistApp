<script setup>
import ExchangedDisplay from '@/components/ExchangedDisplay.vue'
</script>

<template>
  <div class="inline-flex my-4 mx-28">
    <img
      class="h-12 w-12 flex-none rounded-full bg-gray-50 m-2"
      src="https://cdn.britannica.com/08/6208-050-930F76BA/Flag-North-Macedonia.jpg"
      alt="Country"
    />
    <label for="email" class="text-sm font-semibold leading-6 text-gray-900 align-middle mt-4"
      >MKD</label
    >
    <div class="mt-2">
      <input
        type="number"
        name="number"
        id="number"
        class="block w-96 mx-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="1000 MKD"
      />
    </div>
  </div>
  <ExchangedDisplay />
</template>
