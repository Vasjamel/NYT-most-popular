<template>
  <div id="app">
    <the-header />
    <the-form @submit-form="formUpdated" />
    <the-spinner v-if="loading || !this.$store.state.news.length" />
    <articles-list v-else :type="type" :period="period" />
    <the-footer />
  </div>
</template>

<script>
//key saved in env.local file is not working, I get error 401
import key from './key-api'
import TheSpinner from './components/UI/TheSpinner'
import TheHeader from './components/Header/TheHeader'
import TheForm from './components/Form/TheForm'
import ArticlesList from './components/Articles/ArticlesList'
import TheFooter from './components/Footer/TheFooter'

export default {
  components: {
    TheSpinner,
    TheHeader,
    TheForm,
    ArticlesList,
    TheFooter,
  },

  emits: ['submit-form'],

  data() {
    return {
      key,
      baseURL: 'https://api.nytimes.com/svc/mostpopular/v2',
      type: 'viewed',
      period: '1',
      loading: false,
    }
  },

  methods: {
    formUpdated(type, period) {
      this.type = type
      this.period = period
      this.download()
    },

    async download() {
      this.loading = true
      const httpURL = `${this.baseURL}/${this.type}/${this.period}.json?api-key=${this.key}`
      await this.$store.dispatch('loadNews', httpURL)
      this.loading = false
    },
  },

  mounted() {
    this.download()
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  max-width: 1920px;
}
</style>
