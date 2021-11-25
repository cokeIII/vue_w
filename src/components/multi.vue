<template>
  <div class="container">
    <h1>multiplication table</h1>
    <div class="row">
      <div class="col-md-5">
        <input type="number" v-model="Multiplier" class="form-control" />
      </div>
    </div>
    <div v-for="n in max_multi" v-bind:key="n">
      <div class="row">
        <div class="col-md-12">
          {{ Multiplier }} * {{ n }} = {{ Multiplier * n }}
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
      max_multi: 12,
      Multiplier: 3,
    };
  },
};
</script>