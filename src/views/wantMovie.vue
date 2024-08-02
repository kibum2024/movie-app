<template>
  <div class="see-movie-wrap">
    <div class="see-movie-play-wrap">
      <div class="see-movie-play-sub-wrap">
        <div class="see-movie-play-sub">
          <div class="see-movie-subTitle-wrap">
            <div class="see-movie-subTitle">현재 상영작</div>
            <div class="see-movie-subTitle active">상영 예상작</div>
          </div>
          <div class="see-movie-sort">
            <ul class="see-movie-sort-ul">
              <li>개봉일순</li>
              <li>예매순</li>
              <li>보고싶어요순</li>
            </ul>
          </div>  
        </div>
        <div class="see-movie-play-list">
          <ul class="see-movie-play-ul">
            <li v-for="(movieImg, index) in seeMovies" :key="index">
              <img :src="getImagePath(movieImg.movieImgName)" :alt="movieImg.movieImgName">
              <div class="see-movie-list-title">
                <div class="see-movie-ageLimited" :style="ageColorObject(movieImg.ageLimited)">{{movieImg.ageLimited}}</div>
                <div class="see-movie-title">{{movieImg.movieTitle}}</div>
              </div>
              <div class="see-movie-showTime"><i class="bi bi-clock"></i>{{movieImg.showTime}}</div>
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
      const filteredMovies = this.movieData.filter(movie => movie.openGUbun === "2");
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
.see-movie-wrap {
  margin-top: 141px;
}
.see-movie-play-sub-wrap {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}
.see-movie-subTitle-wrap {
  display: flex;
}
.see-movie-subTitle {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin: 10px 5px;
}
.see-movie-subTitle.active {
  border-bottom: 2px solid #aaa;
}
.see-movie-top5 {
  font-size: 16px;
  font-weight: bold;
  color: red;
}
.see-movie-play-wrap {
  width: 980px;
  margin: 50px auto;
}
.see-movie-play-sub {
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
}  
.see-movie-sort-ul {
  display: flex;
  margin: 5px 0px;
  padding: 0;
}
.see-movie-sort-ul> li {
  position: relative;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  color: #aaa;
  padding: 0px 10px;
}
.see-movie-sort-ul> li:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0px; /* 선의 위치를 조정 */
  top: 45%;
  transform: translateY(-50%);
  height: 30%; /* 선의 길이 조정 */
  font-weight: bold;
  border-right: 1px solid #aaa; /* 선의 스타일 */
}
.see-movie-play-ul {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin: 0;
  padding: 0;
}
.see-movie-play-ul> li> img {
  width: 184px;
  height: 262px;
  border-radius: 5px;
}
.see-movie-list-title {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px auto auto 5px;
}
.see-movie-ageLimited {
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
.see-movie-title {
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
.see-movie-showTime {
  font-size: 12px;
  font-weight: bold;
}
.see-movie-showTime> i {
  margin: 0px 5px;
}
  
</style>