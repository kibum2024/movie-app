<template>
  <div class="reservation-home-wrap">
    <div class="reservation-home-main">
      <!-- 진행상태 시작 -->
      <div class="reservation-home-side">
        <ul class="reservation-home-side-ul">
          <li>
            <div>01</div>
            <div>상영시간</div>
          </li>
          <li>
            <div>02</div>
            <div>인원/좌석</div>
          </li>
          <li>
            <div>03</div>
            <div>결제</div>
          </li>
          <li>
            <div>04</div>
            <div>결제완료</div>
          </li>
        </ul>
      </div>
      <!-- 진행상태 끝 -->
      <!-- 영화관선택 시작 -->
      <div class="reservation-home-cinema-wrap">
        <div class="reservation-home-cinema-view">{{changePlace}}</div>
        <div class="reservation-home-cinema-gubun">
          <div class="cinema-all">전체</div>
          <div class="cinema-special">스페셜관</div>
        </div>
        <div class="reservation-home-cinema-place">
          <div class="reservation-home-cinema">
            <ul class="reservation-home-cinema-ul">
              <li v-for="(cinema, index) in cinenaView" :key="index" @click="toggleCheckCinema(index, cinema.menuNo)" :class="{ 'clicked-item': clickedCinemaIndex === index }" >
                <span class="reservation-home-cinema-title">{{cinema.menuName}}<span class="reservation-home-cinema-count">({{cinema.menuCount}})</span></span>
                <i v-if="clickedCinemaIndex === index" class="bi bi-check-lg"></i> 
              </li>
            </ul>
          </div>
          <div class="reservation-home-place">
            <ul class="reservation-home-place-ul">
              <li v-for="(place, index) in placeView" :key="index" @click="toggleCheckPlace(index, place.placeNo, place.placeName)">
                <span class="reservation-home-place-title">{{place.placeName}}</span>
                <i v-if="clickedPlaceIndex === index" class="bi bi-check-lg"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 영화관선택 끝 -->
      <!-- 영화선택 시작 -->
      <div class="reservation-home-movie-wrap">
        <div class="reservation-home-movie-title">{{changeMovie}}</div>
        <div class="reservation-home-movie-gubun">
          <div class="reservation-home-movie-filter">
            <select title="영화 정렬 방법 선택">
              <option value="A">예매순</option>
              <option value="B">관객순</option>
              <option value="D">예정작</option>
            </select>
          </div>
          <div class="reservation-home-movie-sort">
            <ul class="reservation-home-movie-sort-ul">
              <li><i class="bi bi-list"></i></li>
              <li><i class="bi bi-grid-fill"></i></li>
            </ul>
          </div>
        </div>
        <div class="reservation-home-movie-view">
          <ul class="reservation-home-movie-view-ul">
            <li v-for="(movie, index) in movieView" :key="index" @click="toggleCheckMovie(index, movie.movieNo, movie.movieTitle)" :class="{ 'clicked-Movie': clickedMovieIndex === index }">
              <div class="reservation-home-movie-view-age" :style="ageColorObject(movie.ageLimited)">{{movie.ageLimited}}</div>
              <div class="reservation-home-movie-view-title">{{movie.movieTitle}}</div>
              <i v-if="clickedMovieIndex === index" class="bi bi-check-lg"></i>
            </li>
          </ul>
        </div>
      </div>
      <!-- 영화선택 끝 -->
      <!-- 영화시간 시작 -->
      <div class="reservation-home-daytime-wrap">
        <div class="reservation-home-day-title">{{changeDay}}</div>
        <div class="reservation-home-day-title-wrap">
          <div class="reservation-home-day-btn" @click="prevDay"><i class="bi bi-chevron-left"></i></div>
          <div class="reservation-home-day-showdate-wrap">
            <ul class="reservation-home-day-showdate-ul" :style="{ transform: `translateX(-${currentIndex * 416}px)`}">
              <li v-for="(showDay, index) in movieDayView" :key="index" @click="toggleCheckDay(index, showDay.viewDay, showDay.showDay)">
                <div class="day-title-month">{{showDay.month}}월</div>
                <div class="day-title-date" :class="{ 'clicked-Day': clickedDayIndex === index }">
                  <strong>{{showDay.date}}</strong>
                </div>
                <div class="day-title-day" :class="{ 'day-red-color': showDay.day === '일' || showDay.day === '오늘',
                                                     'day-blue-color': showDay.day === '토' }" >
                  {{showDay.day}}
                </div>
              </li>
            </ul>
          </div>
          <div class="reservation-home-day-btn" @click="nextDay"><i class="bi bi-chevron-right"></i></div>
        </div>
        <div class="reservation-home-showtime-menu-wrap">
          <ul class="reservation-home-showtime-menu">
            <li>전체</li>
            <li>스페셜관</li>
            <li>Atmos</li>
            <li>13시 이후</li>
            <li>19시 이후</li>
            <li>심야</li>
          </ul>
        </div>
        <div class="reservation-home-showtime-view">
          <!-- <div class="reservation-home-showtime-view-age" :style="ageColorObject(showtime.ageLimited)">{{showtime.ageLimited}}</div> -->
          <div class="reservation-home-showtime-view-title">{{changeMovie}}</div>
          <ul class="reservation-home-showtime-view-ul">
            <li v-for="(showtime, index) in showTimeView" :key="index" @click="toggleCheckMovie(index, showtime.movieNo, showtime.movieTitle)" :class="{ 'clicked-Movie': clickedMovieIndex === index }">
              <!-- <div class="reservation-home-showtime-view-age" :style="ageColorObject(showtime.ageLimited)">{{showtime.ageLimited}}</div>
              <div class="reservation-home-showtime-view-title">{{showtime.movieTitle}}</div> -->
              <div>{{showtime.showTime}}</div>
              <div>{{showtime.reservationCount}}</div>
              <div>{{showtime.capacityCount}}</div>
              <div>{{showtime.showRoom}}</div>

            </li>
          </ul>
        </div>
      </div>
      <!-- 영화시간 선택 끝 -->
    </div>
  </div>
