<template>
  <div class="main-slide-wrap">
    <ul class="main-slide-ul">
      <!-- <li> -->
      <li class="main-slide-li" v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="`Image ${index + 1}`" />
      </li>
    </ul>
  </div>
</template>

<script>
import main01 from '@/assets/image/main/main_01.jpg';
import main02 from '@/assets/image/main/main_02.jpg';
import main03 from '@/assets/image/main/main_03.jpg';

export default {
  name: 'MainSlide',
  data() {
    return {
      images: [
        main01,
        main02,
        main03
      ]

    };
  },
  methods: {
    
  }
};
</script>

<style scoped>
.main-slide-wrap {
  width: 100vw;
  margin: 0 auto;
}
.main-slide-ul {
  width: auto;
  margin: 0;
  padding: 0;
}
.main-slide-li {
  width: 100%;
  height: 774px;
  background-color: #bbb;
}
.main-slide-li> img {
  width: 100%;
  height: 774px;
}  
</style>