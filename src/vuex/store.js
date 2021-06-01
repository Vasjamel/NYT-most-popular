import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  state() {
    return {
      news: [],
    }
  },

  getters: {
    getNews(state) {
      return state.news
    },
  },

  mutations: {
    setNews(state, payload) {
      state.news = payload
    },
  },

  actions: {
    async loadNews(context, payload) {
      const response = await fetch(payload)
      if (response.ok) {
        let json = await response.json()
        context.commit('setNews', json.results)
      } else {
        alert('Error HTTP: ' + response.status)
      }
    },
  },
}

export default new Vuex.Store(store)
