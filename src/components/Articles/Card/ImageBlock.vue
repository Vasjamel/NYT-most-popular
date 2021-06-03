<template>
  <div class="image-block">
    <div v-if="imageIsExisting">
      <img :src="imageIsExisting" :alt="title" />
    </div>
    <div v-else class="image-placeholder">
      <h4>
        Image does not exist for this article.
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  props: ['image', 'title'],
  computed: {
    imageIsExisting() {
      return this.$props.image === '' ? false : this.$props.image
    },
  },
}
</script>

<style scoped>
.image-block {
  margin: 12px;
}

img {
  margin: 0 auto;
  border: none;
}

.image-placeholder {
  position: relative;
  margin: 0 auto;
  width: 440px;
  height: 293px;
  background-color: rgb(130, 160, 99);
}

.image-placeholder h4 {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>
