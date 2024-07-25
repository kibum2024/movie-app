<template>
  <div class="app-wrap">
    <header>
      <MovieHeader />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <MovieFooter />
    </footer>
  </div>
</template>

<script>
import MovieHeader from '@/components/header/MovieHeader.vue';
import MovieFooter from '@/components/footer/MovieFooter.vue';

export default {
  name: 'App',
  components: {
    MovieHeader,
    MovieFooter
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
a {
  text-decoration: none;
  color: #aaa;
}
</style>
