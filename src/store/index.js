import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    titleText: 'TEST TEXT'
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    getTitleText(state) {
      return state.titleText;
    }
  },
  modules: {
  }
})
