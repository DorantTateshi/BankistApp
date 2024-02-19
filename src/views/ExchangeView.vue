<script setup>
import ExchangedDisplay from '@/components/ExchangedDisplay.vue'
</script>

<template>
  <div class="my-2 mx-28">
    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">MKD</label>
    <div class="mt-2">
      <input
        type="number"
        name="number"
        id="number"
        class="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="1000 MKD"
      />
    </div>
  </div>
  <ExchangedDisplay />
</template>
