<template>
  <div id="app">
    <sidebar/>
    <pad/>
  </div>
</template>

<script>
import Pad from './components/Pad'
import Sidebar from './components/Sidebar'

export default {
  name: 'App',
  components: {
    Pad,
    Sidebar
  }
}
</script>

<style>
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  body {
    color: #2c3e50;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    height: 100%;
  }
</style>
