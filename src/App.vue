<template>
  <div id="app">
    <nav>
      <router-link class="nav_link" to="/">Home</router-link>
      <router-link class="nav_link" to="/about">About</router-link>
      <router-link class="nav_link" to="/view">View Data</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav_link {
  margin-right: 10px
}
</style>
