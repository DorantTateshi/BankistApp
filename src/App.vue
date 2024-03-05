<!-- eslint-disable no-unused-vars -->
<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { RouterView, useRoute } from 'vue-router'
import { ref, watch, inject, computed } from 'vue'
import { useStore } from 'vuex'
import { store } from './main'
import router from './router'
const route = useRoute()
let isLoggedIn = inject('isLoggedIn')

const x = computed(() => store.state.isLoggedIn)

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}
const navigation = ref([
  { name: 'Home', to: '/', current: route.fullPath === '/' },
  { name: 'Transactions', to: '/transactions', current: route.fullPath === '/transactions' },
  { name: 'Cards', to: '/cards', current: route.fullPath === '/cards' },
  { name: 'Exchange Office', to: '/exchange', current: route.fullPath === '/exchange' }
])

const navigation1 = ref([
  { name: 'Home', to: '/', current: route.fullPath === '/' },
  { name: 'Exchange Office', to: '/exchange', current: route.fullPath === '/exchange' }
])

watch(
  () => route.fullPath,
  (newPath) => {
    // console.log(x)
    navigation.value.forEach((item) => {
      item.current = item.to === newPath
    })
  }
)
watch(
  () => route.fullPath,
  (newPath) => {
    // console.log(x)
    navigation1.value.forEach((item) => {
      item.current = item.to === newPath
    })
  }
)

const handleSignOut = () => {
  store.commit('setLoggedIn', false)
  router.push('/')
}
</script>

<template>
  <nav>
    <div class="min-h-full">
      <Disclosure as="nav" class="border-b border-gray-200 bg-white" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 justify-between">
            <div class="flex">
              <div class="flex flex-shrink-0 items-center">
                <img
                  class="block h-8 w-auto lg:hidden"
                  src="https://img.freepik.com/premium-vector/money-bag-icon-outline-vector-dollar-cash-bank-sack-color-flat_96318-95007.jpg"
                  alt="Your Company"
                />
                <img
                  class="hidden h-8 w-auto lg:block"
                  src="https://img.freepik.com/premium-vector/money-bag-icon-outline-vector-dollar-cash-bank-sack-color-flat_96318-95007.jpg"
                  alt="Your Company"
                />
              </div>
              <div
                v-if="store.state.isLoggedIn"
                class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"
              >
                <template v-for="item in navigation" :key="item.name">
                  <RouterLink
                    :to="{ path: item.to }"
                    :href="item.to"
                    :class="[
                      item.current
                        ? 'border-green-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                  >
                    {{ item.name }}
                  </RouterLink>
                </template>
              </div>
              <div v-else class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                <template v-for="item in navigation1" :key="item.name">
                  <RouterLink
                    :to="{ path: item.to }"
                    :href="item.to"
                    :class="[
                      item.current
                        ? 'border-green-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                  >
                    {{ item.name }}
                  </RouterLink>
                </template>
              </div>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                type="button"
                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                v-if="store.state.isLoggedIn"
                @click="handleSignOut"
              >
                Sign out
              </button>
              <RouterLink
                v-else
                class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                to="/login"
                >Log In</RouterLink
              >

              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-3" v-if="store.state.isLoggedIn">
                <div>
                  <MenuButton
                    class="relative flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span class="absolute -inset-1.5" />
                    <span class="sr-only">Open user menu</span>
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500"
                    >
                      <span className="text-xl font-medium leading-none text-white"
                        >{{ store.state.user.name[0].toUpperCase()
                        }}{{ store.state.user.lastname[0].toUpperCase() }}</span
                      >
                    </span>
                  </MenuButton>
                </div>
              </Menu>
            </div>
            <div class="-mr-2 flex items-center sm:hidden">
              <DisclosureButton
                class="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span class="absolute -inset-0.5" />
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel class="sm:hidden">
          <div class="space-y-1 pb-3 pt-2">
            <DisclosureButton
              v-for="item in navigation"
              :key="item.name"
              as="RouterLink"
              :to="item.href"
              :class="[
                item.current
                  ? 'border-green-600 bg-indigo-50 text-green-700'
                  : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
              ]"
              :aria-current="item.current ? 'page' : undefined"
              >{{ item.name }}</DisclosureButton
            >
          </div>
          <div class="border-t border-gray-200 pb-3 pt-4">
            <div class="flex items-center px-4">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-gray-800">{{ user.name }}</div>
                <div class="text-sm font-medium text-gray-500">{{ user.email }}</div>
              </div>
              <button
                type="button"
                class="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span class="absolute -inset-1.5" />
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-3 space-y-1">
              <DisclosureButton
                v-for="item in userNavigation"
                :key="item.name"
                as="a"
                :href="item.href"
                class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                >{{ item.name }}</DisclosureButton
              >
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </nav>
  <main class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <RouterView />
  </main>
</template>