</template>

<script>
import menuData from '@/assets/data/menu_data.js';
import placeData from '@/assets/data/place_data.js';
import placeMovieData from '@/assets/data/place_movie.js';
import movieShowData from '@/assets/data/movie_show_data.js';

export default {
  name: 'reservationHome',
  data() {
    return {
      menuData,
      placeData,
      placeMovieData,
      movieShowData,
      clickedCinemaIndex: null,
      clickedPlaceIndex: null,
      clickedMovieIndex: null,
      clickedDayIndex: null,
      clickedCinema: null,
      clickedPlace: null,
      clickedMovie: null,
      clickedDay: null,
      changePlace: '영화관 선택',
      changeMovie: '영화 선택',
      changeDay: '일자 선택',
      movieDayView: [],
      currentIndex: 0,
    };
  },
  created() {
    this.generateDates();
  },
  computed: {
    cinenaView() {
      const filteredMovies = this.menuData.cinemaMenu.filter(movie => movie.cinemaGUbun !== "2");
      return filteredMovies
        .sort((a, b) => a.menuNo - b.menuNo)
    },
    placeView() {
      const filteredMovies = this.placeData.filter(place => place.menuNo === this.clickedCinema);
      // console.log("clickedCinema  placeView:", this.clickedCinema);
      // console.log("filteredMovies  placeView:", filteredMovies);
      return filteredMovies
    },
    movieView() {
      const filteredMovies = this.placeMovieData.filter(movie => movie.menuNo === this.clickedCinema && movie.placeNo  === this.clickedPlace);
      return filteredMovies
    },
    showTimeView() {
      const filteredMovies = this.movieShowData.filter(show => show.menuNo === this.clickedCinema && 
                                                       show.placeNo  === this.clickedPlace &&
                                                       show.movieNo  === this.clickedMovie &&
                                                       show.showDay  === this.clickedDay
                                                       );
      return filteredMovies
    },
  },
  methods: {
    toggleCheckCinema(index, menuNo) {
      this.clickedCinemaIndex = index;
      this.clickedPlaceIndex = null;
      this.clickedMovieIndex = null;
      this.clickedCinema = menuNo;
    },
    toggleCheckPlace(index, placeNo, place) {
      this.clickedPlaceIndex = index;
      this.clickedMovieIndex = null;
      this.clickedPlace = placeNo;
      this.changePlace = place;
    },
    toggleCheckMovie(index, movieNo, movie) {
      this.clickedMovieIndex = index;
      this.clickedMovie = movieNo;
      this.changeMovie = movie;
    },
    toggleCheckDay(index, viewDay, showDay) {
      this.clickedDayIndex = index;
      this.clickedDay = showDay;
      this.changeDay = viewDay;
    },
    ageColorObject(age) {
     if (age === 'ALL') {
       return { backgroundColor: 'rgb(11, 156, 49)' };
      } else if (age === '19') {
        return { backgroundColor: 'red' };
      } else if (age === '15') {
        return { backgroundColor: 'rgb(223, 141, 41)' };
      } else {
        return { backgroundColor: 'rgb(222, 233, 14)' }; // 기본값
      }
    },
    generateDates() {
      const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
      const today = new Date();
      let todayCheck = null;

      for (let i = 0; i < 32; i++) {
          const currentDate = new Date();
          currentDate.setDate(today.getDate() + i);

          const year = currentDate.getFullYear();
          const month = currentDate.getMonth() + 1;
          const date = currentDate.getDate();
          let day = null;
          if (!todayCheck) {
            day = "오늘";
            todayCheck = "1";
          } else {
            day = daysOfWeek[currentDate.getDay()];
          }

          this.movieDayView.push({
            showDay: year + String(month).padStart(2, "0") + String(date).padStart(2, "0"),
            viewDay: year + '-' + String(month).padStart(2, "0") + '-' + String(date).padStart(2, "0") + '(' +  day + ')',
            month: month,
            date: date,
            day: day
          });
      }
      // this.movieDayView[0].day = "오늘";
    },
    nextDay () {
      if (this.currentIndex === 3) {
        this.currentIndex = 3;
      } else {
        this.currentIndex = this.currentIndex + 1;
      }
    },
    prevDay () {
      if (this.currentIndex === 0) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = this.currentIndex - 1;
      }
    }
  }
};
</script>

