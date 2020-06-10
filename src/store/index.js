import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || ''
  },
  mutations: {
    saveToken: (state, token) => {
      state.token = token;
    }
  },
  actions: {
    logout: ({commit, dispatch}) => {
      return new Promise((resolve, reject) => {
        localStorage.removeItem('user-token');
        resolve();
      })
    }},
  getters: {
    isAuthenticated: state => state.token
  }
})
