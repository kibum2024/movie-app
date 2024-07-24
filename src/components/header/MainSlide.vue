<template>
  <div class="main-slide-wrap">
    <ul class="main-slide-ul"  :style="{ transform: `translateX(-${currentIndex * 100}vw)` }">
      <li class="main-slide-li" v-for="(image, index) in images" :key="index">
        <img :src="image" :alt="`Image ${index + 1}`" />
      </li>
    </ul>
    <button class="carousel-control-prev" @click="prevSlide" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" @click="nextSlide" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div id="layerMovieTrailer" class="layer_wrap ty2 layer_movie_trailer active" :style="{left: '50%', top: '50%', marginTop: '-261px', marginLeft: '-485px'}">
    <strong class="hidden">레이어 팝업 시작</strong>
    <div class="layer_header">
      <button type="button" class="btn_close btnCloseLayer">팝업 닫기</button>
    </div>
    <div class="layer_contents">
      <video height="100%" width="100%" controls="" id="vdoPlayer" src="https://cf2.lottecinema.co.kr/lotte_image/2024/Pilot/Pilot_1280720.mp4"></video>
    </div>
    <strong class="hidden txtTabIndex" tabindex="0">레이어 팝업 끝</strong>
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
      ],
      currentIndex: 0,
      autoSlideInterval: 3000, // 3초마다 슬라이드 변경
      intervalId: null
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startAutoSlide() {
      this.intervalId = setInterval(this.nextSlide, this.autoSlideInterval);
    },
    stopAutoSlide() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  }
};
</script>

<style scoped>
.main-slide-wrap {
  position: relative;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
}
.main-slide-ul {
  width: 300%; /* 총 3장의 이미지를 표시하는 경우 300%로 설정 */
  margin: 0;
  padding: 0;
  display: flex;
}
.main-slide-li {
  width: 100vw;
  height: 774px;
  background-color: #bbb;
}
.main-slide-li> img {
  width: 100vw;
  height: 774px;
}  
.carousel-control-prev, .carousel-control-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0);
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100px;
  height: 100px;
}
.carousel-control-prev {
  left: 30px;
  font-size: 5rem;
}

.carousel-control-next {
  right: 30px;
}
.carousel-control-prev-icon, .carousel-control-next-icon {
  width: 50px; /* 아이콘의 너비 */
  height: 50px; /* 아이콘의 높이 */
  background-size: 50px 50px; /* 배경 이미지 크기 조정 */
}
</style>