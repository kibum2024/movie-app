<template>
  <div class="want-movie-wrap">
    <div class="want-movie-play-wrap">
      <div class="want-movie-play-sub-wrap">
        <div class="want-movie-play-sub">
          <div class="want-movie-subTitle-wrap">
            <div class="want-movie-subTitle active">현재 상영작</div>
            <div class="want-movie-subTitle">상영 예상작</div>
          </div>
          <div class="want-movie-sort">
            <ul class="want-movie-sort-ul">
              <li>예매순</li>
              <li>관람평 많은순</li>
              <li>보고싶어요순</li>
            </ul>
          </div>  
        </div>
        <div class="want-movie-play-list">
          <ul class="want-movie-play-ul">
            <li v-for="(movieImg, index) in seeMovies" :key="index">
              <img :src="getImagePath(movieImg.movieImgName)" :alt="movieImg.movieImgName">
              <div class="want-movie-list-title">
                <div class="want-movie-ageLimited" :style="ageColorObject(movieImg.ageLimited)">{{movieImg.ageLimited}}</div>
                <div class="want-movie-title">{{movieImg.movieTitle}}</div>
              </div>
              <div class="want-movie-showTime"><i class="bi bi-clock"></i>{{movieImg.showTime}}</div>
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
      const filteredMovies = this.movieData.filter(movie => movie.openGUbun === "1");
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
.want-movie-wrap {
  margin-top: 141px;
}
.want-movie-play-sub-wrap {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}
.want-movie-subTitle-wrap {
  display: flex;
}
.want-movie-subTitle {
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin: 10px 5px;
}
.want-movie-subTitle.active {
  border-bottom: 2px solid #aaa;
}
.want-movie-top5 {
  font-size: 16px;
  font-weight: bold;
  color: red;
}
.want-movie-play-wrap {
  width: 980px;
  margin: 50px auto;
}
.want-movie-play-sub {
  display: flex;
  justify-content: space-between;
  align-items: flex-end; 
}  
.want-movie-sort-ul {
  display: flex;
  margin: 5px 0px;
  padding: 0;
}
.want-movie-sort-ul> li {
  position: relative;
  height: 24px;
  line-height: 24px;
  font-size: 12px;
  color: #aaa;
  padding: 0px 10px;
}
.want-movie-sort-ul> li:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 0px; /* 선의 위치를 조정 */
  top: 45%;
  transform: translateY(-50%);
  height: 30%; /* 선의 길이 조정 */
  font-weight: bold;
  border-right: 1px solid #aaa; /* 선의 스타일 */
}
.want-movie-play-ul {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  margin: 0;
  padding: 0;
}
.want-movie-play-ul> li> img {
  width: 184px;
  height: 262px;
  border-radius: 5px;
}
.want-movie-list-title {
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 20px auto auto 5px;
}
.want-movie-ageLimited {
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
.want-movie-title {
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
.want-movie-showTime {
  font-size: 12px;
  font-weight: bold;
}
.want-movie-showTime> i {
  margin: 0px 5px;
}
  
</style>