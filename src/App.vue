<template>
  <div class="app">
    <the-modal v-if="$store.getters.error" />
    <the-header :load="load" />
    <the-filter @filter-handler="onFilterChanged" />
    <the-spinner v-if="loading" />
    <div v-else>
      <articles-list :category="category" :days="days" />
      <the-footer />
    </div>
  </div>
</template>

<script>
import TheSpinner from './components/CommonUI/TheSpinner'
import TheModal from './components/CommonUI/TheModal'
import TheHeader from './components/Header/TheHeader'
import TheFilter from './components/Filter/TheFilter'
import ArticlesList from './components/Articles/ArticlesList'
import TheFooter from './components/Footer/TheFooter'

export default {
  components: {
    TheSpinner,
    TheModal,
    TheHeader,
    TheFilter,
    ArticlesList,
    TheFooter,
  },

  emits: ['filter-handler'],

  data() {
    return {
      key: process.env.VUE_APP_SECRET_KEY,
      baseURL: 'https://api.nytimes.com/svc/mostpopular/v2',
      loading: false,
      days: '1',
      category: 'viewed',
    }
  },

  methods: {
    onFilterChanged(category, days) {
      this.category = category
      this.days = days
      this.load()
    },

    async load() {
      const httpURL = `${this.baseURL}/${this.category}/${this.days}.json?api-key=${this.key}`

      this.loading = true
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
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  max-width: 1920px;
}
</style>
