<template>
  <div id="app">
    <nav>
      <router-link class="nav_link" to="/">Home</router-link>
      <router-link class="nav_link" to="/about">About</router-link>
      <router-link class="nav_link" to="/employees">Employees</router-link>
    </nav>
  <keep-alive>
    <router-view :key="$route.fullPath"></router-view>
  </keep-alive>
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
  text-decoration: none;
  color: black;
  margin-right: 10px;
}
</style>
