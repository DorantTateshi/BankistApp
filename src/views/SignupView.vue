<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://img.freepik.com/premium-vector/money-bag-icon-outline-vector-dollar-cash-bank-sack-color-flat_96318-95007.jpg"
        alt="Your Company"
      />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Register
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >First Name</label
          >
          <div class="mt-2">
            <input
              id="name"
              name="name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              v-model="name"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Last Name</label
          >
          <div class="mt-2">
            <input
              id="lastname"
              name="lastname"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              v-model="lastname"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Date of birth</label
          >
          <div class="mt-2">
            <input
              id="date"
              name="date"
              type="date"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              v-model="date"
            />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              id="email"
              name="email"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              v-model="email"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              v-model="password"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
              Repeat Password</label
            >
          </div>
          <div class="mt-2">
            <input
              id="repeatpassword"
              name="repeatpassword"
              type="password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              v-model="repeatpassword"
            />
          </div>
        </div>

        <div>
          <button
            type="button"
            class="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="checkSignUp"
          >
            Sign up
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        <a href="/login" class="font-semibold leading-6 text-green-600 hover:text-green-500"
          >Log in</a
        >
      </p>
    </div>
    <SuccesfullNotification
      v-if="successSignup"
      message1="Sign up successfull"
      :funct="successToggler"
    />
    <ErrorNotification
      v-if="errorSignup"
      message1="An error has been occured !"
      message2="Please don't leave empty fields !"
    />
  </div>
</template>

<script setup>
import ErrorNotification from '@/components/ErrorNotification.vue'
import SuccesfullNotification from '@/components/SuccesfullNotification.vue'
import { inject, ref } from 'vue'

let name = ref('')
let lastname = ref('')
let date = ref('')
let password = ref('')
let repeatpassword = ref('')
let email = ref('')
let successSignup = ref(false)
let errorSignup = ref(false)

const users = inject('users')
let loggedIn = inject('isLoggedIn')

console.log(users)
console.log(loggedIn)

function checkSignUp() {
  if (
    name.value === '' ||
    lastname.value === '' ||
    email.value === '' ||
    date.value === '' ||
    password.value === '' ||
    repeatpassword.value === ''
  ) {
    errorSignup.value = true
    return false
  } else {
    if (password.value !== repeatpassword.value) {
      errorSignup.value = true
      return false
    }

    users.push({
      name: name.value,
      lastname: lastname.value,
      dateBirth: date.value.toString(),
      email: email.value,
      password: password.value
    })
    successSignup.value = true
  }
}

function successToggler(changeVal) {
  successSignup.value = changeVal
}
</script>
