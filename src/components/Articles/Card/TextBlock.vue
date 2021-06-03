<template>
  <div class="text-block">
    <article-title>
      {{ title }}
    </article-title>

    <key-words :keywords="keywords" />

    <div>
      <p>{{ abstract }}</p>
    </div>

    <div>
      <h5 class="url-link">
        <a :href="url">Visit NYT page and read full article</a>
      </h5>
    </div>
  </div>
</template>

<script>
import ArticleTitle from './ArticleTitle'
import KeyWords from './KeyWords'
export default {
  components: {
    ArticleTitle,
    KeyWords,
  },
  props: ['title', 'abstract', 'keywords', 'url'],
}
</script>

<style scoped>
.text-block {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-wrap: wrap;
  margin-left: 4px;
  text-align: left;
}

.url-link {
  margin: 20px;
  text-align: right;
}
</style>
