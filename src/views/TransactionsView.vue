<script setup>
import TransactionsDisplay from '@/components/TransactionsDisplay.vue'
const transactions = [
  { name: 'food', price: -200, time: '18.02.2024' },
  { name: 'clothing', price: 150, time: '18.02.2024' },
  { name: 'electronics', price: -300, time: '18.02.2024' },
  { name: 'books', price: 250, time: '18.02.2024' },
  { name: 'furniture', price: -180, time: '18.02.2024' },
  { name: 'toys', price: 220, time: '18.02.2024' },
  { name: 'cosmetics', price: -280, time: '18.02.2024' },
  { name: 'jewelry', price: -190, time: '18.02.2024' },
  { name: 'appliances', price: 210, time: '18.02.2024' },
  { name: 'tools', price: 230, time: '5h' },
  { name: 'sporting goods', price: 270, time: '18.02.2024' },
  { name: 'music', price: -240, time: '18.02.2024' },
  { name: 'movies', price: 260, time: '18.02.2024' },
  { name: 'pets', price: -170, time: '18.02.2024' },
  { name: 'plants', price: -290, time: '18.02.2024' }
]
</script>

<template>
  <h1 class="my-2 text-xl">Add transaction</h1>
  <div class="mt-2 mx-80">
    <div class="sm:col-span-3">
      <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
        >Transaction name</label
      >
      <div class="mt-2">
        <input
          type="text"
          name="first-name"
          id="first-name"
          autocomplete="given-name"
          class="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div class="sm:col-span-3">
      <label for="first-name" class="block mt-2 text-sm font-medium leading-6 text-gray-900"
        >Price</label
      >
      <div class="mt-2">
        <input
          type="number"
          name="first-name"
          id="first-name"
          autocomplete="given-name"
          class="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
    <div class="sm:col-span-3">
      <label for="first-name" class="block text-sm mt-2 font-medium leading-6 text-gray-900"
        >Date</label
      >
      <div class="mt-2">
        <input
          type="date"
          name="first-name"
          id="first-name"
          autocomplete="given-name"
          class="block mb-2 w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  </div>
  <div
    class="flex items-center my-4 mr-10 justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"
  >
    <button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button
      type="submit"
      class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
    >
      Save
    </button>
  </div>
  <h1 class="text-2xl my-2">List of transactions</h1>
  <p class="text-sm text-gray-500">
    Here are all the transactions, the new added ones will be showed too.
  </p>
  <TransactionsDisplay class="mt-2" :transactions="transactions" />
</template>
