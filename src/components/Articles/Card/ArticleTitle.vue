<template>
  <div class="title">
    <h2 :style="{ color: titleColor }">
      <slot> </slot>
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleColor: '#',
    }
  },

  mounted() {
    const randomRGB = Math.floor(Math.random() * 16777215).toString(16)
    this.titleColor += randomRGB
  },
}
</script>

<style scoped>
.title {
  display: block;
  text-align: start;
}
</style>
