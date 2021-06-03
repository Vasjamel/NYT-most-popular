<template>
  <form>
    <div class="base-form">
      <h3>Choose to see articles:</h3>
      <div class="category">
        <h4>Category:</h4>
        <div>
          <input type="radio" value="viewed" v-model="type" />
          <label for="viewed">Most viewed</label>
        </div>
        <div>
          <input type="radio" value="emailed" v-model="type" />
          <label for="emailed">Most emailed</label>
        </div>
        <div>
          <input type="radio" value="shared" v-model="type" />
          <label for="shared">Most shared</label>
        </div>
      </div>
      <button type="submit" @click.prevent="submitForm">
        Refresh page
      </button>
      <div class="period">
        <h4>Period of time</h4>
        <div>
          <input type="radio" value="1" v-model="period" />
          <label for="1">Last day</label>
        </div>
        <div>
          <input type="radio" value="7" v-model="period" />
          <label for="7">Last week</label>
        </div>
        <div>
          <input type="radio" value="30" v-model="period" />
          <label for="30">Last month</label>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      type: 'viewed',
      period: '1',
    }
  },
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

.category,
.period {
  text-align: left;
  margin: 12px;
  line-height: 2rem;
}

.category h4,
.period h4 {
  text-align: center;
}

button {
  height: 40px;
  background-color: white;
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
