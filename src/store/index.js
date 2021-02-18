import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userIsConnected: false,
    userIsReady: false,
    opponentIsConnected: false,
    opponentIsReady: false,
    isVertical: false
  },
  mutations: {
    ROTATE_SHIP (state, payload) {
      this.state.isVertical = payload
    }
  },
  actions: {
    rotateShip ({ commit }, payload) {
      commit('ROTATE_SHIP', payload)
    }
  },
  modules: {}
})
