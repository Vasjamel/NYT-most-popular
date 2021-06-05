import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = {
  state() {
    return {
      news: [],
      error: null,
    }
  },

  getters: {
    getNews(state) {
      return state.news
    },
    error(state) {
      return state.error
    },
  },

  mutations: {
    setNews(state, payload) {
      state.news = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    },
  },

  actions: {
    async loadNews(context, payload) {
      const response = await fetch(payload)

      if (response.ok) {
        let json = await response.json()
        context.commit('setNews', json.results)
      } else {
        const errorCode = response.status
        const errorMessage = response.statusText

        context.commit('setError', {
          errorCode,
          errorMessage,
        })
      }
    },

    deleteError(context) {
      context.commit('clearError')
    },
  },
}

export default new Vuex.Store(store)
