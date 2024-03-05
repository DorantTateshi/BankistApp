<script setup>
import ErrorNotification from '@/components/ErrorNotification.vue'
import { ref, watchEffect, inject } from 'vue'
// import { useStore } from 'vuex'
import { store } from '@/main'
// import { useRoute } from 'vue-router'
import router from '@/router'

let email = ref('')
let password = ref('')
let loginError = ref(false)
let users = inject('users')

// let route = useRoute()

function checkLogin() {
  let is = false
  users.map((user) => {
    if (user.email === email.value && user.password === password.value) {
      is = true
      store.commit('setLoggedIn', true)
      store.commit('setUser', {
        name: user.name,
        lastname: user.lastname,
        dateBirth: user.dateBirth,
        email: user.email,
        password: user.password
      })
      router.push('/')
    }
  })
  console.log(is)
  return false
}

watchEffect(() => {
  // console.log(email.value)
  // console.log(password.value)
  // console.log(isLoggedIn)
})
</script>

<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="mx-auto h-10 w-auto"
        src="https://img.freepik.com/premium-vector/money-bag-icon-outline-vector-dollar-cash-bank-sack-color-flat_96318-95007.jpg"
        alt="Your Company"
      />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900"
            >Email address</label
          >
          <div class="mt-2">
            <input
              @change="loginError = false"
              id="email"
              name="email"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="email"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <div class="text-sm">
              <a href="#" class="font-semibold text-green-500 hover:text-green-500"
                >Forgot password?</a
              >
            </div>
          </div>
          <div class="mt-2">
            <input
              @change="loginError = false"
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              v-model="password"
            />
          </div>
        </div>

        <div>
          <button
            type="button"
            class="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            @click="checkLogin"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Not a member?
        {{ ' ' }}
        <a href="/signup" class="font-semibold leading-6 text-green-600 hover:text-green-500"
          >Sign Up</a
        >
      </p>
    </div>
    <ErrorNotification
      v-if="loginError"
      message1="Error logging in !"
      message2="Please check your credentials and try again !"
    />
  </div>
</template>
