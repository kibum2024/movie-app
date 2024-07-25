<template>
  <div class="main-slide-wrap">
    <ul class="main-slide-ul"  :style="{ transform: `translateX(-${currentIndex * 100}vw)` }">
      <li class="main-slide-li" v-for="(image, index) in images" :key="index" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
        <img :src="image" :alt="`Image ${index + 1}`" />
        <div @click="toggleVideo(index)" class="main-slide-play-btn"><i class="bi bi-play"></i></div>
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
    <div class="main-slide-video" v-show="isVideoVisible">
      <div class="main-slide-video-wrap">
        <div class="main-slide-video-close" @click="toggleVideo(videoIndex)"><i class="bi bi-x-lg"></i></div>
        <!-- <video class="main-slide-video-play" :src="videoIndex !== null ? videos[videoIndex] : ''" controls="" @loadeddata="playVideo"> </video> -->
        <video class="main-slide-video-play" :src="videoIndex !== null ? videos[videoIndex] : ''" controls="" autoplay> </video>
      </div>
    </div>
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
      videos: [ "https://cf2.lottecinema.co.kr/lotte_image/2024/TheBaton/TheBaton_1280720.mp4",
                "https://cf2.lottecinema.co.kr/lotte_image/2024/Pilot/Pilot_1280720.mp4",
                "https://cf2.lottecinema.co.kr/lotte_image/2024/BOL4/BOL4_1280720.mp4"
      ],
      currentIndex: 0,
      autoSlideInterval: 3000, // 3초마다 슬라이드 변경
      intervalId: null,
      isVideoVisible: false,
      videoIndex: null,
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
    },
    toggleVideo(index) {
      console.log("toggleVideo 클릭 :", this.isVideoVisible);
      this.videoIndex = index;
      this.isVideoVisible = !this.isVideoVisible;
    },
    handleMouseOver() {
      this.stopAutoSlide();
    },
    handleMouseOut() {
      this.startAutoSlide();
    }
    // playVideo(event) {
    //   event.target.play().catch(error => {
    //     console.error('자동 재생 실패:', error);
    //   });
    // }
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
  position: relative;
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
.main-slide-video {
  position: absolute;
  width: 850px;
  height: 500px;
  background-color: white;
  border-radius: 20px;
  top: 15%;
  left: 30%;
}
.main-slide-video-play {
  width: 800px;
  height: 500px;
}
.main-slide-play-btn {
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  z-index: 100;
  cursor: pointer;
}
.bi-play {
  position: absolute;
  color: #f3f1f1;
  font-size: 4rem;
  top: 45%;
  left: 50%;
}
.main-slide-video-close {
  position: absolute;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  top: 1%;
  right: 1%;
}
.bi-x-lg {
  font-size: 1.2rem;
}
</style>