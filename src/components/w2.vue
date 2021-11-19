<template>
  <div class="container">
    <hr />
    <h1>Workshop #2 preview image</h1>
    <hr />
    <div class="row">
      <div class="col-md-5">
        <div v-if="!image">
          1 <input type="file" class="form-control" @change="onFileChange" />
        </div>
        <div v-if="!image2">
          2<input type="file" class="form-control" @change="onFileChange2" />
        </div>
        <div>
          <hr />
          <div v-if="image">
            <div class="row">
              <div class="col-md-9">
                1<img :src="image" class="img-fluid" />
              </div>
              <div class="col-md-3">
                <button class="btn btn-danger" @click="removeImage">
                  delete
                </button>
              </div>
            </div>
          </div>
          <div v-if="image2">
            <div class="row">
              <div class="col-md-9">
                2<img :src="image2" class="img-fluid" />
              </div>
              <div class="col-md-3">
                <button class="btn btn-danger" @click="removeImage2">
                  delete
                </button>
              </div>
            </div>
          </div>
        </div>
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
      image: "",
      image2: "",
    };
  },
  methods: {
    onFileChange: function (e) {
      let file = e.target.files;
      if (!file.length) return;
      this.createImage(file[0]);
    },
    onFileChange2: function (e) {
      let file = e.target.files;
      if (!file.length) return;
      this.createImage2(file[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    createImage2(file) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.image2 = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = "";
    },
    removeImage2() {
      this.image2 = "";
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