<style scoped>
.reservation-home-wrap {
  width: 100%;
  margin-top: 111px;
  padding: 80px 100px;
  height: 1080px;
  background-color: #4d4b4b;
} 
.reservation-home-main {
  display: flex;
  width: 1320px;
  height: 920px;
  background-color: white;
}
.reservation-home-side {
  width: 78px;
  height: 870px;
} 
.reservation-home-side-ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
}
.reservation-home-side-ul> li {
  width: 78px;
  font-size: 14px;
  flex: 1; /* 동일한 비율로 높이 설정 */
  list-style: none; /* 기본 리스트 스타일 제거 */
  border: 1px solid #ccc; /* 시각적 구분을 위해 테두리 추가 */
  display: flex;
  flex-direction: column;
  align-items: center; /* 수직 중앙 정렬 */
  justify-content: center; /* 수평 중앙 정렬 */
  background-color: white;
  color: #aaa;
}  
.reservation-home-cinema-view {
  width: 390px;
  height: 55px;
  line-height: 55px;
  font-size: 18px;
  font-weight: bold;
  background-color: black;
  color: white;
}
.reservation-home-cinema-gubun {
  display: flex;
  width: 390px;
  height: 55px;
  line-height: 55px;
  border: 1px solid #aaa;
}
.reservation-home-cinema-gubun> div {
  width: 175px;
  height: 55px;
  line-height: 55px;
}
.reservation-home-cinema-place {
  display: flex;
}
.reservation-home-cinema {
  height: 760px;
  background-color: #eee;
}
.reservation-home-cinema-ul {
  width: 175px;
  margin: 0;
  padding: 0;
}
.reservation-home-cinema-ul> li {
  display: flex;
  width: 175px;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  padding: 0px 15px;
  color: rgb(57, 56, 56);
  cursor: pointer;
}
.reservation-home-cinema-title {
  width: 140px;
  height: 34px;
  display: inline-block;
}
.reservation-home-cinema-count {
  font-size: 10px;
  color: rgb(57, 56, 56);
}
.bi-check-lg {
  color: red;
  font-size: 1.3rem;
  font-weight: bold;
}
.reservation-home-place {
  height: 760px;
}
.reservation-home-place-ul {
  width: 215px;
  height: 760px;
  margin: 0;
  padding: 0;
  overflow: auto;
}
.reservation-home-place-ul> li {
  display: inline-flex;
  width: 210px;
  height: 34px;
  line-height: 34px;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  padding: 0px 15px;
  color: rgb(57, 56, 56);
  cursor: pointer;
}
.reservation-home-place-title {
  width: 160px;
  display: inline-block;
}
.clicked-item {
  background-color: white; /* 원하는 배경색으로 변경 */
}
.reservation-home-movie-wrap {
  width: 350px;
}
.reservation-home-movie-title {
  width: 355px;
  height: 55px;
  line-height: 55px;
  font-size: 18px;
  font-weight: bold;
  background-color: black;
  color: white;
}
.reservation-home-movie-gubun {
  display: flex;
  align-items: center;
  width: 355px;
  height: 55px;
  line-height: 55px;
  border: 1px solid #aaa;
}
.reservation-home-movie-filter {
  width: 200px;
  height: 30px;
  line-height: 30px;
  margin: 0px 55px 0px 20px;
}
.reservation-home-movie-filter> select {
    height: 30px; /* 높이 조절 */
    width: 200px; /* 폭 조절 */
    font-size: 16px; /* 글자 크기 */
    border: 1px solid #ccc; /* 테두리 */
    border-radius: 5px; /* 모서리 둥글게 */
}
.reservation-home-movie-filter> select option {
    background-color: #f0f0f0; /* 배경색 */
    color: #333; /* 글자색 */
    padding: 5px; /* 내부 여백 */
}
.reservation-home-movie-sort-ul {
  display: flex;
  margin: 0;
  padding: 0;
}
.reservation-home-movie-view-ul {
  width: 355px;
  height: 760px;
  margin: 0;
  padding: 0;
  overflow: auto;
}
.reservation-home-movie-view-ul> li {
  display: flex;
  align-items: center;
  text-align: left;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-weight: bold;
}
.reservation-home-movie-view-age {
  width: 28px;
  height: 28px;
  line-height: 28px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin: 0px 5px;
  background-color: rgb(11, 156, 49);
  border: 1px solid #eee;
  border-radius: 5px;
  color: white;
}
.reservation-home-movie-view-title {
  width: 300px;
}
.reservation-home-movie-view {
  height: 760px;
}

