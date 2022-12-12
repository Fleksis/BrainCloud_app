import axios from 'axios'

export const state = () => ({
  token: localStorage.getItem('token') || null
})

export const getter = {
  getToken (state) {
    return state.token
  }
}

export const mutations = {
  setToken (state, token) {
    state.token = token
  }
}
