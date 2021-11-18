<template>
  <div id="app">
    <w2/>
  </div>
</template>

<script>
// import w1 from "./components/w1.vue"
import w2 from "./components/w2.vue"
export default {
  name: "App",
  components: {
    w2
  },
  data() {
    return {
      message: "",
      max: 20,
    };
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
