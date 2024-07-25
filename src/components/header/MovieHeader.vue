<template>
  <div class="header-wrap">
    <TopBanner />
    <MainMenu />
    <MainSlide />
    <h1>head part</h1>
  </div>
  <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
  </nav>
</template>

<script>
import TopBanner from './TopBanner.vue';
import MainMenu from './MainMenu.vue';
import MainSlide from './MainSlide.vue';

export default {
  name: 'MovieHeader',
  components: {
    TopBanner,
    MainMenu,
    MainSlide
  },
  data() {
    return {
      
    };
  },
  methods: {
    
  }
  
};
</script>

<style>
.header-wrap {
  position: relative;
}
  
</style>