.bi-list {
  font-size: 1.7rem;
  font-weight: bold;
  margin: 0px 10px;
}
.bi-grid-fill {
  font-size: 1.2rem;
  font-weight: bold;
}
.clicked-Movie {
  border: 2px solid black;
}
.reservation-home-day-title-wrap {
  display: flex;
  width: 505px;
  height: 80px;
}
.reservation-home-day-title {
  width: 505pxpx;
  height: 55px;
  line-height: 55px;
  font-size: 18px;
  font-weight: bold;
  background-color: black;
  color: white;
}
.reservation-home-day-btn {
  width: 55px;
  height: 80px;
  line-height: 80px;
  font-size: 1.5rem;
  color: #aaa;
  cursor: pointer;
}
.reservation-home-day-showdate-wrap {
  width: 470px;
  height: 80px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.reservation-home-day-showdate-ul {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  top: 15px;
} 
.reservation-home-day-showdate-ul> li {
  width: 52px;
  height: 73px;
  line-height: 73px;
}
.day-title-month {
  font-size: 12px;
  width: 52px;
  height: 15px;
  line-height: 15px;
}
.day-title-date {
  font-size: 15px;
  font-weight: bold;
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin: 0px 11.25px;
  text-align: center;
  background-color: white;
  color: black;
}
.clicked-Day {
  border-radius: 50%;
  background-color: black;
  color: white;
}
.day-title-day {
  font-size: 13px;
  width: 52px;
  height: 25px;
  line-height: 25px;
  text-align: center;
}
.day-red-color {
  color: red;
}
.day-blue-color {
  color: blue;
}
.reservation-home-showtime-menu {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 30px;
  margin: 0;
  padding: 0;
  height: 55px;
  line-height: 55px;
  border-bottom: 1px solid #aaa;
  cursor: pointer;
}
.reservation-home-showtime-menu> li {
  font-size: 13px;
  font-weight: bold;
  color: #aaa;
}
</style>