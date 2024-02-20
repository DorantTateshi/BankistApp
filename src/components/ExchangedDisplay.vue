<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li></li>
    <li v-for="valute in valutes" :key="valute.name" class="flex gap-x-4 py-5 content-center">
      <img
        class="h-12 w-12 flex-none rounded-full bg-gray-50"
        :src="valute.imageUrl"
        alt="Country"
      />
      <div class="min-w-0 grid grid-cols-2 gap-x-96 content-center">
        <div class="col-start-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">{{ valute.name }}</p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ valute.value }}</p>
        </div>
        <div class="col-start-3">
          <p class="text-sm leading-6 text-gray-700">{{ (props.mkd / valute.value).toFixed(2) }}</p>
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
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/2560px-Flag_of_Europe.svg.png',
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
    name: 'CAD',
    imageUrl:
      'https://media.istockphoto.com/id/934017954/vector/canada-flag.jpg?s=612x612&w=0&k=20&c=QYOJlgWtujlAPzncX5H4UFPDpySMhoh2iPc_zi2t_zQ=',
    value: 41.51
  },
  {
    name: 'AUD',
    imageUrl: 'https://seekflag.com/app/uploads/2021/11/flag-of-Australia-02.png',
    value: 37.36
  }
]

const props = defineProps(['mkd'])
</script>
