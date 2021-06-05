<template>
  <div class="footer">
    <h4>New York Times API</h4>
    <div class="line"></div>
    <h4>Test task for Frontend Developer vacancy -- Webitel --</h4>
    <div class="line"></div>
    <h4>Created by Vasyl Meleshyn</h4>
  </div>
</template>

<style scoped>
.footer {
  background-color: gray;
  margin: 0 auto;
  padding: 0 16px 16px;
  color: rgb(0, 0, 0);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
}

.line {
  border-left: 1px solid wheat;
  height: 2rem;
}

@media only screen and (min-width: 440px) and (max-width: 760px) {
  .footer {
    display: block;
  }

  .line {
    display: none;
  }
}
</style>
