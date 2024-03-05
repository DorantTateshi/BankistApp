import './assets/main.css'

import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { createStore } from 'vuex'

export const app = createApp(App)

app.use(router)

export const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      user: {}
    }
  },
  mutations: {
    setLoggedIn(state, value) {
      state.isLoggedIn = value
    },
    setUser(state, value) {
      state.user = value
    }
  }
})

let users = [
  {
    name: 'Dorant',
    lastname: 'Tateshi',
    dateBirth: '2002-23-03',
    email: 'dorant@mail.com',
    password: '123'
  }
]

let usersRef = ref(users)
// let isLoggedIn = ref(false)

// app.provide('isLoggedIn', isLoggedIn.value)
app.provide('users', usersRef.value)

app.mount('#app')
app.use(store)
