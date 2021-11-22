<template>
  <div class="container">
    <div class="row">
      <h1>W3</h1>
      <div v-if="a == 1">a=1</div>
      <div v-else-if="a == 2">a=2</div>
      <div>{{ a }}</div>
      <button @click="gotoHome()">gogo</button>
      <br />
      <button class="btn btn-primary" @click="plus">ok</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      a: 0,
    };
  },
  methods: {
    plus() {
      this.a++;
    },
    gotoHome() {
      this.$router.push("/w1.vue");
      console.log("w1")
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
