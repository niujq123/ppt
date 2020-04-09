import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    counts: (state) => {
      return state.count + 1
    },
    countbyid: (state) => (id) => {
      return state.count + id
    }
  },
  mutations: {
    increment (state, payload) {
      // console.log(payload)
      state.count += payload
      console.log(state.count)
    },
    addincrement (state) {
      state.count++
    }
  },
  actions: {
    setincrement (context, amount) {
      console.log(amount)
      context.commit('increment', amount)
    }
  },
  modules: {
  }
})
