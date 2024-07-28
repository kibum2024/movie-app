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
/* 스크롤바 전체 */
::-webkit-scrollbar {
    width: 5px; /* 너비 */
    height: 5px; /* 높이 (수평 스크롤바) */
}

/* 스크롤바 트랙 */
::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

/* 스크롤바 핸들 */
::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

/* 스크롤바 핸들: 호버 상태 */
::-webkit-scrollbar-thumb:hover {
    background: #555;
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
