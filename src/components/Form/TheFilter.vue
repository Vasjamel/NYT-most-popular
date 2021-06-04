<template>
  <div class="base-form">
    <h4>Choose to see articles:</h4>

    <div class="filter">
      <label for="period">Time span:</label>

      <select name="period" id="period" v-model="period">
        <option value="1">Day</option>
        <option value="7">Week</option>
        <option value="30">Month</option>
      </select>
    </div>
    <div class="filter">
      <label for="type">Category:</label>

      <select name="type" id="type" v-model="type">
        <option value="viewed">Viewed</option>
        <option value="shared">Shared</option>
        <option value="emailed">Emailed</option>
      </select>
    </div>
    <button @click.prevent="submitForm">
      Refresh page
    </button>
  </div>
</template>

<script>
export default {
  props: ['period', 'type'],

  methods: {
    submitForm() {
      this.$emit('submit-form', this.type, this.period)
    },
  },
  watch: {
    type() {
      this.submitForm()
    },
    period() {
      this.submitForm()
    },
  },
}
</script>

<style scoped>
.base-form {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: gray;
  width: 100%;
  font-size: 1.5rem;
}

.filter select {
  margin: 20px;
  background-color: rgb(167, 166, 166);
  color: black;
  font-size: large;
}

.filter select:hover {
  cursor: pointer;
}

button {
  height: 40px;
  background-color: rgb(167, 166, 166);
}

button:hover {
  background-color: rgb(166, 166, 166);
  cursor: pointer;
}

@media only screen and (min-width: 440px) and (max-width: 760px) {
  .base-form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: gray;
    width: 100%;
    font-size: 1.5rem;
  }
}
</style>
