import Vue from 'vue'
import Vuex from 'vuex'
import employees from './employees'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    number: 0
  },
  mutations: {
    add (state, number) {
      state.number += number
    },
    remove (state, number) {
      state.number -= number
    }
  },
  getters: {
    number: state => state.number
  },
  modules: {
    employees
  }
})
