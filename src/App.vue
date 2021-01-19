
<template>

  <div id="app">
    <router-link to="pethome">topethome</router-link>
    <router-link to="search">tosearch</router-link>
    <router-link to="knowledgecard">toknowledgecard</router-link>
    <router-view></router-view><!--用于展示template模版-->
  </div>
</template>

<script>
const axios=require('axios');
export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
.info{
  width:100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
