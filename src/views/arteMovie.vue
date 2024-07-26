<template>
  <div class="arte-movie-wrap">
    <div class="arte-movie-play-wrap">
      <div class="arte-movie-play-sub-wrap">
        <div class="arte-movie-play-list">
          <ul class="arte-movie-play-ul">
            <li v-for="(movieImg, index) in seeMovies" :key="index">
              <img :src="getImagePath(movieImg.movieImgName)" :alt="movieImg.movieImgName">
              <div class="arte-movie-list-title">
                <div class="arte-movie-ageLimited" :style="ageColorObject(movieImg.ageLimited)">{{movieImg.ageLimited}}</div>
                <div class="arte-movie-title">{{movieImg.movieTitle}}</div>
              </div>
              <div class="arte-movie-showTime"><i class="bi bi-clock"></i>{{movieImg.showTime}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import movieData from '@/assets/data/movie_data';
import * as img from '@/assets/image/movie/index';

export default {
  name: 'seeMovie',
  data() {
    return {
       movieData,
      img
    };
  },
  computed: {
    seeMovies() {
      const filteredMovies = this.movieData.filter(movie => movie.actGubun === "1");
      // 필터링된 영화를 seeCount 기준으로 내림차순 정렬하고 상위 5개를 반환
      return filteredMovies
        .sort((a, b) => b.seeMovieCount - a.seeMovieCount)
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
.arte-movie-wrap {
  margin-top: 171px;
}
.arte-movie-play-sub-wrap {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}
.arte-movie-play-wrap {
  width: 980px;
  margin: 50px auto;
}
.arte-movie-play-ul {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin: 0;
  padding: 0;
}
.arte-movie-play-ul> li> img {
  width: 184px;
  height: 262px;
  border-radius: 5px;
}
.arte-movie-list-title {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px auto auto 5px;
}
.arte-movie-ageLimited {
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
.arte-movie-title {
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
.arte-movie-showTime {
  font-size: 12px;
  font-weight: bold;
}
.arte-movie-showTime> i {
  margin: 0px 5px;
}
  
</style>