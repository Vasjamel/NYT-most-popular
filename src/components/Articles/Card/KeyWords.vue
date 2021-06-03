<template>
  <ul class="keywords">
    <li v-for="(keyword, index) in splitedKeywords" :key="index">
      {{ keyword }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['keywords'],
  computed: {
    splitedKeywords() {
      return this.keywords.split(';')
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

.keywords {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.keywords li {
  margin: 4px;
  padding: 0 8px;
  background-color: grey;
  color: beige;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.8rem;
}
</style>
