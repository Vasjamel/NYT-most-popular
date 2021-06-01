<template>
  <div id="app">
    <header>
      <div>
        <form class="new" @submit.prevent="download">
          <div class="form-input">
            <div>
              <h4>Choose category of the most popular articles:</h4>
              <div>
                <label for="viewed">Most viewed</label>
                <input type="radio" value="viewed" v-model="type" />
              </div>
              <div>
                <label for="emailed">Most emailed</label>
                <input type="radio" value="emailed" v-model="type" />
              </div>
              <div>
                <label for="shared">Most shared</label>
                <input type="radio" value="shared" v-model="type" />
              </div>
            </div>
            <div>
              <h4>Period of time (days)</h4>
              <div>
                <label for="1">Last day</label>
                <input type="radio" value="1" v-model="period" />
              </div>
              <div>
                <label for="1">Last week</label>
                <input type="radio" value="7" v-model="period" />
              </div>
              <div>
                <label for="1">Last month</label>
                <input type="radio" value="30" v-model="period" />
              </div>
            </div>
          </div>
          <button type="submit" @click.prevent="download">Load articles</button>
        </form>
        <h1>Most {{ type }} articles in last {{ period }} days</h1>
      </div>
    </header>
    <main>
      <div>
        <div
          v-for="(each, index) in this.$store.state.news"
          :key="index"
          class="new"
        >
          <h2>{{ each.title }}</h2>
          <div v-if="each.media[0]">
            <img
              :src="each.media[0]['media-metadata'][2].url"
              :alt="each.title"
            />
          </div>
          <div v-else>
            <h4>
              (Image is missing for this article)
            </h4>
          </div>
          <div>
            <p>{{ each.abstract }}</p>
          </div>
          <div>
            <ul>
              <li>{{ each.adx_keywords }}</li>
            </ul>
            <div>
              <h6>
                <a :href="each.url">Visit page and read full article</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import key from './key-api'
export default {
  data() {
    return {
      baseURL: 'https://api.nytimes.com/svc/mostpopular/v2',
      key,
      type: 'viewed',
      period: '1',
      imgURL: '',
    }
  },
  computed: {
    httpURL() {
      return `${this.baseURL}/${this.type}/${this.period}.json?api-key=${this.key}`
    },
  },

  methods: {
    download() {
      this.$store.dispatch('loadNews', this.httpURL)
    },
  },
  mounted() {
    this.download()
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.new {
  margin: 20px;
  border: 1px solid green;
}

.form-input {
  display: flex;
  columns: 2;
  justify-content: center;
}

.form-input div {
  width: 400px;
  margin: 10px auto;
}
</style>
