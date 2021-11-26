<template>
  <div class="container">
    <h1>Persons</h1>
    <table class="table">
      <thead>
        <th>id</th>
        <th>name</th>
        <th>age</th>
      </thead>
      <tbody>
        <tr v-for="value in person" v-bind:key="value.id">
          <td>{{ value.id }}</td>
          <td>{{ value.name }}</td>
          <td>{{ value.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      no: 0,
      person: [
        {
          name: "AAA",
          age: 16,
          id: "0001",
        },
        {
          name: "BBB",
          age: 18,
          id: "0002",
        },
        {
          name: "CCC",
          age: 19,
          id: "0003",
        },
        {
          name: "DDD",
          age: 16,
          id: "0004",
        },
        {
          name: "EEE",
          age: 17,
          id: "0005",
        },
      ],
    };
  },
};
</script>