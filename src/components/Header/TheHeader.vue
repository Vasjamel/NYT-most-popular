<template>
  <div class="header">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XiIPw7-V7mSN0ThSE05VpPw3SF5_exe_pprI0AGW45H-L4jiNI9NlJeYBFsG4eVCKA&usqp=CAU"
      @click="load"
    />
    <hr />
    <h2>The most popular articles</h2>
    <hr />
  </div>
</template>

<script>
export default {
  props: ['load'],
}
</script>

<style scoped>
.header {
  margin: 0;
  color: gray;
}

img {
  width: auto;
}
img:hover {
  cursor: pointer;
}
</style>
