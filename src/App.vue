<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
// import Updata from './views/Home.vue'
export default {
  name: 'app'
  // components: {
  //   Updata
  // }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
