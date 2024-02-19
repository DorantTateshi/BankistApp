<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="transaction in props.transactions" :key="transaction.name" class="py-4">
      <div class="grid grid-cols-4">
        <div>
          <h3 class="truncate text-sm font-semibold leading-6 text-gray-900">
            {{ transaction.name }}
          </h3>
        </div>
        <div>
          <h5 v-if="transaction.price > 0" class="text-lg text-green-600">
            {{ transaction.price }} $
          </h5>
          <h5 v-else class="text-lg text-red-600">{{ transaction.price }} $</h5>
        </div>
        <div>
          <time :datetime="transaction.time" class="flex-none text-xs text-gray-500">{{
            transaction.time
          }}</time>
        </div>
        <div>
          <button class="text-red-800 rounded-full bg-red-200 py-2 px-4">Delete</button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['transactions'])
</script>
