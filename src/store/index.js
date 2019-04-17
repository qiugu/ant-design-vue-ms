import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import permission from './modules/permisson'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    permission
  },
  state: {
    multiTab: []
  },
  getters: getters,
  mutations: {
    ADD_TAB (state, {title,key}) {
      state.multiTab.push({title,key});
    },
    DELETE_TAB (state,key) {
      state.multiTab = state.multiTab.filter(item => item.key !== key);
    }
  },
  actions: {

  }
})
