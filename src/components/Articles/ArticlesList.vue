<template>
  <div>
    <h1>The most {{ type }} articles in last {{ period }} {{ days }}:</h1>

    <article-card
      v-for="each in $store.state.news"
      :key="each.id"
      :each="each"
    />
  </div>
</template>

<script>
import ArticleCard from './Card/ArticleCard'

export default {
  components: { ArticleCard },
  props: ['type', 'period'],
  computed: {
    days() {
      return this.$props.period === '1' ? 'day' : 'days'
    },
  },
}
</script>
