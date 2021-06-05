<template>
  <div class="modal-wrapper">
    <div class="modal">
      <h1>HTTP ERROR {{ $store.getters.error.errorCode }}</h1>

      <div class="modal-text">
        <div v-if="$store.getters.error.errorMessage">
          <h4>{{ $store.getters.error.errorMessage }}</h4>
        </div>
        <h4 v-else>
          Something went wrong.<br />
          Please retry later.
        </h4>
        <h4></h4>
      </div>
      <div>
        <button @click="closeModal">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$store.dispatch('deleteError')
    },
  },
}
</script>

<style scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.863);
}
.modal {
  position: fixed;
  top: 25%;
  right: 25%;
  left: 25%;
  z-index: 3;
  background-color: rgb(117, 117, 117);
  padding-bottom: 20px;
}

.modal-text {
  padding: 20px;
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
</style>
