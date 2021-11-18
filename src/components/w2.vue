<template>
  <div class="container">
    <hr />
    <h1>Workshop #2 preview image</h1>
    <hr />
    <div class="row">
      <div class="col-md-5">
        <input type="file" class="form-control" @change="onFileChange">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      image:"",
    };
  },
  methods:{
    onFileChange:function(e){
      let file = e.target.files
      console.log(file)
    }
  }
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
