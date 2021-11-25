<!-- html -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <!-- <div class="text-primary">{{ name }}</div> -->
        <!-- {{ name }} -->
        <!-- <div v-text="name"></div> -->
        <!-- <p v-text="name" class="text-danger"></p> -->
        <label for="">input score:</label
        ><input class="form-control" type="number" v-model="number" @keyup="calGrade(number)"/>
      </div>
      <div class="col-md-4">
        <label for="">Grade: </label><span v-text="grade" :class="classG"></span>
      </div>
    </div>
  </div>
</template>
<!-- html -->
<!-- js -->
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      name: "kasama",
      number: 0,
      grade: "F",
      classG: "text-danger"
    };
  },
  methods: {
    calGrade(number) {
      if (number < 49) {
        this.grade = "F";
        this.classG = "text-danger"
      } else if ((number > 49) & (number <= 54)) {
        this.grade = "D";
      } else if ((number >= 55) & (number <= 59)) {
        this.grade = "D+";
      } else if ((number >= 60) & (number <= 64)) {
        this.grade = "C";
      } else if ((number >= 65) & (number <= 69)) {
        this.grade = "C+";
      } else if ((number >= 70) & (number <= 74)) {
        this.grade = "B";
      } else if ((number >= 75) & (number <= 79)) {
        this.grade = "B+";
      } else if ((number >= 80) & (number <= 100)) {
        this.grade = "A";
        this.classG = "text-success"
      } else {
          this.grade = "ERROR";
      }
    },
  },
};
</script>
