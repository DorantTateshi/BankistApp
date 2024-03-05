<script setup>
import BalanceDisplay from '@/components/BalanceDisplay.vue'
import ErrorNotification from '@/components/ErrorNotification.vue'
import SuccesfullNotification from '@/components/SuccesfullNotification.vue'
import TransactionsDisplay from '@/components/TransactionsDisplay.vue'
import { ref, watchEffect } from 'vue'
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
  { name: 'tools', price: 230, time: '12.02.2024' },
  { name: 'sporting goods', price: 270, time: '18.02.2024' },
  { name: 'music', price: -240, time: '18.02.2024' },
  { name: 'movies', price: 260, time: '18.02.2024' },
  { name: 'pets', price: -170, time: '18.02.2024' },
  { name: 'plants', price: -290, time: '18.02.2024' }
]

const transactionsState = ref(transactions)

let transactionName = ref(null)
let trnasctionPrice = ref(null)
let transactionDate = ref(null)
let postSuccess = ref(false)
let postError = ref(false)
let positiveSum = ref(0)
let negativeSum = ref(0)

function successToggler(changeVal) {
  postSuccess.value = changeVal
}
// eslint-disable-next-line no-unused-vars
const emits = defineEmits(['delete'])

function checkTransaction(transactionName, trnasctionPrice, transactionDate) {
  if (
    transactionName.value === null ||
    transactionDate.value === null ||
    trnasctionPrice.value === null
  ) {
    console.log('errror while trying to add a transaction')
    postError.value = true
  } else {
    const newTransaction = {
      name: transactionName,
      price: parseFloat(trnasctionPrice),
      time: transactionDate
    }
    transactionsState.value = [...transactionsState.value, newTransaction]
    console.log('transaction addedd succesfully')
    console.log(transactionsState.value)
    postSuccess.value = true
    postError.value = false
  }
}

function countNegative(transactionsState) {
  let result = 0
  transactionsState.map((transaction) => {
    if (transaction.price < 0) {
      result += transaction.price
    }
  })
  return result
}

function countPositive(transactionsState) {
  let result = 0
  transactionsState.map((transaction) => {
    if (transaction.price > 0) {
      result += transaction.price
    }
  })
  return result
}

function defaultValues() {
  transactionName.value = ''
  transactionDate.value = ''
  trnasctionPrice.value = 0
}

function handleDelete(updatedTransactions) {
  transactionsState.value = updatedTransactions
}

// watch(() => {
//   console.log(transactionName)
//   console.log(transactionDate)
//   console.log(trnasctionPrice)
// })

watchEffect(() => {
  console.log('transactionName:', transactionName.value)
  console.log('trnasctionPrice:', trnasctionPrice.value)
  console.log('transactionDate:', transactionDate.value)
  negativeSum.value = countNegative(transactionsState.value)
  positiveSum.value = countPositive(transactionsState.value)
})
</script>

<template>
  <BalanceDisplay :negative="negativeSum" :positive="positiveSum" />
  <h1 class="my-2 text-2xl">Add transaction</h1>
  <div class="mt-2 mx-80">
    <div class="sm:col-span-3">
      <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900"
        >Transaction name</label
      >
      <div class="mt-2">
        <input
          v-model="transactionName"
          type="text"
          name="first-name"
          id="first-name"
          autocomplete="given-name"
          class="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          @input="transactionName = $event.target.value"
          placeholder="Name"
        />
      </div>
    </div>
    <div class="sm:col-span-3">
      <label for="first-name" class="block mt-2 text-sm font-medium leading-6 text-gray-900"
        >Price</label
      >
      <div class="mt-2">
        <input
          v-model="trnasctionPrice"
          type="number"
          name="first-name"
          id="first-name"
          autocomplete="given-name"
          class="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          @input="trnasctionPrice = $event.target.value"
          placeholder="200 MKD"
        />
      </div>
    </div>
    <div class="sm:col-span-3">
      <label for="first-name" class="block text-sm mt-2 font-medium leading-6 text-gray-900"
        >Date</label
      >
      <div class="mt-2">
        <input
          v-model="transactionDate"
          type="date"
          name="first-name"
          id="first-name"
          autocomplete="given-name"
          class="block mb-2 w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          @input="transactionDate = $event.target.value"
        />
      </div>
    </div>
  </div>
  <div
    class="flex items-center my-4 mr-10 justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8"
  >
    <button
      @click="defaultValues"
      type="button"
      class="text-sm font-semibold leading-6 text-gray-900"
    >
      Cancel
    </button>
    <button
      type="submit"
      class="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      @click="checkTransaction(transactionName, trnasctionPrice, transactionDate)"
    >
      Save
    </button>
  </div>
  <SuccesfullNotification
    v-if="postSuccess"
    message1="Transaction has been saved successfully !"
    :funct="successToggler"
  />
  <ErrorNotification
    v-if="postError"
    message1="Error while posting the transaction !"
    message2="Please don't leave empty fields!"
  />
  <h1 class="text-2xl my-2">List of transactions</h1>
  <p class="text-sm text-gray-500">
    Here are all the transactions, the new added ones will be showed too.
  </p>
  <TransactionsDisplay class="mt-2" :transactions="transactionsState" :updateState="handleDelete" />
</template>
