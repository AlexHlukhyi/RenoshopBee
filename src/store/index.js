import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('user-token') || '',
    user: null
  },
  mutations: {
    setToken: (state, payload) => {
      state.token = payload.token;
    },
    setUser: (state, payload) => {
      state.user = payload.user;
    },
    logout: (state) => {
      state.token = '';
      state.user = null;
    }
  },
  actions: {},
  getters: {
    user: state => {
      return state.user
    },
    token: state => {
      return state.token
    }
  }
})
