<template>
  <ul role="list" class="divide-y divide-gray-100">
    <li v-for="card in props.cards" :key="card.number" class="py-4">
      <div class="grid grid-cols-4">
        <div>
          <h3 class="truncate text-sm font-semibold leading-6 text-gray-900">
            {{ card.type }}
          </h3>
        </div>
        <div>
          <h3 class="truncate text-sm leading-6 text-gray-900">
            {{ card.number }}
          </h3>
        </div>
        <div>
          <h5 class="text-lg text-green-600">
            {{ card.expire}}
          </h5>
        </div>

        <div>
          <button
              class="text-red-800 rounded-full bg-red-200 py-2 px-4"
              @click="deleteTransaction(card.number)"
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['cards', 'updateState'])
// const emits = defineEmits(['delete'])

function deleteTransaction(cardNumber) {
  console.log('clicked')
  let updated = props.cards.filter((cards) => {
    return cards.number !== cardNumber
  })
  props.updateState(updated)
}
</script>
