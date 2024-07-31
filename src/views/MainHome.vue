<template>
  <div>
    <MainSlide />
    <MainEvent />
  </div>
</template>

<script>
import MainSlide from '@/views/MainSlide.vue';
import MainEvent from '@/views/MainEvent.vue';

export default {
  name: 'MainHome',
  components: {
    MainSlide,
    MainEvent
  },

  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
  
</style>