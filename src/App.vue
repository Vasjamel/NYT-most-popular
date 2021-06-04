<template>
  <div id="app">
    <the-header />
    <the-filter @submit-form="formUpdated" :period="period" :type="type" />
    <the-spinner v-if="loading" />
    <div v-else>
      <articles-list :type="type" :period="period" />
      <the-footer />
    </div>
  </div>
</template>

<script>
//key saved in env.local file is not working, I get error 401, so here is another file
import key from './key-api'
import TheSpinner from './components/Spinner/TheSpinner'
import TheHeader from './components/Header/TheHeader'
import TheFilter from './components/Form/TheFilter'
import ArticlesList from './components/Articles/ArticlesList'
import TheFooter from './components/Footer/TheFooter'

export default {
  components: {
    TheSpinner,
    TheHeader,
    TheFilter,
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
      this.load()
    },

    async load() {
      this.loading = true
      const httpURL = `${this.baseURL}/${this.type}/${this.period}.json?api-key=${this.key}`
      await this.$store.dispatch('loadNews', httpURL)
      this.loading = false
    },
  },

  mounted() {
    this.load()
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
