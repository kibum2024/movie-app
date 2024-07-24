<template>
  <div>
    <TopBanner />
    <MainSlide />
    <h1>head part</h1>
  </div>
</template>

<script>
import TopBanner from './TopBanner.vue';
import MainSlide from './MainSlide.vue';

export default {
  name: 'MovieHeader',
  components: {
    TopBanner,
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
  
</style>