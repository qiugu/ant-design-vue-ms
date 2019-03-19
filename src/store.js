import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    multiTab: []
  },
  mutations: {
    ADD_TAB (state, {title,key}) {
      state.multiTab.push({title,key});
    },
    DELETE_TAB (state,key) {
      state.multiTab = state.multiTab.filter(item => item.key !== key);
      console.log(state.multiTab)
    }
  },
  actions: {

  }
})
