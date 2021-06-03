<template>
  <div class="card">
    <image-block :image="imagePath" :title="each.title" />
    <text-block
      :title="each.title"
      :abstract="each.abstract"
      :keywords="each.adx_keywords"
      :url="each.url"
    />
  </div>
</template>

<script>
import ImageBlock from './ImageBlock'
import TextBlock from './TextBlock'
export default {
  components: {
    ImageBlock,
    TextBlock,
  },
  props: ['each'],
  computed: {
    imagePath() {
      return this.$props.each.media[0]
        ? this.$props.each.media[0]['media-metadata'][2].url
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
