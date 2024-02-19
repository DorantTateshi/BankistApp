<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="valute in valutes" :key="valute.name" class="flex gap-x-4 py-5">
      <img
        class="h-12 w-12 flex-none rounded-full bg-gray-50"
        :src="valute.imageUrl"
        alt="Country"
      />
      <div class="min-w-0 grid grid-cols-2 gap-x-4">
        <div class="col-start-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">{{ valute.name }}</p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ valute.value }}</p>
        </div>
        <div class="col-end-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">{{ valute.name }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
const valutes = [
  {
    name: 'EUR',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/255px-Flag_of_Europe.svg.png',
    value: 61.52
  },
  {
    name: 'USD',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg/1200px-Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg.png',
    value: 55.25
  },
  {
    name: 'CHF',
    imageUrl: 'https://cdn.britannica.com/43/4543-004-C0D5C6F4/Flag-Switzerland.jpg',
    value: 64.22
  },
  {
    name: 'GBP',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png',
    value: 78.32
  },
  {
    name: 'SEK',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1200px-Flag_of_Sweden.svg.png',
    value: 5.48
  },
  {
    name: 'AUD',
    imageUrl: 'https://seekflag.com/app/uploads/2021/11/flag-of-Australia-02.png',
    value: 37.36
  }
]
</script>
