<template>
  <div>
    <h1>
      The top {{ category }} articles in last {{ days }} {{ daysQuantifier }}:
    </h1>

    <article-card
      v-for="article in $store.state.news"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script>
import ArticleCard from './Card/ArticleCard'

export default {
  components: { ArticleCard },
  props: ['category', 'days'],
  computed: {
    daysQuantifier() {
      return this.days === '1' ? 'day' : 'days'
    },
  },
}
</script>
