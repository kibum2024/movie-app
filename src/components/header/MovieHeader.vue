<template>
  <div class="header-wrap">
    <TopBanner />
    <MainMenu />
  </div>
</template>

<script>
import TopBanner from '@/components/header/TopBanner.vue';
import MainMenu from '@/components/header/MainMenu.vue';

export default {
  name: 'MovieHeader',
  components: {
    TopBanner,
    MainMenu
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