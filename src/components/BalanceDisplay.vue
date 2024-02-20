<script setup>
const props = defineProps(['negative', 'positive'])
</script>

<template>
  <div>
    <h3 class="text-2xl mt-4 font-semibold leading-6">Balance</h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt class="truncate text-sm font-medium text-gray-500">Expenses</dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-red-500">
          {{ props.negative }} MKD
        </dd>
      </div>
      <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt class="truncate text-sm font-medium text-gray-500">Incomes</dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-green-500">
          {{ props.positive }} MKD
        </dd>
      </div>
      <div class="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
        <dt class="truncate text-sm font-medium text-gray-500">Balance</dt>
        <dd class="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
          {{ props.negative + props.positive }} MKD
        </dd>
      </div>
    </dl>
  </div>
</template>
