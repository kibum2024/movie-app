<template>
  <div class="movie-home-wrap">
    <MainSlide />
    <div class="movie-home-play-wrap">
      <div class="movie-home-play-sub-wrap">
        <div class="movie-home-play-sub">
          <div class="movie-home-subTitle">현재 상영작<span class="movie-home-top5">TOP 5</span></div>
          <div class="movie-home-plusView">더보기<i class="bi bi-chevron-right"></i></div>
        </div>
        <div class="movie-home-play-list">
          <ul class="movie-home-play-ul">
            <li v-for="(movieImg, index) in seeMovies" :key="index">
              <img :src="getImagePath(movieImg.movieImgName)" :alt="movieImg.movieImgName">
              <div class="movie-home-list-title">
                <div class="movie-home-ageLimited" :style="ageColorObject(movieImg.ageLimited)">{{movieImg.ageLimited}}</div>
                <div class="movie-home-title">{{movieImg.movieTitle}}</div>
              </div>
              <div class="movie-home-showTime"><i class="bi bi-clock"></i>{{movieImg.showTime}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="movie-home-play-sub-wrap">
        <div class="movie-home-play-sub">
          <div class="movie-home-subTitle">상영 예정작<span class="movie-home-top5">TOP 5</span></div>
          <div class="movie-home-plusView">더보기<i class="bi bi-chevron-right"></i></div>
        </div>
        <div class="movie-home-play-list">
          <ul class="movie-home-play-ul">
            <li v-for="(movieImg, index) in wantMovies" :key="index">
              <img :src="getImagePath(movieImg.movieImgName)" :alt="movieImg.movieImgName">
              <div class="movie-home-list-title">
                <div class="movie-home-ageLimited" :style="ageColorObject(movieImg.ageLimited)">{{movieImg.ageLimited}}</div>
                <div class="movie-home-title">{{movieImg.movieTitle}}</div>
              </div>
              <div class="movie-home-showTime"><i class="bi bi-clock"></i>{{movieImg.showTime}}</div>
            </li>
          </ul>
        </div>
      </div> 
      <div class="movie-home-play-sub-wrap">
        <div class="movie-home-play-sub">
          <div class="movie-home-subTitle">아르떼 영화<span class="movie-home-top5">TOP 5</span></div>
          <div class="movie-home-plusView">더보기<i class="bi bi-chevron-right"></i></div>
        </div>
        <div class="movie-home-play-list">
          <ul class="movie-home-play-ul">
            <li v-for="(movieImg, index) in arteMovies" :key="index">
              <img :src="getImagePath(movieImg.movieImgName)" :alt="movieImg.movieImgName">
              <div class="movie-home-list-title">
                <div class="movie-home-ageLimited" :style="ageColorObject(movieImg.ageLimited)">{{movieImg.ageLimited}}</div>
                <div class="movie-home-title">{{movieImg.movieTitle}}</div>
              </div>
              <div class="movie-home-showTime"><i class="bi bi-clock"></i>{{movieImg.showTime}}</div>
            </li>
          </ul>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import MainSlide from '@/views/MainSlide.vue';
import movieData from '@/assets/data/movie_data';
import * as img from '@/assets/image/movie/index';

export default {
  name: 'MovieHome',
  components: {
    MainSlide
  },

  data() {
    return {
      movieData,
      img
    };
  },
  computed: {
    seeMovies() {
      const filteredMovies = this.movieData.filter(movie => movie.openGUbun === "1");
      // 필터링된 영화를 seeCount 기준으로 내림차순 정렬하고 상위 5개를 반환
      return filteredMovies
        .sort((a, b) => b.seeMovieCount - a.seeMovieCount)
        .slice(0, 5);  // 상위 5개 선택
    },
    wantMovies() {
      const filteredMovies = this.movieData.filter(movie => movie.openGUbun === "2");
      // 필터링된 영화를 seeCount 기준으로 내림차순 정렬하고 상위 5개를 반환
      return filteredMovies
        .sort((a, b) => b.seeMovieCount - a.seeMovieCount)
        .slice(0, 5);  // 상위 5개 선택
    },
    arteMovies() {
      const filteredMovies = this.movieData.filter(movie => movie.actGubun === "1");
      // 필터링된 영화를 seeCount 기준으로 내림차순 정렬하고 상위 5개를 반환
      return filteredMovies
        .sort((a, b) => b.seeMovieCount - a.seeMovieCount)
        .slice(0, 5);  // 상위 5개 선택
    },
  },
  methods: {
    getImagePath(imageName) {
      return img[imageName];
    },
    ageColorObject(age) {
     if (age === 'ALL') {
        return { backgroundColor: 'green' };
      } else if (age === '19') {
        return { backgroundColor: 'red' };
      } else if (age === '15') {
        return { backgroundColor: 'orangered' };
      }
      return { backgroundColor: 'yellow' }; // 기본값
   }
  }
};
</script>

<style scoped>
.movie-home-wrap {
  margin-top: 800px;
}
.movie-home-play-sub-wrap {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}
.movie-home-subTitle {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin: 10px 0px;
}
.movie-home-top5 {
  font-size: 16px;
  font-weight: bold;
  color: red;
}
.movie-home-play-wrap {
  width: 980px;
  margin: 50px auto;
}
.movie-home-play-sub {
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
}  
.movie-home-plusView {
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  color: #aaa;
}
.movie-home-play-ul {
  display: flex;
  gap: 15px;
  margin: 0;
  padding: 0;
}
.movie-home-play-ul> li> img {
  width: 184px;
  height: 262px;
  border-radius: 5px;
}
.movie-home-list-title {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px auto auto 5px;
}
.movie-home-ageLimited {
  width: 28px;
  height: 28px;
  line-height: 28px;
  font-size: 13px;
  font-weight: 600;
  margin: 0px 5px;
  background-color: orangered;
  border: 1px solid #eee;
  border-radius: 5px;
  color: white;
}
.movie-home-title {
  font-size: 14px;
  font-weight: bold;
  width: 120px;
  height: 25px;
  line-height: 25px;
  text-align: left;
  white-space: nowrap; /* 텍스트를 한 줄로 표시 */
  overflow: hidden;    /* 넘치는 부분 숨기기 */
  text-overflow: ellipsis;
}
.movie-home-showTime {
  font-size: 12px;
  font-weight: bold;
}
.movie-home-showTime> i {
  margin: 0px 5px;
}
</style>