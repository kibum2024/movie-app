<template>
  <div class="app-wrap">
    <div class="test"></div>
    <MovieHeader />
  </div>
</template>

<script>
import MovieHeader from '@/components/header/MovieHeader.vue';

export default {
  name: 'App',
  components: {
    MovieHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
.app-wrap {
  width: 100vw;
}
li {
  list-style: none;
}
</style>
