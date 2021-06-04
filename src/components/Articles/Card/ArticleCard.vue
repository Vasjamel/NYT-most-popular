<template>
  <div class="card">
    <image-block :image="imagePath" :title="article.title" />
    <article-content
      :title="article.title"
      :abstract="article.abstract"
      :keywords="article.adx_keywords"
      :url="article.url"
    />
  </div>
</template>

<script>
import ImageBlock from './ImageBlock'
import ArticleContent from './ArticleContent'
export default {
  components: {
    ImageBlock,
    ArticleContent,
  },
  props: ['article'],
  computed: {
    imagePath() {
      return this.$props.article.media[0]
        ? this.$props.article.media[0]['media-metadata'][2].url
        : ''
    },
  },
}
</script>

<style scoped>
.card {
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  border-style: solid;
  border-width: 30px 20px 12px 8px;
  border-color: grey;
  max-width: 1100px;
  border-top-right-radius: 20px;
}

@media only screen and (min-width: 440px) and (max-width: 760px) {
  .card {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    border-style: solid;
    border-width: 30px 20px 12px 8px;
    border-color: grey;
    max-width: 1100px;
    min-width: 440px;
    border-top-right-radius: 20px;
  }
}
</style>
