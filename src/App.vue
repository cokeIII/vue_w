<template>
  <div id="app">
    
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> -->
      <router-link to="/w1">w1</router-link> |
      <router-link to="/w2">w2</router-link> |
      <router-link to="/w3">w3</router-link> |
      <router-link to="/multi">multi</router-link> |
      <router-link to="/person">person</router-link> |
      <router-link to="/showUsers">users</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
