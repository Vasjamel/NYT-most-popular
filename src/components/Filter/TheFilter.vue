<template>
  <div class="base-form">
    <h4>Choose other options also:</h4>

    <div class="filter">
      <label for="category"> Category:</label>
      <select name="category" v-model="category">
        <option value="viewed">Viewed</option>
        <option value="shared">Shared</option>
        <option value="emailed">Emailed</option>
      </select>
    </div>

    <div class="filter">
      <label for="days">Time period:</label>
      <select name="days" v-model="days">
        <option value="1">Day</option>
        <option value="7">Week</option>
        <option value="30">Month</option>
      </select>
    </div>

    <button @click="onFilterHandler">
      Refresh page
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: 'viewed',
      days: '1',
    }
  },

  methods: {
    onFilterHandler() {
      this.$emit('filter-handler', this.category, this.days)
    },
  },

  watch: {
    category() {
      this.onFilterHandler()
    },
    days() {
      this.onFilterHandler()
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
  outline: none;
  margin: 20px;
  padding: 8px;
  background: rgb(166, 166, 166);

  color: black;
  font-size: large;
}

.filter select:hover {
  cursor: pointer;
}

button {
  height: 40px;
  background: rgb(166, 166, 166);
}

button:hover {
  background: rgb(194, 194, 194);
  color: black;
  cursor: pointer;
}

.filter label {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  line-height: normal;
  font-weight: 400;
}

@media only screen and (min-width: 440px) and (max-width: 760px) {
  .base-form {
    display: flex;
    flex-direction: column;
  }
}
</style>
